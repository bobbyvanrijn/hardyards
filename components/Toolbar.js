import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ShadowPan from './ShadowPan';

import styles from './Toolbar.module.css';
import getPageName from 'helpers/getPageName.js';
import { motion } from 'framer-motion';

export default function Toolbar() {
    const [isOpen, setIsOpen] = useState(true);

    const router = useRouter();

    // useEffect(() => {
    //     setIsOpen(false);
    // }, [router.asPath]);

    const links = ['/', '/plants', '/calendar', '/collections', '/playground'];

    return (
        <div
            className={styles.toolbar}
            data-isopen={isOpen}
        >
            <motion.div
                layout='size'
                className={styles.toolbar__wrapper}
            >
                <motion.div
                    layout
                    className={styles.toolbar__inner}
                >
                    <motion.menu
                        layout
                        className={styles.toolbar__menu}
                    >
                        {/* <motion.a
                            layout='position'
                            tabIndex={0}
                            className={styles.toolbar__button}
                            onClick={() => router.back()}
                            onKeyDown={(event) => event.key === 'Enter' ? () => router.back() : null}
                        >
                            <Undo size={24} />
                        </motion.a> */}

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
                        <ShadowPan>
                        { links.map((link) =>
                            <motion.li
                                layout
                                key={link}
                                data-visible={ isOpen || (link === router.asPath === true) }
                                layoutId={link === router.asPath ? 'active' : null}
                            >
                                <motion.div layout='position'>
                                    <Link
                                        className={`${styles.toolbar__link}  trim-both--secondary`}
                                        href={link}
                                    >
                                        { isOpen ? getPageName(link) : getPageName(router.asPath) }
                                    </Link>
                                </motion.div>
                            </motion.li>
                        )}
                        </ShadowPan>
{/* 
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
                        </motion.li> */}
                    </motion.menu>
                </motion.div>
            </motion.div>
        </div>
    );
}