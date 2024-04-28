import React, { ReactNode } from 'react';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})  {
  return (
    <html lang="en">
      <body className="">
        {<header className="top-0 mb-10">
            <Navigation />
        </header>}
        <main>
          <div className="">
            {children}
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};