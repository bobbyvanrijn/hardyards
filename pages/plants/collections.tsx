import { useRouter } from 'next/router';
import useSWR from 'swr';

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Content from '../../components/Content';

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Collections() {
    const router = useRouter();
    const { pid } = router.query;

    const { data, error } = useSWR(
        () => '/api/plants/collections',
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    const plants = data.collections;

    const blocks = [
        // {
        //     _uid: '1',
        //     component: 'list',
        //     attributes: {
        //         title: 'Prime collection'
        //     },
        //     children: {},
        // },
        // {
        //     _uid: '61f5c21d-93c6-4112-8040-29db5a9839a3',
        //     component: 'carousel',
        //     children: plants.map(
        //         plant =>
        //             <Link
        //                 href={`/plants/${plant.slug}`}
        //                 key={`plant-${plant.slug}`}
        //             >
        //                 <Image
        //                     src={`/images/${ plant.slug }.webp`}
        //                     width={480}
        //                     height={640}
        //                     alt={`${ plant.genus } ${ plant.species } ${ plant.cultivar }`}
        //                     placeholder='blur'
        //                     blurDataURL={`/images/${ plant.slug}-small.webp`}
        //                 />
        //             </Link>
        //     )
        // }
    ];

    return (
        <div className={'container'}>
            {/* <Content blocks={blocks} /> */}
        </div>
    )
}