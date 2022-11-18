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
        attributes: {
            items: plants
        }
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
