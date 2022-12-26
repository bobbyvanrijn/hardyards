import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { OverflowMenuHorizontal, Close, Undo } from '@carbon/icons-react';

import styles from './Toolbar.module.css';
import getPageName from 'helpers/getPageName.js';
import { motion } from 'framer-motion';

export default function Toolbar() {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsOpen(false);
    }, [router.asPath]);

    const links = ['/', '/plants', '/calendar', '/collections', '/playground'];

    return (
        <div
            className={styles.toolbar}
            data-isopen={isOpen}
        >
            <motion.div
                layout='position'
                className={`${styles.toolbar__cap}
                ${styles['toolbar__cap--left']}`}
                transition={{
                    layout: { ease: 'linear', duration: 0.25 }
                }}
            />

            <motion.div
                layout='size'
                className={styles.toolbar__wrapper}
            >
                <motion.div
                    layout
                    className={styles.toolbar__background}
                    transition={{
                        layout: { ease: 'linear', duration: 0.25 }
                    }}
                />

                <motion.div
                    layout
                    className={styles.toolbar__inner}
                >
                    <motion.menu
                        layout
                        className={styles.toolbar__menu}
                    >
                        <motion.a
                            layout='position'
                            tabIndex={0}
                            className={styles.toolbar__button}
                            onClick={() => router.back()}
                            onKeyDown={(event) => event.key === 'Enter' ? () => router.back() : null}
                        >
                            <Undo size={24} />
                        </motion.a>
                        <motion.li
                            layout='position'
                            data-visible={ !isOpen && !links.includes(router.asPath) }
                        >
                            <motion.a
                                layout='position'
                                onClick={() => setIsOpen(!isOpen)}
                                onKeyDown={(event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null}
                                className="trim-both--secondary">
                                { getPageName(router.asPath) }
                            </motion.a>
                        </motion.li>
                        { links.map((link) =>
                            <motion.li
                                layout
                                key={link}
                                data-visible={ isOpen || (link === router.asPath === true) }
                                layoutId={link === router.asPath ? 'active' : null}
                            >
                                <motion.div layout='position'>
                                    <Link
                                        className="trim-both--secondary"
                                        href={link}
                                        onClick={link === router.asPath ? () => setIsOpen(!isOpen) : null}
                                        onKeyDown={link === router.asPath ?  (event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null : null}
                                    >
                                        { isOpen ? getPageName(link) : getPageName(router.asPath) }
                                    </Link>
                                </motion.div>
                            </motion.li>
                        )}

                        <motion.li
                            layout='position'
                            data-visible='true'
                        >
                            <motion.a
                                layout='position'
                                tabIndex={0}
                                className={styles.toolbar__button}
                                onClick={() => setIsOpen(!isOpen)}
                                onKeyDown={(event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null}
                            >
                                { isOpen ?
                                    <Close size={24} /> :
                                    <OverflowMenuHorizontal size={24} />
                                } 
                            </motion.a>
                        </motion.li>
                    </motion.menu>
                </motion.div>
            </motion.div>

            <motion.div
                layout='position'
                className={`${styles.toolbar__cap} ${styles['toolbar__cap--right']}`}
                transition={{
                    layout: { ease: 'linear', duration: 0.25 }
                }}
                />
        </div>
    );
}