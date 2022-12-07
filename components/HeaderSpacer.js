import styles from './HeaderSpacer.module.css';

export default function HeaderSpacer() {
    return (
        <div grid-area='1/3' role='presentation' className={styles.headerSpacer} />
    );
}