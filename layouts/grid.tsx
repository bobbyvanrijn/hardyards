import styles from './grid.module.scss';

export default function GridLayout(props: any) {
    return (
        <div
            className={styles.grid}
            data-background={props.background}
            {...props}
        >
            { props.children }
        </div>
    );
}
