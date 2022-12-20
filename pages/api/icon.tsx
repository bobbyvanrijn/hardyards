import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#da9713',
          color: 'white',
          margin: '10%',
          width: '80%',
          height: '80%',
          borderRadius: '50%'
        }}
      />
    ),
    {
      width: 180,
      height: 180,
    },
  );
}