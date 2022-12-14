import { useRouter } from 'next/router';

import HeaderSpacer from '../components/HeaderSpacer';
import Image from 'next/image';
import styles from './playground.module.css';

import GridLayout from '../layouts/grid';
import ShadowPan from 'components/ShadowPan';

import { generatePolygon } from 'helpers/generatePolygon';

export function getStaticProps() {
    return {
        props: {
            pathD: generatePolygon()
        }
    }
}

export default function Playground({ pathD }: any){
    const router = useRouter();

    return (
        <>
            <svg
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'fixed',
                    maxHeight: '100vh',
                    zIndex: 0,
                    top: 0,
                    left: 0,
                    transform: 'scaleY(.8)',
                    opacity: '.025'
                }}
            >
                <defs>
                    <filter id="gooify" width="400%" x="-150%" height="400%" y="-150%">
                    <feGaussianBlur id="blurElement" in="SourceGraphic" stdDeviation="5" result="blur" />
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
                    <path fill='rgb(255 255 255)' d={pathD} />
                </g>
            </svg>
            <GridLayout grid-enforce-rows='true'>
                <div
                    className='trim-both'
                    grid-x='1'
                >
                    <h1 className='display-second'>Demo</h1>
                </div>
                <div
                    className='body-text trim-both'
                    grid-x='2/3'
                >
                    <h2 className='display-prime'>Sunflower</h2>
                </div>
            </GridLayout>
            <div className={styles.playground} data-background='sunflower'>
                <GridLayout>
                    <div
                        className='body-text trim-both'
                        grid-x='2/3'
                    >
                        <h1>
                            Lorem ipsum
                        </h1>

                        <h2>
                            Title
                        </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates a architecto aliquid distinctio laboriosam, id blanditiis deserunt quibusdam ducimus cumque nihil neque quaerat fugiat provident, dicta possimus, illum consectetur quidem?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates a architecto aliquid distinctio laboriosam, id blanditiis deserunt quibusdam ducimus cumque nihil neque quaerat fugiat provident, dicta possimus, illum consectetur quidem?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates a architecto aliquid distinctio laboriosam, id blanditiis deserunt quibusdam ducimus cumque nihil neque quaerat fugiat provident, dicta possimus, illum consectetur quidem?</p>
                        {/* <ol className='body-text trim-both trim-both--secondary'>
                            <li>Drift, group, border, flower meadow.</li>
                            <li>Praerie. Clump-forming ground cover.</li>
                            <li>Variegated foliage.</li>
                        </ol>

                        <ul className='body-text trim-both trim-both--secondary'>
                            <li>Drift, group, border, flower meadow.</li>
                            <li>Praerie. Clump-forming ground cover.</li>
                            <li>Variegated foliage.</li>
                        </ul>

                        <table summary="Meaningless data, but table used to test TFOOT behavior in user agents">
                            <tfoot>
                                <tr>
                                    <th>Jan</th>
                                    <th>Feb</th>
                                    <th>Mar</th>
                                    <th>Apr</th>
                                    <th>Jun</th>
                                    <th>Jul</th>
                                    <th>Aug</th>
                                    <th>Sep</th>
                                    <th>Nov</th>
                                    <th>Dec</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td data-active='true'></td>
                                    <td data-active='true'></td>
                                    <td data-active='true'></td>
                                    <td data-active='true'></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </GridLayout>
            </div>
            <div className={styles.playground} data-background='black'>
                <GridLayout>
                    <div
                        className='body-text trim-both'
                        grid-x='1'
                    >
                        <h2>Terra preta</h2>
                    </div>
                    <div
                        className='body-text trim-both'
                        grid-x='2/3'
                    >
                        <p>Terra preta is a type of very dark, fertile anthropogenic soil (anthrosol) found in the Amazon Basin. It is also known as &ldquo;Amazonian dark earth&rdquo; or &ldquo;Indian black earth&rdquo;. In Portuguese its full name is terra preta do ??ndio or terra preta de ??ndio (&ldquo;black soil of the Indian&rdquo;, &ldquo;Indians&apos; black earth&rdquo;). Terra mulata (&ldquo;mulatto earth&rdquo;) is lighter or brownish in color.</p>
                    </div>

                    <div grid-x='2/3'>
                        <figure style={{ borderRadius: 'var(--scale-8)', width: '200px', aspectRatio: '2/3', position: 'relative', background: 'rgb(var(--mono-2) / .5)'}}>
                            <Image
                                src={`/images/secateurs.png`}
                                fill
                                alt=''
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                                sizes='40w'
                            />
                        </figure>
                    </div>
                </GridLayout>
            </div>
        </>
    )
}
