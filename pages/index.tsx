import Content from '../components/Content';

import Grid from '../components/Grid';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import { plants } from '../content/plants';

const blocks = [
    {
        _uid: '2',
        component: 'list',
        children: plants.map(
            plant => <Link href={`/plant/${plant.slug}`} key={`plant-${plant.slug}`}>{plant.title}</Link>
        )
    },
    {
        _uid: '3',
        component: 'carousel',
        children: plants.map(
            plant => <Link href={`/plant/${plant.slug}`} key={`plant-${plant.slug}`}>{plant.title}</Link>
        )
    }
];

export default function Home() {
    return (
        <div className='container'>
            <Content blocks={blocks} />

            <p>
                Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
            </p>

            <Grid columns={2}>
                <div>Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.</div>

                <div>Test 2</div>
            </Grid>

            <div className={'bleed-both'}>
                <Marquee />
            </div>
            
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
