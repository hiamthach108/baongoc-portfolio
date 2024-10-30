'use client';

import Image from 'next/image';

import { IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';

import AnimFade from '../animation/AnimFade';

type ImageArt = {
  id: number;
  name: string;
  content: string[];
  image: string;
  width: number;
  height: number;
};

const list: ImageArt[] = [
  {
    id: 1,
    name: 'A lovely Tết',
    content: [
      `To celebrate the Vietnamese Lunar New Year—known as Tết—this painting features a koi fish, a symbol rich in meaning. In Japanese, the word "koi" is a homophone for 恋, which translates to "affection" or "love." This connection between the koi and feelings of love aligns beautifully with the themes of Tết, a time for family, renewal, and heartfelt wishes for happiness in the year ahead.`,
      `For the color palette, I chose hues traditionally linked to Tết: vibrant reds, yellows, and oranges. These colors, often seen in festive decorations and worn during the holiday, are believed to bring luck, prosperity, and warmth. Together, they create a visual harmony that reflects the joy and optimism that Tết brings to households across Vietnam.`,
    ],
    image: '/art/a-lovely-tet.jpg',
    width: 400,
    height: 600,
  },
  {
    id: 2,
    name: 'Somewhere along the coastline of Vietnam',
    content: [
      'This painting began as a photograph taken by a friend during his journey through Đá Đĩa Reef in Phú Yên, Vietnam. As I worked on recreating the scene, I enjoyed experimenting with colored pencils to capture the movement of the waves. The challenge of imitating the ocean’s ebb and flow became a playful exploration of texture and color, bringing the serene coastline to life in a new way.',
    ],
    image: '/art/somewhere-along-the-coastline-of-vietnam.jpg',
    width: 600,
    height: 400,
  },
  {
    id: 3,
    name: 'Bạch nguyệt quang (White moon light)',
    content: [
      'Bạch nguyệt quang is a Chinese-Vietnamese term that literally means "bright moonlight." In popular C-dramas, and now among Vietnamese youth, it refers to the person you could never reach—the kind of teenage love that’s intense yet out of grasp.',
      `The vibrant mix of colors in this painting reflects the whirlwind of emotions that come with such love—passion, longing, and heartache. Yet, the woman's solemn expression speaks to the quiet regret of a missed chance, the bittersweet feeling of letting someone slip away.`,
    ],
    image: '/art/bachnguyetquang.jpg',
    width: 400,
    height: 600,
  },
  {
    id: 4,
    name: 'Lotus',
    content: [
      `As Vietnam's national flower, the lotus symbolizes purity, elegance, and strength—reflecting the resilience of the Vietnamese people. Growing from mud, the lotus remains unsullied, representing the ability to overcome adversity and remain virtuous.`,
      `In Vietnamese culture, the lotus is also the flower of Buddha, symbolizing enlightenment. Its life cycle mirrors the Buddhist philosophy of karma and rebirth: buds represent the past, flowers the present, and seeds the future, all interconnected.`,
    ],
    image: '/art/lotus.jpg',
    width: 400,
    height: 600,
  },
  {
    id: 5,
    name: 'Collage',
    content: [
      `A simple collage of blue and green flowers I picked from my mother’s garden. My mother’s green thumb has always amazed me—our front yard and home are always overflowing with plants. Growing up, I  often felt unsure of how to nurture anything myself. Working with those flowers in my art became a way to connect with her world, to bring a piece of that care and beauty into something I could create. It’s my quiet way of saying I’m trying to grow too.`,
    ],
    image: '/art/collage.jpg',
    width: 400,
    height: 600,
  },
  {
    id: 6,
    name: 'Dong Thap',
    content: [
      `During a volunteering trip to Đồng Tháp in the summer of 2023, I experienced life far from the city—no electronics, no constant noise or rush. The quiet was unsettling at first, but soon I found comfort in the simplicity of it all. The days were filled with meaningful work, and I connected with the locals in ways that felt genuine and grounding. Away from the distractions, I gained a new appreciation for slowing down and being present.`,
    ],
    image: '/art/dongthap.webp',
    width: 600,
    height: 400,
  },
  {
    id: 7,
    name: 'Lanterns',
    content: [],
    image: '/art/lanterns.jpg',
    width: 400,
    height: 600,
  },
  {
    id: 8,
    name: 'BMO',
    content: ['A childhood cartoon, a childhood character, a childhood song.'],
    image: '/art/BMO.JPG',
    width: 400,
    height: 600,
  },
  {
    id: 9,
    name: 'The door',
    content: ['Suzume - a visual feast.'],
    image: '/art/the-door.jpg',
    width: 400,
    height: 600,
  },
  {
    id: 10,
    name: 'A study of medicinal herbs.',
    content: [],
    image: '/art/pennywort.jpg',
    width: 400,
    height: 600,
  },
];

const TalentArtwork = () => {
  const [selectedImage, setSelectedImage] = useState<ImageArt | null>(null);

  return (
    <>
      <div className="py-6">
        <h2 className="section-heading text-center">Art Work</h2>

        <AnimFade direction="right">
          <p className="my-4 w-full mx-auto max-md:text-sm">
            Art has always been my favorite way to express myself. I draw whatever sparks
            my curiosity, whether it’s the fascinating plants I discover during my deep
            dives into holistic medicine or the serene Vietnamese beaches from my
            volunteer trips. Each piece becomes a snapshot of the moments and subjects
            that captivate me.
            <br />
            Beyond aesthetics, my art reflects my love for exploration, blending the
            beauty of nature with personal experiences, creating a visual journey of the
            world as I see it.
          </p>
        </AnimFade>

        <div className="w-full mt-6">
          {/* <Gallery
          enableImageSelection={false}
          images={list.map((item) => ({
            src: item.image,
            thumbnail: item.image,
            thumbnailWidth: item.width,
            thumbnailHeight: item.height,
            caption: item.name,
            width: item.width,
            height: item.height,
          }))}
          rowHeight={renderRowHeight()}
          onClick={(index) => {
            setSelectedImage(index);
            setLightboxOpen(true);
          }}
        ></Gallery> */}
          <MasonryPhotoAlbum
            spacing={2}
            photos={list.map((item) => ({
              src: item.image,
              width: item.width,
              height: item.height,
              title: item.name,
            }))}
            onClick={(index) => {
              const image = list.find((item) => item.image === index.photo.src);
              setSelectedImage(image || null);
            }}
          />
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 bg-black bg-opacity-40 flex items-center justify-center"
          onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            setSelectedImage(null);
          }}
        >
          <div className="relative bg-white flex flex-col md:flex-row max-md:overflow-y-auto w-fit mdmax-w-[60vw] h-[60vh]">
            <div className="h-full w-full md:w-fit max-md:max-h-[80%] text-center bg-sky-100">
              <Image
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-auto h-full object-contain"
                width={selectedImage.width}
                height={selectedImage.height}
              />
            </div>
            <div className="flex-1 p-4 min-w-[240px] max-w-lg">
              <h3 className="section-heading">{selectedImage.name}</h3>

              {selectedImage.content.map((text, index) => (
                <p key={index} className="my-4 text-sm text-left">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div
            className="absolute right-10 top-10 cursor-pointer"
            onClick={() => {
              setSelectedImage(null);
            }}
          >
            <IconX color="white" size={32} />
          </div>
        </div>
      )}
    </>
  );
};

export default TalentArtwork;
