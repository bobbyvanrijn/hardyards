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
            <ol
                className='body-text trim-both trim-both--secondary'
                grid-x='2/3'
            >
                <li>Drift, group, border, flower meadow.</li>
                <li>Praerie. Clump-forming ground cover.</li>
                <li>Variegated foliage.</li>
            </ol>

            <ul
                className='body-text trim-both trim-both--secondary'
                grid-x='2/3'
            >
                <li>Drift, group, border, flower meadow.</li>
                <li>Praerie. Clump-forming ground cover.</li>
                <li>Variegated foliage.</li>
            </ul>

            <table
                grid-x='2/3'
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
        </GridLayout>
    )
}
