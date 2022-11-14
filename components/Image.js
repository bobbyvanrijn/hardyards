import NextImage from 'next/image';
import styles from './Image.module.css';

export default function Image(props) {
    return (
        <NextImage
            class={styles.image}
            src={props.src}
            sizes={props.sizes}
            height={props.height}
            width={props.width}
        />
    )
}