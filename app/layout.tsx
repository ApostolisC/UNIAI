import React, { ReactNode } from 'react';
import Navigation from '../components/Navigation/navigation';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})  {
  return (
    <html lang="en">
      <body className="h-screen overflow-auto">
        {<header className="top-0 mb-10">
            <Navigation />
        </header>}
        <main>
          <div className="mt-10 min-vh-100">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};