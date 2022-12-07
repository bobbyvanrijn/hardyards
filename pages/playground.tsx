import { useRouter } from 'next/router';

import HeaderSpacer from '../components/HeaderSpacer';
import Image from 'next/image';
import styles from './playground.module.css';

import GridLayout from '../layouts/grid';
import Meta from '../components/Meta';

export default function Playground() {
    const router = useRouter();

    async function share(
        sharable: {
            title: string,
            description: string,
            url: string
        }
    ) {
        try {
            await navigator.share( sharable );
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.playgroundHero}>
            <GridLayout>
                <h1 grid-area='1' grid-align='bottom' className='trim-both'>
                    Geranium ‘Rozanne’
                </h1>

                <Image
                    grid-area='1.5/3'
                    className={styles.playgroundHero__Image}
                    src={'/images/geranium-rozanne.webp'}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt="Featured image"
                    height={1416}
                    width={1416}
                />

                <p grid-area='1' className='trim-both'>This hardy and drought-tolerant perennial plant is an easy-to-care-for variety with lacy, silvery-grey foliage and bright yellow flowers that attract pollinators. It can be grown in borders, rock gardens, and containers, and prefers full sun and well-drained soil. It is hardy to zone 4 and can tolerate temperatures down to -34°C.</p>

                <div grid-area='3a' className='trim-both'>
                    Foo<br />
                    Bar
                </div>
                <p
                    className='lead trim-both'
                    grid-area='2/3'
                >
                    Hybrid of Geranium himalayense and Geranium wallichianum ‘Buxton&apos;s variety’
                </p>

                <p
                    className='body-text trim-both trim-both--secondary'
                    grid-area='2/3'
                >
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>

                <ol
                    className='body-text trim-both trim-both--secondary'
                    grid-area='2/3'
                >
                    <li>Drift, group, border, flower meadow.</li>
                    <li>Praerie. Clump-forming ground cover.</li>
                    <li>Variegated foliage.</li>
                </ol>

                <ul
                    className='body-text trim-both trim-both--secondary'
                    grid-area='2/3'
                >
                    <li>Drift, group, border, flower meadow.</li>
                    <li>Praerie. Clump-forming ground cover.</li>
                    <li>Variegated foliage.</li>
                </ul>

                <table
                    grid-area='2/3'
                    summary="Meaningless data, but table used to test TFOOT behavior in user agents"
                >
                    <tfoot>
                        <tr>
                            <th>Rows</th>
                            <th>Col 1</th>
                            <th>Col 2</th>
                            <th>Col 3</th>
                            <th>Col 4</th>
                            <th>Col 5</th>
                            <th>Col 6</th>
                            <th>Col 7</th>
                            <th>Col 8</th>
                            <th>Col 9</th>
                        </tr>
                    </tfoot>

                    <tbody>
                        <tr>
                            <th>Row 1</th>
                            <td>Y</td>
                            <td>Z</td>
                            <td>Z</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>X</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                        </tr>

                        <tr>
                            <th>Row 2</th>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                        </tr>

                        <tr>
                            <th>Row 3</th>
                            <td>Z</td>
                            <td>X</td>
                            <td>Z</td>
                            <td>X</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Z</td>
                            <td>Y</td>
                            <td>Y</td>
                        </tr>
                    </tbody>
                </table>

                <figure
                    grid-area='1'
                >
                    <Image
                        src={'/images/geranium-rozanne.webp'}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        alt="Featured image"
                        height={800}
                        width={1416}
                    />

                    <figcaption>
                        Hybrid of Geranium himalayense and Geranium wallichianum ‘Buxton&apos;s variety’
                    </figcaption>
                </figure>

               <Image
                    grid-area='2'
                    src={'/images/geranium-rozanne.webp'}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt="Featured image"
                    height={800}
                    width={1416}
                />

                <Image
                    grid-area='3'
                    src={'/images/geranium-rozanne.webp'}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt="Featured image"
                    height={800}
                    width={1416}
                />
            </GridLayout>
        </div>
    )
}
