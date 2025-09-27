import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lantern + Logic 🌐</title>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='0.9em' font-size='52'%3E%F0%9F%8C%90%3C/text%3E%3C/svg%3E"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
