import { useRouter } from 'next/router';
import useSWR from 'swr';

import Head from 'next/head'
import Content from '../../components/Content';

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
        () => pid && `/api/plant/${pid}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    const blocks = [
        {
            _uid: '0',
            component: 'image',
            attributes: {
                src: `/images/${pid}.webp`,
                size: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
                width: 1200,
                height: 800
            }
        },
        {
            _uid: '1',
            component: 'lead',
            children: [
                <span key='1'>{ data.title }.</span>,
                <>{ data.description }</>
            ]
        },
        {
            _uid: '2',
            component: 'cards',
            children: {}
        }
    ];

    return (
        <div className={'container'}>
            <Head>
                <title>Hardyards | { data.title }</title>
                <meta name="description" content={data.description} />
            </Head>

            <Content blocks={blocks} />
        </div>
    )
}