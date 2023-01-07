import GridLayout from '../layouts/grid';
import Content from '../components/Content';
import Link from 'next/link';

import { getPlants } from '../content/plants';
import { formatPlantName } from 'helpers/formatPlantName';

export function getStaticProps() {
    return {
        props: {
            carouselItems: getPlants(8).map(plant => {
                return {
                    key: plant.slug,
                    title: formatPlantName(plant),
                    link: `/plants/${plant.slug}`,
                    blurhash: plant.blurhash
                }
            })
        }
    }
}

export default function Home(props: any) {
    const blocks = [
        {
            _uid: '1',
            component: 'carousel',
            attributes: {
                'grid-x': '1/3',
                'grid-y': '2/3',
                'grid-y-sm': '2/4',
                items: props.carouselItems
            }
        },
        {
            _uid: '2',
            component: 'text',
            attributes: {
                'grid-x': '2/3',
                'grid-y': '4',
                'grid-y-sm': '4'
            },
            children: [
                // <p key='paragraph-1'>
                //     Hard Yards was created to help gardeners of all levels design, start and maintain a beautiful, sustainable garden. We provide a selection of curated perennial plants, and helpful information throughout the year to help guide you on your gardening journey. Whether you want to spruce up a balcony or patio, or transform your outdoor space into a wildflower meadow, Hard Yards is here to help. 
                // </p>,
                // <p key='paragraph-2'>
                //     Our mission is to make gardening more accessible for everyone, and to encourage rewilding of outdoor spaces. We believe that gardens should not just be a place of beauty, but should also provide an essential habitat for our local wildlife. By helping you to create a natural ecosystem, Hard Yards will help you to create a garden that is beautiful, sustainable, and provides a home for our beloved wildlife.
                // </p>
            ]
        }
    ];

    return (
        <>
            <GridLayout grid-enforce-rows='true'>
                <div
                    className='page-title'
                    grid-x='1/3'
                    grid-y='1a'
                    grid-y-sm='1a'
                >
                    <h1 className='uppercase trim-both trim-both--secondary'>
                        Index
                    </h1>

                    <h2 className='trim-both trim-both--secondary'>
                        Hard Yards
                    </h2>
                </div>

                <Content blocks={blocks} />
            </GridLayout>

            <GridLayout grid-enforce-rows='true'>
                <div>
                    <Link className='button' href='/plants'>
                        <div className='trim-both trim-both--secondary'>
                            Go to plant directory
                        </div>
                        <div className='button__icon'>
                            +
                        </div>
                    </Link>
                </div>
            </GridLayout>
        </>
    )
}
