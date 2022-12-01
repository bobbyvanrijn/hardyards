import { useRouter } from 'next/router';

import HeaderSpacer from '../components/HeaderSpacer';
import Image from 'next/image';
import styles from './playground.module.css';

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
        <>
            <div className={styles.grid}>
                <HeaderSpacer />

                <div className={styles.grid__field} grid-area='1'>
                    <h1 className='trim-both'>
                        Geranium ‘Rozanne’
                    </h1>
                </div>

                <p
                    className={`${styles.grid__field} lead trim-both`}
                    grid-area='2/3'
                >
                    Hybrid of Geranium himalayense and Geranium wallichianum ‘Buxton&apos;s variety’
                </p>

                <p
                    className={`${styles.grid__field} body-text trim-both trim-both--source`}
                    grid-area='2/3'
                >
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>

                <ol
                    className={`${styles.grid__field} body-text trim-both trim-both--source`}
                    grid-area='2/3'
                >
                    <li>Drift, group, border, flower meadow.</li>
                    <li>Praerie. Clump-forming ground cover.</li>
                    <li>Variegated foliage.</li>
                </ol>

                <ul
                    className={`${styles.grid__field} body-text trim-both trim-both--source`}
                    grid-area='2/3'
                >
                    <li>Drift, group, border, flower meadow.</li>
                    <li>Praerie. Clump-forming ground cover.</li>
                    <li>Variegated foliage.</li>
                </ul>

                <table
                    className={`${styles.grid__field}`}
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
                    className={styles.grid__field}
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
                    className={styles.grid__field}
                    grid-area='2'
                    src={'/images/geranium-rozanne.webp'}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt="Featured image"
                    height={800}
                    width={1416}
                />

                <Image
                    className={styles.grid__field}
                    grid-area='3'
                    src={'/images/geranium-rozanne.webp'}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt="Featured image"
                    height={800}
                    width={1416}
                />
            </div>
        </>
    )
}
