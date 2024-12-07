import type { AppProps } from 'next/app'
import '@/styles/globals.css'; // Assuming globals.css is in the root directory

import RootLayout from '@/src/app/[locale]/layout';

import { appWithTranslation } from 'next-i18next';


function App({ Component, pageProps }: AppProps) {
    const { locale } = pageProps;

    return (
        <RootLayout params={{ locale: locale || '' }}>
            <Component {...pageProps}/>
        </RootLayout>
    );
} 

export default appWithTranslation(App);