import Navigation from './Navigation';
import styles from './Menu.module.css';

export default function Menu(props) {
    return (
        <div className={styles.menu}>
            <div className='container'>
                <Navigation />
            </div>
        </div>
    )
}