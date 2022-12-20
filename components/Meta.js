import styles from './Meta.module.css';

export default function Meta(props) {
    return (
        <div
            { ...props }
        >
            <div className={styles.meta}>
            { 
                props.items.map((item, index) =>
                    <div
                        className={styles.meta__item}
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
    )
}