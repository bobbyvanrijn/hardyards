import styles from './grid.module.css';

export default function GridLayout(props: any) {
    return (
        <div className={styles.grid}>
            { props.children }
        </div>
    );
}
