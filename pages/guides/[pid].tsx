import { useRouter } from 'next/router';

import Head from 'next/head'

export default function Guide() {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <div className='container'>
            <Head>
                <title>Hardyards | { pid }</title>
            </Head>

            <h1>
                {pid}
            </h1>
        </div>
    )
}