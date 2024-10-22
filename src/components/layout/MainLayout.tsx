import React from 'react';

import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-bg w-full">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
