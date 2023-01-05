import { ImageResponse } from '@vercel/og';
import { generatePolygon } from 'helpers/generatePolygon';

export const config = {
  runtime: 'experimental-edge',
};

export default function Icon() {
    const pathD = generatePolygon(180, false, 40);
    return new ImageResponse(
        (
            <svg
                style={{
                    width: '240px',
                    height: '240px',
                }}
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="gooify" width="400%" x="-150%" height="400%" y="-150%">
                        <feGaussianBlur id="blurElement" in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix" 
                            values="
                                1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 255 -153
                            "
                        />
                    </filter>
                </defs>
                <g filter="url(#gooify)">
                    <path fill='#da9713' d={pathD} />
                </g>
            </svg>
        ),
        {
        width: 180,
        height: 180,
        },
  );
}