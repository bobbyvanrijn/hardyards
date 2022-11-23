import Link from 'next/link';

import { ArrowUpRight, AddAlt } from '@carbon/icons-react';
import styles from './List.module.css';

export default function List({ title, items, children}) {
    const listItems = items;

    function ListItem({ item, children }) {
        return (
            <li className={styles.list__item}>
                {item.link &&
                    <Link href={item.link}>
                        {children}

                        <div className={styles.list__itemIcon}>
                            <ArrowUpRight size='32' />
                        </div>
                    </Link>
                }

                {!item.link && children}
            </li>
        )
    }

    return (
        <div className={styles.list}>
            { items.length ? <h5>{ title }</h5> : null }

            <ul>
                { 
                    items.map((item, index) =>
                        <ListItem
                            key={index}
                            item={item}
                        >
                            {item.label !== undefined &&
                                <div className={styles.list__itemTitle}>
                                    { item.label }
                                </div>
                            }

                            {item.title !== undefined &&
                                <div className={styles.list__itemTitle}>
                                    { item.title }
                                </div>
                            }
                        </ListItem>
                    )
                }
            </ul>
        </div>
    );
}