import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header__button} />
                <Image
                    className={styles.header__logo} 
                    src='/hardyards.svg'
                    width='300'
                    height='40'
                    alt='Hardyards logo'
                />
                <div />
            </div>
        </>
    );
}