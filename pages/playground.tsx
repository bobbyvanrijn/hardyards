import { useRouter } from 'next/router';

import HeaderSpacer from '../components/HeaderSpacer';
import Image from 'next/image';
import styles from './playground.module.css';

export default function Playground() {
    const router = useRouter();

    async function share() {
        const sharable = {
            title: 'Playground',
            text: 'Description',
            url: router.route
        };
        try {
            await navigator.share( sharable );
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <HeaderSpacer />
            <div className={styles.playground}>
                <div className={styles.playgroundTitle}>
                    <div className='trim-both'>
                        Geranium ‘Rozanne’
                    </div>
                </div>

                <p className={`${styles.playgroundLead} trim-both trim-both--source`}>
                    Hybrid of Geranium himalayense and Geranium wallichianum ‘Buxton&apos;s variety’
                </p>
                <div>
                    <div onClick={share} className='pill'>
                        <div className='trim-both'>Share page</div>
                    </div>
                </div>

                {/* FIELD */}
                <div className={`${styles.playgroundParagraph}`}>
                    Step 1
                </div>

                <p className={`${styles.playgroundParagraph} body-text trim-both trim-both--source`}>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>
                {/* / FIELD */}

                <Image
                    src={'/images/geranium-rozanne.webp'}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt="Featured image"
                    height={800}
                    width={1416}
                />

                <p className={`${styles.playgroundParagraph} body-text trim-both trim-both--source`}>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>

                <Image
                    src={'/images/geranium-rozanne.webp'}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt="Featured image"
                    height={800}
                    width={1416}
                />

                <p className={`${styles.playgroundParagraph} body-text trim-both trim-both--source`}>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage. Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>
                <div>
                    Drift, group, border, flower meadow.
                </div>
                <div>
                    Drift, group, border, flower meadow.
                </div>
                <div>
                    Drift, group, border, flower meadow.
                </div>
                <div>
                    Drift, group, border, flower meadow.
                </div>
                <div>
                    Drift, group, border, flower meadow.
                </div>
            </div>
        </>
    )
}
