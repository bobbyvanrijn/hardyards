import styles from './Meta.module.css';

export default function Meta({ items, gridArea }) {
    return (
        <div className={styles.meta} grid-area={gridArea}>
            { 
                items.map((item, index) =>
                    <div
                        className={styles.meta__item}
                        key={index}
                        item={item}
                    >
                        {item.title !== undefined &&
                            <>
                                <div className='trim-both'>{ item.title }</div>
                                <div className='trim-both'>{ item.value }</div>
                            </>
                        }
                    </div>
                )
            }
        </div>
    )
}