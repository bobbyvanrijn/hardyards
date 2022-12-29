import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ShadowPan from './ShadowPan';

import styles from './Toolbar.module.css';
import getPageName from 'helpers/getPageName.js';

export default function Toolbar() {
    const [isOpen, setIsOpen] = useState(true);
    
    const router = useRouter();
    
    function getActiveMenuItem() {
        if (links.indexOf(router.asPath) > -1) {
            return links.indexOf(router.asPath);
        }

        // If path starts with any predefined menu item,
        // except the first which is '/',
        // return index
        for (let i = 1; i < links.length; i++) {
            let regex = new RegExp('^' + links[i]);
            
            if (regex.test(router.asPath)) {
                console.log(i);
                return i;
            }
        }

        return -1;
    }

    // useEffect(() => {
    //     setIsOpen(false);
    // }, [router.asPath]);

    const links = ['/', '/plants', '/calendar'];

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbar__wrapper}>
                <div className={styles.toolbar__inner}>
                    <menu className={styles.toolbar__menu}>
                        <ShadowPan activeChild={getActiveMenuItem()}>
                        { links.map((link) =>
                            <li
                                key={link}
                                shadowId={link}
                                data-visible={ isOpen || (link === router.asPath === true) }
                                layoutId={link === router.asPath ? 'active' : null}
                            >
                                <Link
                                    className={`${styles.toolbar__link}  trim-both--secondary`}
                                    href={link}
                                >
                                    { isOpen ? getPageName(link) : getPageName(router.asPath) }
                                </Link>
                            </li>
                        )}
                        </ShadowPan>
                    </menu>
                </div>
            </div>
        </div>
    );
}