import styles from './Hero.module.css';

export default function Hero({ children }) {
    return (
        <div className={styles.hero}>
            {children}
        </div>
    );
}