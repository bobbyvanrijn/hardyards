import { plants } from '../content/plants';
import { guides } from '../content/guides';

import Link from 'next/link';

import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <menu>
                <li>
                    <Link className='trim-both' href='/plants'>
                        Plants<sup>{ plants.length }</sup>
                    </Link>
                </li>
                <li>
                    <Link className='trim-both' href='/calendar'>Calendar</Link>
                </li>
                <li>
                    <Link className='trim-both' href='/collections'>Collections</Link>
                </li>
                <li>
                    <Link className='trim-both' href='/guides'>Guides<sup>{guides.length}</sup></Link>
                </li>
                <li>
                    <Link className='trim-both' href='/playground'>Playground</Link>
                </li>
            </menu>
        </nav>
    )
}