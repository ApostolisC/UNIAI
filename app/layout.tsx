import React, { ReactNode } from 'react';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="top-0 mb-0">
          <Navigation />
        </header>
        <main>
          <div>{children}</div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
