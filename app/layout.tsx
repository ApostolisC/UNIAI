import React, { ReactNode } from 'react';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';
import '../styles/globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})  {
  return (
    <html lang="en">
      <body className="">
        {<header className="top-0 mb-0">
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