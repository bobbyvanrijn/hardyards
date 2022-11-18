import { ArrowUpRight, AddAlt } from '@carbon/icons-react';
import styles from './List.module.css';

export default function List(props) {
    const items = props.children.map((item, index) =>
        <li
            key={index}
            className={styles.list__item}
        >
            <div className={styles.list__itemTitle}>
                { item }
            </div>

            <div className={styles.list__itemDescription}>
                { item }
            </div>
           
            <div className={styles.list__itemIcon}>
                <ArrowUpRight size='32' />
            </div>
        </li>
    );

    return (
        <div className={styles.list}>
            <h5>{ props.title }</h5>

            <ul>
                { items }
            </ul>
        </div>
    );
}