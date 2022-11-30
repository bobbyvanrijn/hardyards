import styles from './Lead.module.css';

export default function Lead(props) {
    return (
        <p className={styles.lead}>
            <div
                className='trim-both'
            >
            {
                props.children.map(
                    (item, index) =>
                        <span
                            key={index}
                            className={index === 0 ? styles.lead__strong : null}
                        >
                            {item}
                        </span>
                ) 
            }
            </div>
        </p>
    );
}