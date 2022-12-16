import Link from 'next/link';

import { useEffect } from 'react';
import { useRouter} from 'next/router'
import { useState } from 'react';

import Menu from './Menu';

import styles from './Header.module.css';

export default function Header() {
    const router = useRouter()
    const [menuActive, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!menuActive);
    };

    useEffect(() => {
        setActive(false)
    }, [router.query])

    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <Link
                    href='/'
                    title='Back to homepage'
                    className={`${styles.header__logo} trim-both`}
                >
                    HY
                </Link>
            </div>
        </header>
    );
}