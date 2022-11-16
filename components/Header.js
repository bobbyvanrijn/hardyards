import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div />
                <Link href='/'>
                    <Image
                        className={styles.header__logo} 
                        src='/hardyards-light-lg.svg'
                        width='200'
                        height='30'
                        alt='Hardyards'
                    />
                </Link>
                <div />
            </div>
        </>
    );
}