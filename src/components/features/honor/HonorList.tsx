import Image from 'next/image';

import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';

const HonorList = () => {
  return (
    <div className="py-10 flex flex-col gap-6">
      <h1 className="font-heading font-black text-center text-4xl text-text tracking-wider">
        WICO
      </h1>

      <div className="content-container flex flex-col gap-4">
        <Image
          src={'/honor/wico/poster.png'}
          alt="WICO"
          width={1000}
          height={1200}
          className="object-contain w-full h-auto"
        />

        <div className="flex-1 flex flex-col gap-3 text-justify">
          <p>
            During the summer of 2024, I had the incredible opportunity to compete at the
            World Invention and Creativity Olympiad (WICO) in South Korea. Initially, I
            thought the lab work—navigating equipment, mastering procedures, and
            coordinating with my teammates—would be the toughest part. But I quickly
            realized that creating a compelling presentation was even more challenging.
            Understanding the research was one thing, but conveying it clearly and
            concisely was an entirely different skill.
          </p>
          <p>
            As the person in charge of designing the poster, I went through numerous
            drafts, experimenting with colors, layouts, and visual storytelling as often
            as I conducted lab experiments. Every detail needed to communicate our
            findings effectively.
          </p>
          <p>
            Though difficult, this process provided me with invaluable lessons. It taught
            me the importance of clear communication in science and the creativity
            required to make complex ideas accessible. The experience pushed me beyond my
            comfort zone and made me a better researcher and presenter.
          </p>
        </div>
      </div>
      <ImgCarousel
        images={[
          '/honor/wico/1.jpg',
          '/honor/wico/2.jpg',
          '/honor/wico/3.jpg',
          '/honor/wico/4.jpeg',
          '/honor/wico/5.jpeg',
          '/honor/wico/6.jpg',
        ]}
      />
    </div>
  );
};

export default HonorList;
