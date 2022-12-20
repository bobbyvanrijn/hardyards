import React from 'react';
import { GetStaticProps } from 'next'
import useSWR, { SWRConfig, unstable_serialize } from 'swr';
import Head from 'next/head';

import GridLayout from 'layouts/grid';
import Content from 'components/Content';

import { formatPlantName } from 'helpers/formatPlantName';
import { plants } from 'content/plants';

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }

    return data
}

type Data = {};

export async function getStaticPaths() {
    return {
        paths: plants.map((plant => { 
            return {
                params: { pid: plant.slug }
            }
        })),
        fallback: false, // can also be true or 'blocking'
    }
}

async function getPlantFromApi(slug: any) {
    const plant = plants.find((plant: any) => plant.slug === slug) || null;
    return plant;
}

export async function getStaticProps(context: any) {
    const { params } = context;

    const plant = await getPlantFromApi(params.pid);

    return {
        props: {
            pid: params.pid,
            plant
        }
    }
}

export function Plant(props: any) {
    const hero = [
        {
            _uid: '92d40a2e-5f03-4396-a44f-daf7d3aca6f4',
            component: 'image',
            attributes: {
                'grid-x': '1/3',
                'grid-y': '2/3',
                className: 'bleed-inline bleed-block',
                src: `/images/${ props.pid }.webp`,
                size: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
                width: 800,
                height: 800,
            }
        },
        {
            _uid: '4397c42f-f205-49cb-a875-1cac86f512cb',
            component: 'text',
            attributes: {
                'grid-x': '1/2',
                'grid-y': '1/2',
            },
            children: [
                <h1 className='trim-both' key={1}>
                    <span className='uppercase'>
                        {formatPlantName(props.plant)}.&nbsp;
                    </span>
                    {props.plant.common}.
                </h1>,
                <p key={2} className='lead trim-both'>{props.plant.description}</p>
            ]
        }
    ];

    const textImage = [
        {
            _uid: '97ebdf5b-761e-4fa9-8774-763e7ca7e76e',
            component: 'meta',
            attributes: {
                'grid-x': '1',
                items: props.plant.meta.map(
                    (meta: { label: any; value: any; }) => {
                        return {
                            title: meta.label,
                            value: meta.value,
                        };
                    }
                ),
            }
        },
        {
            _uid: '0220f0fd-9d8e-45aa-899b-b96d11d27513',
            component: 'text',
            attributes: {
                'grid-x': '2/3',
                className: 'body-text'
            },
            children: props.plant.body?.map(
                (item: any, index: any) => <p className='trim-both' key={index}>{item}</p>
            )
        },
        {
            _uid: '0220f0fd-9d8e-45aa-899b-b96d11d27514',
            component: 'list',
            attributes: {
                'grid-x': '2/3',
                items: props.plant.collections?.map(
                    (collection: any) => {
                        return {
                            title: collection.title,
                            link: `/collections/${collection.slug}`
                        }
                    }
                )
            }
        }

    ]

    const title = formatPlantName(props.plant);

    return (
        <>
            <Head>
                <title>{ title } | Hard Yards</title>
                <meta name="description" content={props.plant.description} />
            </Head>

            <GridLayout grid-enforce-rows='true'>
                <Content blocks={hero} />
            </GridLayout>

            <GridLayout>
                <Content blocks={textImage} />
            </GridLayout>
        </>
    );
}

export default function Page(props: any) {
    return (
        <Plant pid={props.pid} plant={props.plant} />
    )
}