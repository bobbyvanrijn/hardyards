'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlurhashCanvas  } from 'react-blurhash';
import { formatPlantName } from 'helpers/formatPlantName';

import styles from './Carousel.module.css';

export default function Carousel(props) {
    const items = props.items;

    function Items() {
        return items.map(plant =>
            <Link
                className={styles.carousel__item}
                href={`/plants/${plant.slug}`}
                key={`plant-${plant.slug}`}
            >
                <div className={styles.carousel__text}>
                    <h4>
                        { formatPlantName(plant) }
                    </h4>
                </div>
                <figure>
                    { !!plant.blurhash &&
                        <BlurhashCanvas
                            className={styles.carousel__placeholder}
                            hash={plant.blurhash}
                            punch={1}
                            style={{
                            }}
                        />
                    }
                    <Image
                        src={`/images/${ plant.slug }.webp`}
                        fill
                        alt=''
                        sizes='40w'
                    />
                </figure>
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