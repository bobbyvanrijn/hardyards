import { useState } from 'react';
import Link from 'next/link';

import { ArrowUpRight, AddAlt } from '@carbon/icons-react';
import styles from './List.module.css';

export default function List(props) {
    function ListItem({ item, children }) {
        const [itemActive, setActive] = useState(false);

        const toggleItem = () => {
            setActive(!itemActive);
        };

        return (
            <li className={styles.list__item}>
                {/* If item is link: */}
                { item.link &&
                    <Link
                        className={styles.list__itemWrapper}
                        href={item.link}
                        prefetch={true}
                    >
                        <div className={`${styles.list__itemTitle} trim-both`}>
                            {item.title}
                        </div>

                        <div className={`${styles.list__linkText} trim-both`}>
                            details
                        </div>
                    </Link>
                }

                { !item.link &&
                    <div className={styles.list__itemWrapper}>
                        <div className={`${styles.list__itemTitle} trim-both`}>
                            {item.title}
                        </div>
                    </div>
                }
            </li>
        )
    }

    return (
        <ul className={styles.list} {...props}>
            { props.items.map((item, index) =>
                <ListItem
                    key={index}
                    item={item}
                />
            ) }
        </ul>
    );
}