import styles from './grid.module.scss';

export default function GridLayout(props: any) {
    return (
        <div className={`${styles.grid} ${props.modifierClass}`}>
            { props.children }
        </div>
    );
}
