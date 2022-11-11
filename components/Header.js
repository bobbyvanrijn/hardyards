import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.header} >
                <Image
                    src='/hardyards.svg'
                    width='300'
                    height='40'
                    alt='Hardyards logo'
                />
            </div>
        </>
    );
}