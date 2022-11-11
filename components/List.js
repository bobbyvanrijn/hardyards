import { ArrowUpRight, AddAlt } from '@carbon/icons-react';
import styles from './List.module.css';

export default function List(props) {
    const listItems = props.items.map((item, index) =>
        <li
            key={index}
            className={styles.list__item}
        >
            <div className={styles.list__itemTitle}>
                {item.title}
            </div>
            {/* <div>
                Test
            </div> */}
            <div className={styles.list__itemIcon}>
                <ArrowUpRight size='32' />
                {/* <AddAlt size='32' /> */}
            </div>
        </li>
    );

    return (
        <ul className={styles.list}>
            {listItems}
        </ul>
    );
}