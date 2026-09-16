import { ImageResponse } from 'next/og';

export const alt = 'BridgePay: a wallet that works the way you already bank';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B1220',
          color: '#F5F7FA',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -2 }}>BridgePay</div>
        <div style={{ fontSize: 32, marginTop: 20, color: '#A6B0C3' }}>
          A wallet that works the way you already bank
        </div>
      </div>
    ),
    { ...size }
  );
}
