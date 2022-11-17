import { plants } from '../content/plants';
import Link from 'next/link';

import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href='/plants'>
                        Plants<sup>{ plants.length }</sup>
                    </Link>
                </li>
                <li>
                    <Link href='/'>Inspiration</Link>
                </li>
                <li>
                    <Link href='/'>Collections</Link>
                </li>
                <li>
                    <Link href='/'>Guides<sup>1</sup></Link>
                </li>
            </ul>
        </nav>
    )
}