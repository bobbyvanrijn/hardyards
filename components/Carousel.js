'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Carousel.module.css';

import { formatPlantName } from 'helpers/formatPlantName';
import { shuffle } from 'helpers/shuffle';

export default function Carousel(props) {
    const items = shuffle(props.items);
    function Items() {

        return items.map(plant =>
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
            </Link>
        );
    }

    return (
        <div
            role='list'
            aria-label='gallery'
            { ...props }
            className={`${styles.carousel} bleed-inline`}
        >
            <Items />
        </div>
    );
}