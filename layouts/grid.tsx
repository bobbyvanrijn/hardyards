import styles from './grid.module.css';

export default function GridLayout(props: any) {
    return (
        <div className={`${styles.grid} ${props.className}`} data-background={props.background}>
            { props.children }
        </div>
    );
}