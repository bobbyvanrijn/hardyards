import Image from 'next/image';
import Link from 'next/link';

import { Add } from '@carbon/icons-react';

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
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <Link href='/'>
                    <Image
                        className={styles.header__logo} 
                        src='/hardyards-light-lg.svg'
                        width='200'
                        height='30'
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

                { menuActive ? <Menu handleClose={toggleMenu}></Menu> : null }
            </div>
        </div>
    );
}