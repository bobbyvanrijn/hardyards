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
                    <Link href='/calendar'>Calendar</Link>
                </li>
                <li>
                    <Link href='/plants/collections'>Collections</Link>
                </li>
                <li>
                    <Link href='/guides'>Guides<sup>1</sup></Link>
                </li>
            </ul>
        </nav>
    )
}