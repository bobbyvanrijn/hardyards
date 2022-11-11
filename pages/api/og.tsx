import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 240,
          background: 'rgb(--var(--black))',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Sup
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
