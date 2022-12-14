import styles from './Marquee.module.css';

export default function Marquee() {
    return (
        <div className={styles.marquee}>
            <div className={styles.marquee__text}>
                <div className='trim-both'>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </div>
            </div>
            <div className={styles.marquee__text} >
                <div className='trim-both'>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </div>
            </div>
            <div className={styles.marquee__text} >
                <div className='trim-both'>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </div>
            </div>
        </div>
    );
}