import React from 'react';

const PageHeader = ({ name }: { name: string }) => {
  return (
    <div
      className="w-full py-10 bg-black text-center relative mb-12 md:mb-20"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url(https://img1.wsimg.com/isteam/ip/3fac05ca-e604-4b2f-abed-71679f4d90a8/jean-philippe-delberghe-626515-unsplash.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1535,m)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white font-title uppercase tracking-widest z-20 relative">
        {name}
      </h1>

      <div className="absolute top-0 left-0 right-0 w-full h-full bg-black bg-opacity-20"></div>
    </div>
  );
};

export default PageHeader;
