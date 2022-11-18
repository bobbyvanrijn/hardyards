import Image from 'next/image';
import Link from 'next/link';

import styles from './Carousel.module.css';
import { shuffle } from '../helpers/shuffle';

export default function Carousel(props) {
    function Items() {
        const items = shuffle(props.items);

        return props.items.map(plant =>
            <Link
                className={styles.carousel__item}
                href={`/plants/${plant.slug}`}
                key={`plant-${plant.slug}`}
            >
                <Image
                    src={`/images/${ plant.slug }.webp`}
                    width={480}
                    height={640}
                    alt={`${ plant.genus } ${ plant.species } ${ plant.cultivar }`}
                    placeholder='blur'
                    blurDataURL={`/images/${ plant.slug}-small.webp`}
                />
            </Link>
        );
    }

    return (
        <div
            role='list'
            aria-label='gallery'
            className={`${styles.carousel} bleed-both`}
        >
            <Items />
        </div>
    );
}