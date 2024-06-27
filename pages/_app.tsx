import type { AppProps } from 'next/app'
import '@/styles/globals.css'; // Assuming globals.css is in the root directory
import RootLayout from '../app/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
  } 
