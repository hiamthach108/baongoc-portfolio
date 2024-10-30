import Image from 'next/image';

import React from 'react';

import AnimFade from '../animation/AnimFade';
import AnimText from '../animation/AnimText';

const HomeHero = () => {
  return (
    <div>
      <div
        className="h-screen w-full flex items-center justify-center relative"
        style={{
          backgroundImage: `url('/baongoc.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: '16% 16%',
        }}
      >
        <div className="absolute top-0 left-0 right-0 w-full h-full bg-black bg-opacity-30"></div>
        <div className="z-20">
          <AnimText
            text="TRAN MINH BAO NGOC"
            className="text-xl md:text-5xl text-center text-white tracking-widest font-black font-title"
          ></AnimText>
        </div>
      </div>
      <div className="px-6 md:px-10 py-32">
        <h3 className="text-center mt-6 mb-12 section-heading">About me</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <AnimFade direction="left" className="w-full md:w-1/3">
            <Image
              src="/baongoc2.JPG"
              alt="Picture of the author"
              width={500}
              height={600}
              className="w-full h-auto"
            />
          </AnimFade>
          <div className="flex-1 flex flex-col gap-3 font-normal text-[15px] leading-5">
            <AnimFade direction="right">
              <p>
                Hi! I’m Trần Minh Bảo Ngọc, a high school senior with an insatiable
                curiosity for the world and all its layers. Whether I’m peering through a
                microscope to uncover the secrets of biology, analyzing social issues
                through a political lens, or expressing emotions through art, I thrive on
                exploration and advocating for the things I believe in.
              </p>
            </AnimFade>
            <AnimFade direction="right" delay={0.1}>
              <p>
                At the heart of everything I do is a desire to make a lasting, positive
                impact. I believe that real change starts with understanding the world
                from multiple perspectives, which is why I’ve immersed myself in a variety
                of fields. As a member of the Blue Legacy Club, I’m committed to
                protecting marine ecosystems through hands-on environmental projects. At
                the same time, my involvement in Tran Dai Nghia Model United Nations has
                honed my passion for global diplomacy, where I debate complex issues that
                shape societies.
              </p>
            </AnimFade>
            <AnimFade direction="right" delay={0.15}>
              <p>
                Creativity is my personal refuge. Outside the classroom, I find joy in
                dance and painting, both of which offer me new ways to interpret and
                express the world’s beauty and challenges. These artistic outlets help me
                see problems from different angles, and they remind me that solutions
                often require imagination.
              </p>
            </AnimFade>
            <AnimFade direction="right" delay={0.2}>
              <p>
                Looking ahead, I’m excited to dive into Biomedical Engineering in college,
                where I plan to work on innovations that make healthcare more accessible
                for all. Whether it’s bridging gaps in medical care, addressing climate
                challenges, or fostering empathy through art, I’m fueled by the belief
                that we each hold the power to create a more equitable and compassionate
                future.
              </p>
            </AnimFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
