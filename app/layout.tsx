import React, { ReactNode } from 'react';
import Navigation from '../components/Navigation/navigation';
import '../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="overflow-auto">
        <header className="top-0 mb-10">
            <Navigation />
        </header>
        <div className="mt-10 min-vh-100">
            {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
