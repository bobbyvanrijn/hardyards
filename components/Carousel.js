'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlurhashCanvas  } from 'react-blurhash';

import styles from './Carousel.module.css';

export default function Carousel(props) {
    const items = props.items;

    function Items() {
        return items.map(item =>
            item.link !== undefined ?
            <Link
                className={styles.carousel__item}
                href={item.link}
                key={`item-${item.key}`}
            >
                { item.title !== undefined &&
                    <div className={styles.carousel__text}>
                        <h4 className='trim-both'>
                            { item.title }
                        </h4>
                    </div>
                }

                <figure>
                    { !!item.blurhash &&
                        <BlurhashCanvas
                            className={styles.carousel__placeholder}
                            hash={item.blurhash}
                            punch={1}
                        />
                    }
                    <Image
                        src={`/images/${ item.key }.webp`}
                        fill
                        alt=''
                        sizes='40w'
                    />
                </figure>
            </Link>
            :
            <div
                className={styles.carousel__item}
                key={`item-${item.key}`}
            >
                { item.title !== undefined &&
                    <div className={styles.carousel__text}>
                        <h4 className='trim-both'>
                            { item.title }
                        </h4>
                    </div>
                }

                <figure>
                    { !!item.blurhash &&
                        <BlurhashCanvas
                            className={styles.carousel__placeholder}
                            hash={item.blurhash}
                            punch={1}
                        />
                    }
                    <Image
                        src={`/images/${ item.key }.webp`}
                        fill
                        alt=''
                        sizes='40w'
                    />
                </figure>
            </div>
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