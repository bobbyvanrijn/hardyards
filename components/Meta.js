import styles from './Meta.module.css';

export default function Meta(props) {
    return (
        <div { ...props }>
            <div className={styles.meta}>
                <div className={styles['meta__container']}>
                {
                    props.items.map((item, index) =>
                        <div
                            className={`${styles.meta__item} ${item.title === 'main' ? styles['meta__item--featured'] : null}`}
                            key={index}
                        >
                            {item.title !== undefined &&
                                <div className='trim-both trim-both--secondary'>
                                    { item.value }
                                </div>
                            }
                        </div>
                    )
                }
                </div>
            </div>
        </div>
    )
}