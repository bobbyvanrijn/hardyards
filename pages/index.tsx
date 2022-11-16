import Content from '../components/Content';

import Grid from '../components/Grid';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';

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
                    href={`/plant/${plant.slug}`}
                    key={`plant-${plant.slug}`}
                >
                    <Image
                        src={`/images/${ plant.slug }.webp`}
                        fill
                        alt=''
                    />
                    { plant.genus } { plant.species } { plant.cultivar }
                </Link>
        )
    },
    {
        _uid: '2',
        component: 'list',
        attributes: {
            title: 'Plants'
        },
        children: plants.map(
            plant =>
                <Link
                    href={`/plant/${plant.slug}`}
                    key={`plant-${plant.slug}`}
                >
                    { plant.genus } { plant.species } { plant.cultivar }
                </Link>
        )
    }
];

export default function Home() {
    return (
        <div className='container'>
            <Content blocks={blocks} />
            <div className={'bleed-both'}>
                <Marquee />
            </div>
        </div>
    )
}
