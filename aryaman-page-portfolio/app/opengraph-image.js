import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.02em',
          fontWeight: 700,
        }}
      >
        <div style={{ color: '#FE651A', fontSize: 40, marginBottom: 20, letterSpacing: '0.4em' }}>
          PORTFOLIO
        </div>
        <div>ARYAMAN PAGE</div>
        <div style={{ fontSize: 24, marginTop: 40, color: '#707070', letterSpacing: '0.1em' }}>
          UI/UX DESIGNER & CREATIVE DIRECTOR
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
