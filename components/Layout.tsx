import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      {/* Other layout elements (e.g., footer) */}
    </div>
  );
};

export default Layout;
