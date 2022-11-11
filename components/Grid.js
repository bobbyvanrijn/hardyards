import styles from './Grid.module.css';

export default function Grid(props) {
    return (
        <div
            className={styles.grid}
            data-columns={props.columns}
            data-columns-sm={props.columnsSm}
        >
            {props.children}
        </div>
    );
}