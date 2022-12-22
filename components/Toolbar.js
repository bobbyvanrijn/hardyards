import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { OverflowMenuHorizontal, Close } from '@carbon/icons-react';

import styles from './Toolbar.module.css';
import getPageName from 'helpers/getPageName.js';
import { motion } from 'framer-motion';

export default function Toolbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { asPath } = useRouter();

    useEffect(() => {
        setIsOpen(false);
    }, [asPath]);

    const links = ['/', '/plants', '/calendar', '/collections', '/playground'];

    return (
        <div
            className={styles.toolbar}
            data-isopen={isOpen}
        >
            <motion.div
                layout
                className={`${styles.toolbar__cap}
                ${styles['toolbar__cap--left']}`}
            />

            <motion.div
                layout
                className={styles.toolbar__wrapper}
            >
                <motion.div
                    layout
                    className={styles.toolbar__background}
                />

                <motion.div
                    layout
                    className={styles.toolbar__inner}
                >
                    { !isOpen && 
                        <motion.a
                            layout
                            tabIndex={0}
                            className={styles.toolbar__button}
                            onClick={() => setIsOpen(!isOpen)}
                            onKeyDown={(event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null}
                        >
                            <div className='sr-only'>Open navigation</div>

                            <motion.div
                                layout
                                className="trim-both--secondary"
                            >
                                { getPageName(asPath) }
                            </motion.div>

                            <OverflowMenuHorizontal size={24} />
                        </motion.a>
                    }

                    { isOpen && 
                    <motion.menu
                        layout
                        className={styles.toolbar__menu}
                    >
                        { links.map((link) =>
                            <motion.li
                                layout
                                key={link}
                            >
                                <Link
                                    className="trim-both--secondary"
                                    href={link}
                                >
                                    { getPageName(link) }
                                </Link>
                            </motion.li>
                        )}

                        <motion.a
                            layout
                            tabIndex={0}
                            className={styles.toolbar__button}
                            onClick={() => setIsOpen(!isOpen)}
                            onKeyDown={(event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null}
                        >
                            <Close size={24} /> 
                        </motion.a>
                    </motion.menu>
                    }
                </motion.div>
            </motion.div>
            <motion.div layout className={`${styles.toolbar__cap} ${styles['toolbar__cap--right']}`} />
        </div>
    );
}