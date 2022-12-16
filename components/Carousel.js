import Image from 'next/image';
import Link from 'next/link';

import styles from './Carousel.module.css';

import { shuffle } from '../helpers/shuffle';
import { formatPlantName } from '../helpers/formatPlantName';

export default function Carousel(props) {
    const items = props.items;
    function Items() {

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
                    alt={ formatPlantName(plant) }
                    placeholder='blur'
                    blurDataURL={`/images/${ plant.slug}-small.webp`}
                />
                <div className={`${styles.carousel__title} trim-both`}>
                    { formatPlantName(plant) }
                </div>
            </Link>
        );
    }

    return (
        <div
            role='list'
            aria-label='gallery'
            { ...props }
            className={`${styles.carousel} bleed-both`}
        >
            <Items />
        </div>
    );
}