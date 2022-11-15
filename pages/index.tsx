import Content from '../components/Content';

import Grid from '../components/Grid';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';
import Link from 'next/link';

import styles from '../styles/Home.module.css'

const blocks = [
    {
        _uid: '2',
        component: 'list',
        children: [
            <Link href='/plant/geranium-rozanne' key='1'>Geranium &lsquo;Rozanne&rsquo;</Link>,
            <Link href='/plant/alchemilla-mollis' key='1'>Alchemilla mollis</Link>,
        ]
    },
    {
        _uid: '3',
        component: 'carousel',
        children: [
            <Link href='/plant/geranium-rozanne' key='1'>Geranium &lsquo;Rozanne&rsquo;</Link>,
            <Link href='/plant/alchemilla-mollis' key='2'>Alchemilla mollis</Link>,
            <Link href='/plant/echinacea-purpurea' key='3'>Echinacea purpurea</Link>,
            <Link href='/plant/achillea' key='4'>Achillea</Link>,
        ]
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
