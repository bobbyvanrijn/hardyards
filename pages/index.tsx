import Image from 'next/image';
import Link from 'next/link';

import GridLayout from '../layouts/grid';

import Hero from '../components/Hero';
import Content from '../components/Content';
import HeaderSpacer from '../components/HeaderSpacer';
import Marquee from '../components/Marquee';

import styles from '../styles/Home.module.css';

import { plants } from '../content/plants';

const blocks = [
    {
        _uid: '61f5c21d-93c6-4112-8040-29db5a9839a3',
        component: 'carousel',
        attributes: {
            'grid-x': '1/3',
            'grid-y': '2b',
            items: plants
        }
    },
    {
        _uid: '0220f0fd-9d8e-45aa-899b-b96d11d27513',
        component: 'text',
        attributes: {
            'grid-x': '2/3'
        },
        children: [
            <p key='paragraph-1'>
                Hard Yards was created to help gardeners of all levels design, start and maintain a beautiful, sustainable garden. We provide a selection of curated perennial plants, and helpful information throughout the year to help guide you on your gardening journey. Whether you want to spruce up a balcony or patio, or transform your outdoor space into a wildflower meadow, Hard Yards is here to help. 
            </p>,
            <p key='paragraph-2'>
                Our mission is to make gardening more accessible for everyone, and to encourage rewilding of outdoor spaces. We believe that gardens should not just be a place of beauty, but should also provide an essential habitat for our local wildlife. By helping you to create a natural ecosystem, Hard Yards will help you to create a garden that is beautiful, sustainable, and provides a home for our beloved wildlife.
            </p>
        ]
    }
];

export default function Home() {
    return (
        <GridLayout>
            <div
                grid-x='1/3'
                grid-y='1b'
            >
                <h1
                    className='display-second'
                >
                    Perennial
                </h1>

                <h2
                    className='display-prime'
                >
                    Geranium Rozanne
                </h2>
            </div>

            <Content blocks={blocks} />

            {/* <div className={'bleed-both'}>
                <Marquee />
            </div> */}
        </GridLayout>
    )
}
