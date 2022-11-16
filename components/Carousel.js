import styles from './Carousel.module.css';
import { shuffle } from '../helpers/shuffle';

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
        <div className='bleed-both'>
            <ul className={styles.carousel}>
                { shuffle(items) }
            </ul>
        </div>
    );
}