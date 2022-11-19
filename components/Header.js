import Image from 'next/image';
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
                <Link href='/' title='Back to homepage'>
                    <Image
                        className={styles.header__logo} 
                        src='/hardyards-light-sm.svg'
                        width='200'
                        height='30'
                        role='presentation'
                        alt='Hardyards'
                    />
                </Link>

                <div
                    onClick={toggleMenu}
                    className={[
                        styles.header__button
                    ]}
                    data-active={menuActive}
                />
            </div>

            <div
                className={styles.header__menuWrapper}
                data-active={menuActive}
            >
                <Menu
                    handleClose={toggleMenu}
                />
            </div>
        </header>
    );
}