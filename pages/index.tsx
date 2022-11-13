import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import List from '../components/List';
import Marquee from '../components/Marquee';

import styles from '../styles/Home.module.css'

const plants = [
    { title: 'Achillea Moonshine', description: 'Lorem ipsum'},
    { title: 'Agastache' }
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hardyards</title>
                <meta name="description" content="Gardening tool." />
                <meta property="og:image" content="/api/og?title=Hardyards" />

                <link rel="icon" href="/api/icon" />
                <link rel="apple-touch-icon" href="api/icon" />
            </Head>

            <Header />

            <Image
                className={styles.image}
                src='/images/geranium.webp'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                height={250}
                width={500}
                alt='Geranium rozanne'
            />

            {/* <h1 className={styles.title}>
                Considered outdoor spaces.
            </h1> */}

            <p className={styles.lead}>
                <span>Geranium &lsquo;Rozanne&rsquo;.</span> Hybrid of Geranium himalayense and Geranium wallichianum &lsquo;Buxton&apos;s variety&rsquo;.
            </p>

            <p>
                Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
            </p>

            <List items={plants} />

            <Grid columns={2}>
                <div>Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.</div>

                <div>Test 2</div>
            </Grid>

            <div className={'bleed-both'}>
                <Marquee />
            </div>

            <Carousel />
            
            <Grid columns={4} columnsSm={2}>
                <Card>
                    <h2>
                        90cm
                    </h2>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </Card>
                <Card>
                    <h2>
                        90cm
                    </h2>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </Card>
                <Card>
                    <h2>
                        90cm
                    </h2>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </Card>
                <Card>
                    <h2>
                        90cm
                    </h2>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </Card>
            </Grid>
        </div>
    )
}
