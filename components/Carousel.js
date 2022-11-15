import styles from './Carousel.module.css';

export default function Carousel(props) {
    const items = props.children.map((item, index) =>
        <li
            key={index}
            className={styles.carousel__item}
        >
            { item }
        </li>
    );

    return (
        <ul className={styles.carousel}>
            { items }
        </ul>
    );
}