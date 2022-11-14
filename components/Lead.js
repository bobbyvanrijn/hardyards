import styles from './Lead.module.css';

export default function Lead(props) {
    return (
        <p className={styles.lead}>
            {
                props.children.map(
                    (item, index) =>
                        <span
                            className={index === 0 ? styles.lead__strong : null}
                            key={index}
                        >
                            {item}
                        </span>
                ) 
            }
        </p>
    );
}