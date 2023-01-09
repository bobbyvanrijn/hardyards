import styles from './Calendar.module.css';

export default function Calendar(props) {
    return (
        <div
            { ...props }
            className={styles.calendar}
        >
            { props.children.map((item) =>
                <>{item}</>
            )}
        </div>
    );
}