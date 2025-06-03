"use client"

import { useState, useEffect } from "react"

interface LocationData {
  ip: string
  city: string
  region: string
  country: string
  timezone: string
  latitude: string
  longitude: string
  org: string
}

export default function RonnySniffer() {
  const [locationData, setLocationData] = useState<LocationData | null>(null)
  const [loading, setLoading] = useState(true)
  const [catMood, setCatMood] = useState("😼")
  const [showGlow, setShowGlow] = useState(false)

  const catMoods = ["😼", "😺", "😻", "🙀", "😾", "🐱"]

  const fetchLocationData = async () => {
    setLoading(true)
    setCatMood("🔍")
    setShowGlow(true)

    try {
      const response = await fetch("/api/location")
      const data = await response.json()
      setLocationData(data)
      setCatMood(catMoods[Math.floor(Math.random() * catMoods.length)])
      console.log("Ronny found:", data)
    } catch (err) {
      console.error("Meow! Error:", err)
      setCatMood("😿")
    } finally {
      setLoading(false)
      setTimeout(() => setShowGlow(false), 1000)
    }
  }

  useEffect(() => {
    fetchLocationData()

    // Add some cool effects
    const interval = setInterval(() => {
      setShowGlow(true)
      setTimeout(() => setShowGlow(false), 1000)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0F0F1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#fff",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(149, 76, 233, 0.6) 0%, rgba(149, 76, 233, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(20px)",
            zIndex: 0,
          }}
        />
        <div style={{ textAlign: "center", zIndex: 1, position: "relative" }}>
          <div
            style={{
              fontSize: "80px",
              marginBottom: "20px",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            🐱
          </div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>Ronny is sniffing...</div>
          <div
            style={{
              fontSize: "16px",
              marginTop: "10px",
              opacity: 0.7,
              animation: "blink 1.5s infinite",
            }}
          >
            *tracking digital pawprints*
          </div>

          <style jsx>{`
            @keyframes pulse {
              0% { transform: scale(0.8); opacity: 0.3; }
              50% { transform: scale(1); opacity: 0.6; }
              100% { transform: scale(0.8); opacity: 0.3; }
            }
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            @keyframes blink {
              0% { opacity: 0.4; }
              50% { opacity: 0.8; }
              100% { opacity: 0.4; }
            }
          `}</style>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F0F1A",
        padding: "20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(149, 76, 233, 0.15) 0%, rgba(149, 76, 233, 0) 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(191, 131, 255, 0.1) 0%, rgba(191, 131, 255, 0) 70%)",
          borderRadius: "50%",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "100px",
              marginBottom: "10px",
              filter: showGlow ? "drop-shadow(0 0 15px rgba(191, 131, 255, 0.8))" : "none",
              transition: "filter 0.5s ease",
            }}
          >
            {catMood}
          </div>
          <h1
            style={{
              fontSize: "48px",
              margin: "0",
              background: "linear-gradient(90deg, #BF83FF, #954CE9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Ronny Sniffer:3
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#BF83FF",
              margin: "10px 0 0 0",
              opacity: 0.8,
            }}
          >
            tracking your digital pawprints with purr-fect precision
          </p>
        </div>

        {/* Info Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* IP Address Card */}
          <div
            style={{
              background: "rgba(25, 25, 35, 0.7)",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              border: "1px solid rgba(149, 76, 233, 0.3)",
              backdropFilter: "blur(8px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)"
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(149, 76, 233, 0.3)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #954CE9, #BF83FF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "15px",
                  boxShadow: "0 4px 10px rgba(149, 76, 233, 0.3)",
                }}
              >
                <span style={{ fontSize: "20px" }}>🌐</span>
              </div>
              <div style={{ fontSize: "14px", color: "#BF83FF", fontWeight: "bold", letterSpacing: "1px" }}>
                IP ADDRESS
              </div>
            </div>
            <div
              style={{
                fontSize: "32px",
                fontFamily: "monospace",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {locationData?.ip || "Hunting..."}
            </div>
          </div>

          {/* Location Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Country */}
            <div
              style={{
                background: "rgba(25, 25, 35, 0.7)",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                border: "1px solid rgba(149, 76, 233, 0.2)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #954CE9, #BF83FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    opacity: 0.8,
                  }}
                >
                  <span style={{ fontSize: "16px" }}>🗺️</span>
                </div>
                <div style={{ fontSize: "12px", color: "#BF83FF", fontWeight: "bold", letterSpacing: "1px" }}>
                  COUNTRY
                </div>
              </div>
              <div style={{ fontSize: "24px", color: "#fff", fontWeight: "bold" }}>
                {locationData?.country || "Sniffing..."}
              </div>
            </div>

            {/* Region */}
            <div
              style={{
                background: "rgba(25, 25, 35, 0.7)",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                border: "1px solid rgba(149, 76, 233, 0.2)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #954CE9, #BF83FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    opacity: 0.8,
                  }}
                >
                  <span style={{ fontSize: "16px" }}>🏔️</span>
                </div>
                <div style={{ fontSize: "12px", color: "#BF83FF", fontWeight: "bold", letterSpacing: "1px" }}>
                  REGION
                </div>
              </div>
              <div style={{ fontSize: "24px", color: "#fff", fontWeight: "bold" }}>
                {locationData?.region || "Tracking..."}
              </div>
            </div>

            {/* City */}
            <div
              style={{
                background: "rgba(25, 25, 35, 0.7)",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                border: "1px solid rgba(149, 76, 233, 0.2)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #954CE9, #BF83FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    opacity: 0.8,
                  }}
                >
                  <span style={{ fontSize: "16px" }}>🏙️</span>
                </div>
                <div style={{ fontSize: "12px", color: "#BF83FF", fontWeight: "bold", letterSpacing: "1px" }}>CITY</div>
              </div>
              <div style={{ fontSize: "24px", color: "#fff", fontWeight: "bold" }}>
                {locationData?.city || "Investigating..."}
              </div>
            </div>

            {/* ISP/Organization */}
            <div
              style={{
                background: "rgba(25, 25, 35, 0.7)",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                border: "1px solid rgba(149, 76, 233, 0.2)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #954CE9, #BF83FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    opacity: 0.8,
                  }}
                >
                  <span style={{ fontSize: "16px" }}>🔌</span>
                </div>
                <div style={{ fontSize: "12px", color: "#BF83FF", fontWeight: "bold", letterSpacing: "1px" }}>ISP</div>
              </div>
              <div style={{ fontSize: "20px", color: "#fff", fontWeight: "bold" }}>
                {locationData?.org || "Detecting..."}
              </div>
            </div>
          </div>

          {/* Refresh Button */}
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              onClick={fetchLocationData}
              style={{
                background: "linear-gradient(45deg, #954CE9, #BF83FF)",
                color: "white",
                border: "none",
                padding: "15px 30px",
                fontSize: "18px",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(149, 76, 233, 0.4)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(149, 76, 233, 0.6)"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(149, 76, 233, 0.4)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <span style={{ position: "relative", zIndex: 2 }}>🐾 Sniff Again 🐾</span>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(45deg, #BF83FF, #954CE9)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: 1,
                }}
                className="button-hover-effect"
              />
            </button>
          </div>

          {/* Cat Message */}
          <div
            style={{
              background: "rgba(25, 25, 35, 0.8)",
              padding: "25px",
              borderRadius: "16px",
              textAlign: "center",
              marginTop: "20px",
              border: "1px solid rgba(149, 76, 233, 0.3)",
              backdropFilter: "blur(8px)",
              boxShadow: showGlow ? "0 0 20px rgba(149, 76, 233, 0.4)" : "none",
              transition: "box-shadow 0.5s ease",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "#BF83FF",
                fontWeight: "bold",
              }}
            >
              🐱 Ronny's Report 🐱
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#fff",
                fontStyle: "italic",
                lineHeight: "1.6",
              }}
            >
              {locationData?.ip && locationData?.city
                ? `"Purr-fect! I've tracked your digital trail to ${locationData.city || "an unknown location"}, ${locationData.country || "somewhere"}! Your IP ${locationData.ip} can't hide from my superior feline senses! *smug cat noises* 😼"`
                : `"Still on the hunt! Your digital scent is elusive, but Ronny never gives up! *determined cat noises* 🔍"`}
            </div>
          </div>
        </div>
      </div>

      {/* Add some cool effects with CSS */}
      <style jsx>{`
        button:hover .button-hover-effect {
          opacity: 1;
        }
        
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  )
}
