import Content from '../components/Content';

import Grid from '../components/Grid';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';
import Navigation from '../components/Navigation';

import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import { plants } from '../content/plants';

const blocks = [
    {
        _uid: '3',
        component: 'carousel',
        children: plants.map(
            plant =>
                <Link
                    href={`/plants/${plant.slug}`}
                    key={`plant-${plant.slug}`}
                >
                    <Image
                        src={`/images/${ plant.slug }.webp`}
                        fill
                        alt=''
                        placeholder='blur'
                        blurDataURL={`/images/${ plant.slug}-small.webp`}
                    />
                    { plant.genus } { plant.species } { plant.cultivar }
                </Link>
        )
    }
];

export default function Home() {
    return (
        <div className='container'>
            <Content blocks={blocks} />

            <Navigation />

            <div className={'bleed-both'}>
                <Marquee />
            </div>
        </div>
    )
}
