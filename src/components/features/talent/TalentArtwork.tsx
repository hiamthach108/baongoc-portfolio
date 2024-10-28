import React from 'react';

const list = [
  {
    id: 1,
    name: 'A lovely Tết',
    content: [
      `To celebrate the Vietnamese Lunar New Year—known as Tết—this painting features a koi fish, a symbol rich in meaning. In Japanese, the word "koi" is a homophone for 恋, which translates to "affection" or "love." This connection between the koi and feelings of love aligns beautifully with the themes of Tết, a time for family, renewal, and heartfelt wishes for happiness in the year ahead.`,
      `For the color palette, I chose hues traditionally linked to Tết: vibrant reds, yellows, and oranges. These colors, often seen in festive decorations and worn during the holiday, are believed to bring luck, prosperity, and warmth. Together, they create a visual harmony that reflects the joy and optimism that Tết brings to households across Vietnam.`,
    ],
  },
  {
    id: 2,
    name: 'Somewhere along the coastline of Vietnam',
    content: [
      'This painting began as a photograph taken by a friend during his journey through Đá Đĩa Reef in Phú Yên, Vietnam. As I worked on recreating the scene, I enjoyed experimenting with colored pencils to capture the movement of the waves. The challenge of imitating the ocean’s ebb and flow became a playful exploration of texture and color, bringing the serene coastline to life in a new way.',
    ],
  },
  {
    id: 3,
    name: 'Bạch nguyệt quang (White moon light)',
    content: [
      'Bạch nguyệt quang is a Chinese-Vietnamese term that literally means "bright moonlight." In popular C-dramas, and now among Vietnamese youth, it refers to the person you could never reach—the kind of teenage love that’s intense yet out of grasp.',
      `The vibrant mix of colors in this painting reflects the whirlwind of emotions that come with such love—passion, longing, and heartache. Yet, the woman's solemn expression speaks to the quiet regret of a missed chance, the bittersweet feeling of letting someone slip away.`,
    ],
  },
  {
    id: 4,
    name: 'Lotus',
    content: [
      `As Vietnam's national flower, the lotus symbolizes purity, elegance, and strength—reflecting the resilience of the Vietnamese people. Growing from mud, the lotus remains unsullied, representing the ability to overcome adversity and remain virtuous.`,
      `In Vietnamese culture, the lotus is also the flower of Buddha, symbolizing enlightenment. Its life cycle mirrors the Buddhist philosophy of karma and rebirth: buds represent the past, flowers the present, and seeds the future, all interconnected.`,
    ],
  },
  {
    id: 5,
    name: 'Collage',
    content: [
      `A simple collage of blue and green flowers I picked from my mother’s garden. My mother’s green thumb has always amazed me—our front yard and home are always overflowing with plants. Growing up, I  often felt unsure of how to nurture anything myself. Working with those flowers in my art became a way to connect with her world, to bring a piece of that care and beauty into something I could create. It’s my quiet way of saying I’m trying to grow too.`,
    ],
  },
  {
    id: 6,
    name: 'Dong Thap',
    content: [
      `During a volunteering trip to Đồng Tháp in the summer of 2023, I experienced life far from the city—no electronics, no constant noise or rush. The quiet was unsettling at first, but soon I found comfort in the simplicity of it all. The days were filled with meaningful work, and I connected with the locals in ways that felt genuine and grounding. Away from the distractions, I gained a new appreciation for slowing down and being present.`,
    ],
  },
];

const TalentArtwork = () => {
  return (
    <div className="py-6">
      <h2 className="section-heading text-center">Art Work</h2>

      <p className="my-4 w-full max-w-[60vw] mx-auto">
        Art has always been my favorite way to express myself. I draw whatever sparks my
        curiosity, whether it’s the fascinating plants I discover during my deep dives
        into holistic medicine or the serene Vietnamese beaches from my volunteer trips.
        Each piece becomes a snapshot of the moments and subjects that captivate me.
        <br />
        Beyond aesthetics, my art reflects my love for exploration, blending the beauty of
        nature with personal experiences, creating a visual journey of the world as I see
        it.
      </p>
    </div>
  );
};

export default TalentArtwork;
