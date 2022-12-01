import { plants } from '../content/plants';
import { guides } from '../content/guides';

import Link from 'next/link';

import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link className='trim-both' href='/plants'>
                        Plants<sup>{ plants.length }</sup>
                    </Link>
                </li>
                <li>
                    <Link className='trim-both' href='/calendar'>Calendar</Link>
                </li>
                <li>
                    <Link className='trim-both' href='/plants/collections'>Collections</Link>
                </li>
                <li>
                    <Link className='trim-both' href='/guides'>Guides<sup>{guides.length}</sup></Link>
                </li>
                <li>
                    <Link className='trim-both' href='/playground'>Playground</Link>
                </li>
            </ul>

            <div className='body-text'>
                <div>
                    © 2023. All rights reserved.
                </div>
                <div>
                    Built with React and Next.js. Source code is available on Github, the latest version is 1.0.0. This app is hosted by Vercel.
                </div>
                <div>
                    Typeset in Source Serif 4 by Frank Grießhammer and Inter by Rasmus Andersson.
                </div>
            </div>
        </nav>
    )
}