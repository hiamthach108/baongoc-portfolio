import React from 'react';

import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen bg-bg w-full flex flex-col md:flex-row">
      <Header />
      <div
        className="flex-1 overflow-y-auto"
        style={{
          minHeight: 'calc(100vh - 4rem)',
        }}
      >
        {children}
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default MainLayout;
