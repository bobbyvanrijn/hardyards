import 'styles/globals.css';
import 'styles/transitions.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Toolbar, Footer } from 'components';
import Transition from 'components/Transition';

import localFont from '@next/font/local';

const serif = localFont({
    src: '../public/fonts/serif.otf',
    variable: '--font-serif'
});
const sans = localFont({
    src: '../public/fonts/GeneralSans-Variable.ttf',
    variable: '--font-sans'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sans.variable} ${serif.variable}`}>
        <Head>
            <title>Hard Yards</title>
            <meta name="description" content="Gardening tool." />
            <meta property="og:image" content="/api/og?title=Hardyards" />

            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/api/icon" />
            <link rel="apple-touch-icon" href="api/icon" />
            <link rel="apple-touch-startup-image" href="api/splash" />

            <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Head>

        <Toolbar />

        <Transition>
            <Component {...pageProps} />

            <Footer />
        </Transition>
    </main>
  );
}
