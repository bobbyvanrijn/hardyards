import NextImage from 'next/image';
import styles from './Image.module.css';

export default function Image(props) {
    return (
        <NextImage
            grid-area={props.gridArea}
            grid-span={props.gridSpan}
            className={styles.image}
            placeholder='blur'
            blurDataURL={`/images/${ props.src }-small.webp`}
            src={props.src}
            sizes={props.sizes}
            height={props.height}
            width={props.width}
        />
    )
}