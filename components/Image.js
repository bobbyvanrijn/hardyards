import NextImage from 'next/image';
import { BlurhashCanvas } from "react-blurhash";
import styles from './Image.module.css';

export default function Image(props) {
    return (
        <figure
            className={`${props.className} ${styles.imageWrapper}`}
            grid-x={props['grid-x']}
            grid-y={props['grid-y']}
            grid-y-sm={props['grid-y-sm']}
        >
            { !!props.blurhash &&
                <BlurhashCanvas
                    className={styles.image__placeholder}
                    hash={props.blurhash}
                    punch={1}
                    style={{
                    }}
                />
            }

            <NextImage
                className={styles.image}
                src={props.src}
                alt=""
                sizes={props.sizes}
                fill
                placeholder='empty'
            />
        </figure>
    )
}