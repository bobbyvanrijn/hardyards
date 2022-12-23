import NextImage from 'next/image';
import styles from './Image.module.css';

export default function Image(props) {
    return (
        <figure
            className={`${props.className} ${styles.imageWrapper}`}
            grid-x={props['grid-x']}
            grid-y={props['grid-y']}
            grid-y-sm={props['grid-y-sm']}
        >
            <NextImage
                className={styles.image}
                src={props.src}
                sizes={props.sizes}
                fill
                placeholder={props.srcSmall ? 'blur' : 'empty'}
                blurDataURL={`${props.srcSmall}`}
            />
        </figure>
    )
}