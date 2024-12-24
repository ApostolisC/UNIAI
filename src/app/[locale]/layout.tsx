import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import NotFound from '@/src/app/[locale]/not-found';
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

async function fetchMessages(locale: string) {
  try {
    if (!routing.locales.includes(locale as any)) {
      return null;
    }
    return await getMessages();
  } catch (error) {
    console.error('Error fetching messages:', error);
    return null; // Return null to indicate failure
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await fetchMessages(locale);
  if (messages === null) {
    return <NotFound />;
  }

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