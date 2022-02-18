import '../components/register-components';
import '../css/main.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '../../next-seo.config';
import { WishlistProvider } from '../context/wishlist';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" />
                <DefaultSeo {...defaultSEO} />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
