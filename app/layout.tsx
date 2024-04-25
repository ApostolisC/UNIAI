// Layout.tsx
import React from 'react';
import Navigation from '../components/Navigation/navigation';
import '../styles/globals.css';

const Layout: React.FC = ({ children }) => {
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
