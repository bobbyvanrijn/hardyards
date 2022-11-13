import { ImageResponse } from '@vercel/og';
import Image from 'next/image';
import { NextRequest } from 'next/server';
export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
          ? searchParams.get('title')?.slice(0, 100)
          : 'My default title';
    
        return new ImageResponse(
          (
            <div
              style={{
                backgroundColor: 'black',
                backgroundSize: '150px 150px',
                height: '100%',
                width: '100%',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                flexWrap: 'nowrap',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  justifyItems: 'center',
                }}
              >
                <img
                    alt="Vercel"
                    width={1600}
                    height={600}
                    src='https://hardyards.vercel.app/_next/image?url=%2Fimages%2Fgeranium.webp&w=3840&q=75'
                    style={{ 
                        zIndex: '-1',
                        opacity: .2
                    }}
                />
              </div>
              <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  fontSize: 60,
                  fontStyle: 'normal',
                  letterSpacing: '-0.025em',
                  color: 'white',
                  marginTop: 30,
                  padding: '0 120px',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {title}
              </div>
            </div>
          ),
          {
            width: 1200,
            height: 630,
          },
        );
      } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
          status: 500,
        });
      }
}
