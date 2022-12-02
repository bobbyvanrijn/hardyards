import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';

import GridLayout from '../../layouts/grid';

import Content from '../../components/Content';

import Loader from '../../components/Loader';
import HeaderSpacer from '../../components/HeaderSpacer';
import ShareButton from '../../components/ShareButton';

import { formatPlantName } from '../../helpers/formatPlantName';

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Plant() {
    const router = useRouter();
    const { pid } = router.query;

    const { data, error } = useSWR(
        () => pid && `/api/plants/${pid}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <Loader background={'dark'} />
    const blocks = [
        {
            _uid: '92d40a2e-5f03-4396-a44f-daf7d3aca6f4',
            component: 'image',
            attributes: {
                gridArea: '2/3',
                src: `/images/${ pid }.webp`,
                size: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
                blurDataURL: `/images/${ pid }-small.webp`,
                width: 800,
                height: 200,
            }
        },
        {
            _uid: 'f1988ac8-721b-11ed-a1eb-0242ac120002',
            component: 'title',
            attributes: {
                gridArea: '1',
                headingLevel: '1'
            },
            children: [
                <>{ formatPlantName(data.plant) }</>,
            ]
        },

        {
            _uid: '4397c42f-f205-49cb-a875-1cac86f512ca',
            component: 'lead',
            attributes: {
                gridArea: '2/3'
            },
            children: [
                <div>{ data.plant.description }</div>,
                <ShareButton
                    url={router.asPath}
                    title={formatPlantName(data.plant)}
                    text={`${formatPlantName(data.plant)} – ${data.plant.description}`}
                />
            ]
        },

        {
            _uid: '97ebdf5b-761e-4fa9-8774-763e7ca7e76e',
            component: 'meta',
            attributes: {
                gridArea: '1a+1b',
                items: data.plant.meta.map(
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
                gridArea: '2/3'
            },
            children: data?.plant?.body?.map(
                (element: {type: string, props: Array<any>}) =>
                    React.createElement(element.type, element.props, )
            )
        }
    ];

    return (
        <>
            <Head>
                <title>Hard Yards | { data.plant.title }</title>
                <meta name="description" content={data.plant.description} />
            </Head>

            <GridLayout>
                <HeaderSpacer />

                <Content blocks={blocks} />
            </GridLayout>
        </>
    )
}