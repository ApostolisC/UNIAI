import type { AppProps } from 'next/app'
import '@/styles/globals.css'; // Assuming globals.css is in the root directory
import RootLayout from '../app/layout';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
  } 

export default appWithTranslation(App); 