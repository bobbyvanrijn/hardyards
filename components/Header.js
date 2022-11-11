import Image from 'next/image';
import { RadioButton, CircleSolid } from '@carbon/icons-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div>
                    <RadioButton size='40' />
                    {/* <CircleSolid size='40' /> */}
                </div>
                <Image
                    className={styles.header__logo} 
                    src='/hardyards.svg'
                    width='300'
                    height='40'
                    alt='Hardyards logo'
                />
                <div>
                    {/* <RadioButton size='40' /> */}
                    {/* <CircleSolid size='40' /> */}
                </div>
            </div>
        </>
    );
}