import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { OverflowMenuHorizontal, Close } from '@carbon/icons-react';

import styles from './Toolbar.module.css';
import { motion } from 'framer-motion';

export default function Toolbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { asPath } = useRouter();

    useEffect(() => {
        setIsOpen(false);
    }, [asPath]);

    const spring = {
        type: "spring",
        stiffness: 900,
        damping: 60
    };

    return (
        <motion.div
            className={styles.toolbar}
            transition={spring}
            data-isOpen={isOpen}
            layout
        >
            <motion.div layout className={`${styles.toolbar__cap} ${styles['toolbar__cap--left']}`} />
            <motion.div layout className={styles.toolbar__wrapper}>
                <motion.div
                    className={styles.toolbar__inner}
                    layout
                >
                    { !isOpen && 
                        <motion.a
                            layout
                            tabindex={0}
                            className={styles.toolbar__button}
                            onClick={() => setIsOpen(!isOpen)}
                            onKeyDown={(event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null}
                        >
                            <div className='sr-only'>Open navigation</div>

                            <motion.div
                                layout
                                className="trim-both--secondary"
                                href={asPath}
                            >
                                { asPath }
                            </motion.div>

                            <OverflowMenuHorizontal size={24} />
                        </motion.a>
                    }

                    { isOpen && 
                    <motion.menu
                        layout
                        className={styles.toolbar__menu}
                    >
                        <motion.a
                            layout
                            tabindex={0}
                            className={styles.toolbar__button}
                            onClick={() => setIsOpen(!isOpen)}
                            onKeyDown={(event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null}
                        >
                            <Close size={24} /> 
                        </motion.a>

                        <motion.li layout >
                            <Link
                                className="trim-both--secondary"
                                href='/'
                            >
                                Index
                            </Link>
                        </motion.li>
                        <motion.li layout >
                            <Link
                                className="trim-both--secondary"
                                href='/plants'
                            >
                                Plants
                            </Link>
                        </motion.li>
                        <motion.li layout>
                            <Link
                                className="trim-both--secondary"
                                href='/calendar'
                            >
                                Calendar
                            </Link>
                        </motion.li>
                        <motion.li layout>
                            <Link
                                className="trim-both--secondary"
                                href='/collections'
                            >
                                Collections
                            </Link>
                        </motion.li>
                    </motion.menu>
                    }
                </motion.div>
            </motion.div>
            <motion.div layout className={`${styles.toolbar__cap} ${styles['toolbar__cap--right']}`} />
        </motion.div>
    );
}