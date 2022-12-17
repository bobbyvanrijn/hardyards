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
        <GridLayout>
            <div
                className={styles.playground}
                grid-x='2/3'
            >
                <ol className='body-text trim-both trim-both--secondary'>
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
                </table>
            </div>
        </GridLayout>
    )
}
