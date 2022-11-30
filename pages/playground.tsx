import HeaderSpacer from '../components/HeaderSpacer';
import Image from 'next/image';
import styles from './playground.module.css';

export default function Playground() {
    return (
        <>
            <HeaderSpacer />
            <div className={styles.playground}>
                <div className={styles.playgroundTitle}>
                    <div className='trim-both'>
                        Sowing seeds in containers
                    </div>
                </div>

                <p className={`${styles.playgroundLead} trim-both trim-both--source`}>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>

                <div>
                    <div className='trim-both'>You will need:</div>
                </div>

                <p className={`${styles.playgroundParagraph} body-text trim-both trim-both--source`}>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>

                <p className={`${styles.playgroundParagraph} body-text trim-both trim-both--source`}>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>

                <p className={`${styles.playgroundParagraph} body-text trim-both trim-both--source`}>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>
            </div>
        </>
    )
}
