import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../components/Header';
import Transition from '../components/Transition';

import { Inter, Source_Serif_4 } from '@next/font/google';
import '../styles/transitions.css';

const sourceSerif = Source_Serif_4({
    subsets: ['latin'],
    variable: '--font-source-serif',
    axes: ['opsz']
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${sourceSerif.variable}`}>
        <Head>
            <title>Hardyards</title>
            <meta name="description" content="Gardening tool." />
            <meta property="og:image" content="/api/og?title=Hardyards" />

            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/api/icon" />
            <link rel="apple-touch-icon" href="api/icon" />
        </Head>
        <Header />

        <Transition>
            <Component {...pageProps} />
        </Transition>
    </main>
  );
}
