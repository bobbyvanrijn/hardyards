import 'styles/globals.css';
import 'styles/transitions.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Toolbar } from 'components';
import Transition from 'components/Transition';

import localFont from '@next/font/local';
import { Inter } from '@next/font/google';

const serif = localFont({
    src: '../public/fonts/serif.otf',
    variable: '--font-serif'
});
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${serif.variable}`}>
        <Head>
            <title>Hard Yards</title>
            <meta name="description" content="Gardening tool." />
            <meta property="og:image" content="/api/og?title=Hardyards" />

            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/api/icon" />
            <link rel="apple-touch-icon" href="api/icon" />
            <link rel="apple-touch-startup-image" href="api/splash" />
        </Head>

        <Transition>
            <Component {...pageProps} />
        </Transition>

        <Toolbar />
    </main>
  );
}
