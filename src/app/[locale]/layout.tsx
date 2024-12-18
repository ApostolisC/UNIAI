import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import Navigation from '@/src/components/Navigation/navigation';
import Footer from '@/src/components/Footer/footer';
 
import { ReactNode } from 'react';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;


  if (!routing.locales.includes(locale as any)) {
    notFound();
  }


  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header className="top-0 mb-0">
            <Navigation />
          </header>
          <main>
              {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
