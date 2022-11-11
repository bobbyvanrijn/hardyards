import styles from './Carousel.module.css';

export default function Carousel(props) {
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel__item}>
            </div>
            <div className={styles.carousel__item}>
            </div>
            <div className={styles.carousel__item}>
            </div>
            <div className={styles.carousel__indicator} />
        </div>
    );
}