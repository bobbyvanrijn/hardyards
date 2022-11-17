import Image from 'next/image';
import Link from 'next/link';

import Content from '../components/Content';
import Marquee from '../components/Marquee';

import styles from '../styles/Home.module.css';

import { plants } from '../content/plants';

const blocks = [
    {
        _uid: '61f5c21d-93c6-4112-8040-29db5a9839a3',
        component: 'carousel',
        children: plants.map(
            plant =>
                <Link
                    href={`/plants/${plant.slug}`}
                    key={`plant-${plant.slug}`}
                >
                    <Image
                        src={`/images/${ plant.slug }.webp`}
                        width={480}
                        height={640}
                        alt={`${ plant.genus } ${ plant.species } ${ plant.cultivar }`}
                        placeholder='blur'
                        blurDataURL={`/images/${ plant.slug}-small.webp`}
                    />
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
