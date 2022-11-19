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
        () => pid && `/api/plants/${pid}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    const blocks = [
        {
            _uid: '4397c42f-f205-49cb-a875-1cac86f512ca',
            component: 'lead',
            children: [
                <>{ data.plant.genus } { data.plant.species } { data.plant.cultivar }.</>,
                <>{ data.plant.description }</>
            ]
        },
        {
            _uid: '92d40a2e-5f03-4396-a44f-daf7d3aca6f4',
            component: 'image',
            attributes: {
                src: `/images/${ pid }.webp`,
                size: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
                placeholder: 'blur',
                blurDataURL: `/images/${ pid }-small.webp`,
                width: 1200,
                height: 800
            }
        },
        {
            _uid: '0220f0fd-9d8e-45aa-899b-b96d11d27513',
            component: 'text',
            children: [
                <p key='text-1'>
                    Drift, group, border, flower meadow. Praerie. Clump-forming ground cover. Variegated foliage.
                </p>
            ]
        },
        {
            _uid: '97ebdf5b-761e-4fa9-8774-763e7ca7e76e',
            component: 'cards',
            attributes: {
                items: data.plant.meta,
                title: 'Plant properties'
            }
        }
    ];

    return (
        <div className={'container'}>
            <Head>
                <title>Hardyards | { data.plant.title }</title>
                <meta name="description" content={data.plant.description} />
            </Head>
            <article>
                <Content blocks={blocks} />
            </article>
        </div>
    )
}