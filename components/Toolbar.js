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
                layout='position'
                className={`${styles.toolbar__cap}
                ${styles['toolbar__cap--left']}`}
            />

            <motion.div
                layout='size'
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
                    <motion.menu
                        layout
                        className={styles.toolbar__menu}
                    >
                        <motion.li
                            layout='position'
                            data-visible={ !isOpen && !links.includes(asPath) }
                        >
                            <motion.a
                                layout='position'
                                onClick={() => setIsOpen(!isOpen)}
                                onKeyDown={(event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null}
                                className="trim-both--secondary">
                                { getPageName(asPath) }
                            </motion.a>
                        </motion.li>
                        { links.map((link) =>
                            <motion.li
                                layout
                                key={link}
                                data-visible={ isOpen || (link === asPath === true) }
                                layoutId={link === asPath ? 'active' : null}
                            >
                                <motion.div layout='position'>
                                    <Link
                                        className="trim-both--secondary"
                                        href={link}
                                        onClick={link === asPath ? () => setIsOpen(!isOpen) : null}
                                        onKeyDown={link === asPath ?  (event) => event.key === 'Enter' ? setIsOpen(!isOpen) : null : null}
                                    >
                                        { isOpen ? getPageName(link) : getPageName(asPath) }
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

            <motion.div layout='position' className={`${styles.toolbar__cap} ${styles['toolbar__cap--right']}`} />
        </div>
    );
}