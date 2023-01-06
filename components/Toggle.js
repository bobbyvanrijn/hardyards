import styles from './Toggle.module.css';

export default function Toggle(props) {
    console.log(props);
    return (
        <ul className={styles.toggle} {...props}>
            {
                props.items.map((item, index) => 
                    <li key={index}>
                        <a className={styles.toggle__item} onClick={() => item.fn()}>
                            <div className={styles.toggle__indicator}>
                                { props.active === item.key ? '●' : '○'}
                            </div>
                            <div className={'trim-both trim-both--secondary'}>
                                { item.label }
                            </div>
                        </a>
                    </li>
                )
            }
        </ul>
    );
}