import { useState } from 'react';
import Link from 'next/link';

import { ArrowUpRight, AddAlt } from '@carbon/icons-react';
import styles from './List.module.css';

export default function List({ title, gridArea, items, children}) {
    const listItems = items;

    function ListItem({ item, children }) {
        const [itemActive, setActive] = useState(false);

        const toggleItem = () => {
            setActive(!itemActive);
        };

        return (
            <li className={styles.list__item}>
                {/* If item is link: */}
                { item.link &&
                    <>
                        <Link href={item.link}>
                            {children}
                        </Link>

                        <div className={styles.list__itemIcon}>
                            <ArrowUpRight size='32' />
                        </div>
                    </>
                }

                {/* If item is accordion item */}
                { item.description &&
                    <>
                        <div onClick={toggleItem}>
                            {children}
                        </div>


                        <div className={styles.list__itemIcon}>
                            <AddAlt size='32' />
                        </div>

                        {itemActive &&
                            <div className={styles.list__itemDescription}>
                                {item.description}
                            </div>
                        }
                    </>
                }

                {!item.link && !item.description && children}
            </li>
        )
    }

    return (
        <ul className={styles.list} grid-area={gridArea}>
            { 
                items.map((item, index) =>
                    <ListItem
                        key={index}
                        item={item}
                    >
                        {item.title !== undefined &&
                            <div className={`${styles.list__itemTitle} trim-both`}>
                                { item.title }
                            </div>
                        }
                    </ListItem>
                )
            }
        </ul>
    );
}