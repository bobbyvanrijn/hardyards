import { useRouter } from 'next/router';

import HeaderSpacer from '../components/HeaderSpacer';
import Image from 'next/image';
import styles from './playground.module.css';

import GridLayout from '../layouts/grid';
import ShadowPan from 'components/ShadowPan';

export default function Playground() {
    const router = useRouter();

    return (
        <>
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
                        <p>Terra preta is a type of very dark, fertile anthropogenic soil (anthrosol) found in the Amazon Basin. It is also known as &ldquo;Amazonian dark earth&rdquo; or &ldquo;Indian black earth&rdquo;. In Portuguese its full name is terra preta do índio or terra preta de índio (&ldquo;black soil of the Indian&rdquo;, &ldquo;Indians&apos; black earth&rdquo;). Terra mulata (&ldquo;mulatto earth&rdquo;) is lighter or brownish in color.</p>
                    </div>
                </GridLayout>
            </div>
        </>
    )
}
