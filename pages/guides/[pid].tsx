import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';

import GridLayout from '../../layouts/grid';

import Content from '../../components/Content';
import Loader from '../../components/Loader';
import HeaderSpacer from '../../components/HeaderSpacer';

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Guide() {
    const router = useRouter();
    const { pid } = router.query;

    const { data, error } = useSWR(
        () => pid && `/api/guides/${pid}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <Loader background={'dark'} />

    const blocks = [
        {
            _uid: 'f1988ac8-721b-11ed-a1eb-0242ac120002',
            component: 'title',
            attributes: {
                gridArea: '2',
                headingLevel: '1'
            },
            children: [
                <>{ data.guide.title }</>,
            ]
        },
        {
            _uid: '0220f0fd-9d8e-45aa-899b-b96d11d27513',
            component: 'text',
            attributes: {
                gridArea: '2/3'
            },
            children: data?.guide?.body?.map(
                (element: {type: string, props: Array<any>}) =>
                    React.createElement(element.type, element.props)
            )
        }
    ];

    return (
        <>
            <Head>
                <title>{ data.guide.title } &mdash; Hard Yards</title>
            </Head>

            <GridLayout>
                <HeaderSpacer />

                <Content blocks={blocks} />
            </GridLayout>
        </>
    )
}