import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Get IP from various headers first
    const forwarded = request.headers.get("x-forwarded-for")
    const realIp = request.headers.get("x-real-ip")
    const cfIp = request.headers.get("cf-connecting-ip")
    let ip = forwarded?.split(",")[0]?.trim() || realIp || cfIp

    // If we don't have an IP or it's localhost, try to get it from an external service
    if (!ip || ip === "127.0.0.1" || ip.startsWith("192.168.") || ip.startsWith("10.")) {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json")
        const ipData = await ipResponse.json()
        ip = ipData.ip
      } catch (error) {
        console.log("Could not fetch IP from ipify")
      }
    }

    // Now get location data using a different API that's more reliable
    if (ip && ip !== "127.0.0.1") {
      try {
        // Use ipinfo.io - more reliable than ipapi.co
        const locationResponse = await fetch(`https://ipinfo.io/${ip}/json`)

        if (locationResponse.ok) {
          const locationData = await locationResponse.json()

          // Parse location data
          const loc = locationData.loc ? locationData.loc.split(",") : ["", ""]

          return Response.json({
            ip: ip,
            country: locationData.country || "",
            region: locationData.region || "",
            city: locationData.city || "",
            timezone: locationData.timezone || "",
            latitude: loc[0] || "",
            longitude: loc[1] || "",
            org: locationData.org || "",
          })
        }
      } catch (error) {
        console.log("ipinfo.io API failed, trying backup API")
      }

      // Try another API as backup
      try {
        const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`)

        if (geoResponse.ok) {
          const geoData = await geoResponse.json()

          return Response.json({
            ip: ip,
            country: geoData.country_name || "",
            region: geoData.region || "",
            city: geoData.city || "",
            timezone: geoData.timezone || "",
            latitude: geoData.latitude?.toString() || "",
            longitude: geoData.longitude?.toString() || "",
            org: geoData.org || "",
          })
        }
      } catch (error) {
        console.log("Backup API failed:", error)
      }
    }

    // Last resort - try one more API
    try {
      const response = await fetch(`https://ipwho.is/${ip}`)
      const data = await response.json()

      if (data.success !== false) {
        return Response.json({
          ip: ip || "Unknown",
          country: data.country || "",
          region: data.region || "",
          city: data.city || "",
          timezone: data.timezone?.id || "",
          latitude: data.latitude?.toString() || "",
          longitude: data.longitude?.toString() || "",
          org: data.connection?.isp || "",
        })
      }
    } catch (error) {
      console.log("Final API attempt failed:", error)
    }

    // If all APIs fail, return just the IP
    return Response.json({
      ip: ip || "Unable to detect",
      country: "",
      region: "",
      city: "",
      timezone: "",
      latitude: "",
      longitude: "",
      org: "",
    })
  } catch (error) {
    console.error("Ronny encountered an error:", error)

    // Last resort - try to get just the IP
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json")
      const ipData = await ipResponse.json()

      return Response.json({
        ip: ipData.ip || "Error getting IP",
        country: "",
        region: "",
        city: "",
        timezone: "",
        latitude: "",
        longitude: "",
        org: "",
      })
    } catch (finalError) {
      return Response.json({
        ip: "Meow! Error detected!",
        country: "",
        region: "",
        city: "",
        timezone: "",
        latitude: "",
        longitude: "",
        org: "",
      })
    }
  }
}
