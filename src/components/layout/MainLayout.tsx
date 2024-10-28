import React from 'react';

import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen bg-bg w-full flex">
      <Header />
      <div className="flex-1 min-h-screen overflow-y-auto">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
