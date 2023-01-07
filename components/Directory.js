import Link from 'next/link';
import GridLayout from 'layouts/grid';

import styles from './Directory.module.css';

export default function Directory(props) {
    return (
        <div>
            {
                props['directory-categories'].map((category) => {
                    return (
                        <GridLayout
                            modifierClass={styles.directory__item}
                            key={`title-${category.key}`}
                        >
                            { (category.key === 'A-F' && props['directory-title'] !== undefined) &&
                                <h3 className='trim-both' grid-x='1'>
                                    { props['directory-title'] }
                                </h3>
                            }
                            <div grid-x='2' grid-x-sm='1a'>
                                <h4 className='trim-both'>
                                    {category.key}
                                </h4>
                            </div>
                            <div
                                className={styles.directory__list}
                                grid-x='3'
                                grid-x-sm='1b/3b'
                                key={`list-${category.key}`}
                            >
                                { 
                                    category.items.map((item) => {
                                        return (
                                            <div
                                                className={styles.directory__link}
                                                key={item.link}
                                            >
                                                <div className='trim-both'>
                                                    <Link href={item.link}>
                                                        { item.title }
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </GridLayout>
                    );
                })
            }
        </div>
    )
}