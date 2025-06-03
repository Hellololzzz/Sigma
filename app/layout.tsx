import type React from "react"

export const metadata = {
  title: "Ronny Sniffer:3 - Cat IP Detective",
  description: "Track your digital pawprints with Ronny the cat detective!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body {
              margin: 0;
              padding: 0;
              background: #0F0F1A;
              overflow-x: hidden;
            }
            
            * {
              box-sizing: border-box;
            }
          `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}


import './globals.css'