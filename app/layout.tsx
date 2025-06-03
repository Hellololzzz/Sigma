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
            
            .cat-emoji {
              animation: float 3s ease-in-out infinite;
            }
            
            .loading-text {
              animation: pulse 1.5s infinite;
            }
            
            .button-hover-effect:hover {
              opacity: 1;
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