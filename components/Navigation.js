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
            </ul>
        </nav>
    )
}