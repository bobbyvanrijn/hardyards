'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlurhashCanvas  } from 'react-blurhash';

import styles from './Gallery.module.css';

export default function Gallery(props) {
    const items = props.items;

    function Items() {
        return items.map(plant =>
            <Link
                className={styles.gallery__item}
                href={`/plants/${plant.slug}`}
                key={`plant-${plant.slug}`}
            >
                <figure>
                    { !!plant.blurhash &&
                        <BlurhashCanvas
                            className={styles.gallery__placeholder}
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
            className={`${styles.gallery}`}
        >
            <Items />
        </div>
    );
}