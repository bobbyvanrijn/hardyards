import { useState } from 'react';
import Link from 'next/link';
import { OverflowMenuHorizontal, Close } from '@carbon/icons-react';

import styles from './Toolbar.module.css';
import { motion } from 'framer-motion';

export default function Toolbar() {
    const [isOpen, setIsOpen] = useState(false);

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
            <motion.div layout className={styles.toolbar__wrapper}>
                <motion.div
                    className={styles.toolbar__inner}
                    layout
                >
                    {
                        !isOpen && <motion.div layout className="trim-both">
                        <Link href='/'>
                            Index
                        </Link>
                        </motion.div>
                    }

                    <motion.a
                        layout tabindex={0}
                        className={styles.toolbar__button}
                        onClick={() => setIsOpen(!isOpen)}
                        onKeyDown={(event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null}
                    >
                        <div className='sr-only'>Open navigation</div>
                        { !isOpen && <OverflowMenuHorizontal size={22} /> }
                        { isOpen && <Close size={22} /> }
                    </motion.a>
                    { isOpen && 
                    <motion.menu
                        className={styles.toolbar__menu}
                        layout
                    >
                        <motion.li
                            layout
                        >
                            <Link
                                href='/plants'
                            >
                                Plants
                            </Link>
                        </motion.li>
                        <motion.li layout>
                            <Link
                                href='/calendar'
                            >
                                Calendar
                            </Link>
                        </motion.li>
                        <motion.li layout>
                            <Link
                                href='/playground'
                            >
                                Playground
                            </Link>
                        </motion.li>

                        <motion.li layout>
                            <Link
                                href='/collections'
                            >
                                Collections
                            </Link>
                        </motion.li>
                    </motion.menu>
                    }
                </motion.div>
            </motion.div>
        </motion.div>
    );
}