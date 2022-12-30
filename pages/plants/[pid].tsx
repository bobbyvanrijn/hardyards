import React from 'react';
import Head from 'next/head';

import GridLayout from 'layouts/grid';
import Content from 'components/Content';

import { formatPlantName } from 'helpers/formatPlantName';
import { getPlants } from 'content/plants';

export async function getStaticPaths() {
    const plants = getPlants();

    return {
        paths: plants.map((plant => { 
            return {
                params: { pid: plant.slug }
            }
        })),
        fallback: false, // can also be true or 'blocking'
    }
}

function getPlantFromApi(slug: any) {
    return getPlants()
        .find((plant: any) => plant.slug === slug) || null;
}

export function getStaticProps(context: any) {
    const { params } = context;

    const plant = getPlantFromApi(params.pid);

    return {
        props: {
            pid: params.pid,
            plant,
            title: formatPlantName(plant)
        }
    }
}

export default function Page(props: any) {
    const meta = [
        {
            _uid: '97ebdf5b-761e-4fa9-8774-763e7ca7e76e',
            component: 'meta',
            attributes: {
                items: props.plant.meta.map(
                    (meta: { label: any; value: any; }) => {
                        return {
                            title: meta.label,
                            value: meta.value,
                        };
                    }
                ),
            }
        }
    ];

    const hero = [
        {
            _uid: '92d40a2e-5f03-4396-a44f-daf7d3aca6f4',
            component: 'image',
            attributes: {
                'grid-x': '2b/3b',
                'grid-x-sm': '1/3',
                'grid-y': '1/3',
                'grid-y-sm': '1a/3a',
                className: 'bleed-top-lg bleed-bottom-lg bleed-right-lg bleed-inline-sm bleed-block-sm',
                src: `/images/${ props.pid }.webp`,
                srcSmall: `/images/${ props.pid }-small.webp`,
                size: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
                width: 800,
                height: 800,
                blurhash: props.plant?.blurhash,
                attribution: props.plant['image-credit']
            }
        },
        {
            _uid: '4397c42f-f205-49cb-a875-1cac86f512cb',
            component: 'text',
            attributes: {
                'grid-x': '1a/2a',
                'grid-y': '1',
                'grid-y-sm': '3b/4b'
            },
            children: [
                <h1 className='trim-both' key={`${props.plant.slug}--title`}>
                    <span className='uppercase'>
                        {formatPlantName(props.plant)}.&nbsp;
                    </span>
                    <span>{props.plant.common}.</span>
                </h1>,
                <p key={`${props.plant.slug}--description`} className='lead trim-both'>{props.plant.description}</p>
            ]
        },
        {
            _uid: '0220f0fd-9d8e-45aa-899b-b96d11d275a14',
            component: 'list',
            attributes: {
                'grid-x': '1a/2a',
                'grid-y': '2a/3b',
                'grid-align': 'bottom'
            },
            children: [
                <Content key={1} blocks={meta} />
            ]
        },
        {
            _uid: '0220f0fd-9d8e-45aa-899b-b96d11d27514',
            component: 'list',
            attributes: {
                'grid-x': '1',
                items: props.plant.collections?.map(
                    (collection: any) => {
                        return {
                            title: collection.title,
                            link: `/collections/${collection.slug}`
                        }
                    }
                )
            }
        },
        // {
        //     _uid: '0220f0fd-9d8e-45aa-899b-b96d11d27513',
        //     component: 'text',
        //     attributes: {
        //         'grid-x': '1/2',
        //         className: 'body-text'
        //     },
        //     children: props.plant.body?.map(
        //         (item: any, index: any) => <p className='trim-both' key={index}>{item}</p>
        //     )
        // }

    ]

    return (
        <>
            <Head>
                <title>{`${props.title} | Hard Yards`}</title>
                <meta name="description" content={props.plant.description} />
            </Head>

            <GridLayout>
                <Content blocks={hero} />
            </GridLayout>
            <section>
                <GridLayout>
                    <div grid-x='1/3'>
                        <table summary="Plant progress through the year">
                            <thead>
                                <tr>
                                    <th scope='row'>Calendar</th>
                                    <th scope='col'>Spring</th>
                                    <th scope='col'>Summer</th>
                                    <th scope='col'>Fall</th>
                                    <th scope='col'>Winter</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'></th>
                                    <td>Foliage</td>
                                    <td>Foliage and foliage</td>
                                    <td>Foliage and silhouette</td>
                                    <td>Skeleton</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </GridLayout>
            </section>
        </>
    );
}
