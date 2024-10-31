import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';

import AnimFade from '../animation/AnimFade';

const LeadershipList = () => {
  return (
    <div className="py-10 flex flex-col gap-20">
      <div className="px-6 md:px-12 flex gap-10 items-center flex-col md:flex-row">
        <AnimFade direction="left" className="w-3/4 md:w-1/3">
          <Image
            src="/leadership/magic-flora.jpg"
            alt="Magic Flora Medicinal Plant Club"
            width={600}
            height={600}
            className="w-full h-auto object-cover object-center aspect-square"
          />
        </AnimFade>
        <AnimFade direction="right" className="flex flex-col gap-2 flex-1">
          <Link
            target="_blank"
            href={'https://www.facebook.com/profile.php?id=61561944069966'}
            className="flex items-center gap-1"
          >
            <h4 className="section-heading mb-3">Magic Flora Medicinal Plant Club</h4>
          </Link>
          <p className="text-sm">
            A study on medicinal herbs: Health-improving medicines are usually closer than
            we thought. In fact, they can be found right outside our doors, at our local
            grocery store, or even in our kitchen unknowingly.
          </p>
          <ul className="pl-4 text-sm">
            <li>
              Ginger can aid digestion, reduce nausea, and alleviate motion sickness.
              Ginger also has anti-inflammatory properties, which may help relieve pain
              and soreness in conditions like arthritis.
            </li>
            <li>
              Aloe vera is known for its anti-inflammatory effects, which can help reduce
              skin irritation and promote wound healing when applied topically, making it
              a popular ingredient in skincare products.
            </li>
            <li>
              Rich in antioxidants, pennywort can help protect the body from oxidative
              stress. It is also renowned for its ability to enhance cognitive function,
              improve memory, and reduce anxiety, making it popular in traditional
              medicine.
            </li>
            <li>
              Lemon grass is a natural remedy for digestive issues, neurological problems,
              and high blood pressure. Lemongrass reportedly has antibacterial and
              antifungal properties. It has traditionally been used as a pain reliever and
              fever reducer.
            </li>
          </ul>
        </AnimFade>
      </div>

      <div className="px-6 md:px-12 flex flex-col gap-3 mt-10">
        <h4 className="section-heading text-center">Model United Nations</h4>

        <AnimFade direction="up" className="text-sm">
          Model United Nations has been an invaluable platform for my personal and
          leadership growth. Starting as an unassuming delegate, quietly absorbing the
          debates of more experienced participants, I soon found my voice and confidence.
          Each conference honed my skills, and eventually, I earned Best Delegate at the
          Youth Ascendancy Model United Nations 2023 Main Conference. Becoming Deputy
          Secretary-General pushed me further, as I took on the responsibility of
          organizing conferences, managing multiple committees, and resolving conflicts.
          This role challenged me to think critically, adapt under pressure, and lead with
          both diplomacy and decisiveness.
        </AnimFade>

        <AnimFade direction="up" className="text-sm">
          The lessons I’ve learned through MUN—resilience, adaptability, and
          collaboration—have shaped other areas of my life. Just as dance allows me to
          express myself creatively, MUN has given me the confidence to articulate complex
          ideas and lead with clarity. Both experiences have shown me that success
          requires innovation and teamwork, lessons that directly apply to my passion for
          science. In the lab, as in diplomacy, persistence and collaboration are key to
          solving real-world challenges, and I am committed to using these skills to push
          boundaries and create meaningful change.
        </AnimFade>

        <AnimFade direction="up" className="text-sm">
          <span>Explore More:</span>
          <div className="flex gap-4">
            <Link
              target="_blank"
              href={'https://www.facebook.com/tomun2021?mibextid=AEUHqQ'}
              className="font-medium text-primary"
            >
              Tran Dai Nghia
            </Link>
            <Link
              target="_blank"
              href={'https://www.facebook.com/yasmun.official'}
              className="font-medium text-primary"
            >
              YAS
            </Link>
            <Link
              target="_blank"
              href={'https://www.facebook.com/simun2018'}
              className="font-medium text-primary"
            >
              SIMUN
            </Link>
          </div>
        </AnimFade>
      </div>
      <ImgCarousel
        images={[
          '/leadership/mun/1.JPG',
          '/leadership/mun/2.JPG',
          '/leadership/mun/3.JPG',
          '/leadership/mun/4.JPG',
          '/leadership/mun/5.JPG',
          '/leadership/mun/6.JPG',
        ]}
      />

      {/* <div className="p-6">
        <h4 className="section-heading text-center">Blue Legacy</h4>

        <p>
          As a member of the Student Council, I have worked to create a more inclusive and
          supportive community. I have organized events, such as the annual talent show
          and charity fundraisers, that foster school spirit and raise awareness for
          important causes. These experiences have taught me the importance of
          communication, organization, and teamwork, skills that are crucial for effective
          leadership.
        </p>
      </div> */}

      <div className="px-6 md:px-12 flex flex-col gap-3 mt-10">
        <h4 className="section-heading text-center">Blue Legacy</h4>

        <AnimFade direction="up" className="text-sm">
          Volunteering with Blue Legacy taught me invaluable lessons in leadership,
          organization, and community engagement. Coordinating beach cleanups in areas
          like Cần Giờ Island required meticulous planning—such as securing permits,
          arranging transportation for over 100 volunteers, and ensuring proper waste
          disposal. When unexpected rain threatened one of our cleanups in Bình Thuận, I
          quickly reorganized the schedule and communicated new plans to the team,
          ensuring we met our goals despite the challenge.
        </AnimFade>

        <AnimFade direction="up" className="text-sm">
          Managing large groups of volunteers also honed my teamwork skills, as I
          delegated tasks and facilitated group problem-solving during mural painting
          projects in Phước Hải. Interacting directly with local communities, especially
          during our recycling event for elementary students, showed me how small
          actions—like showcasing recycled goods—can spark broader conversations about
          sustainability. These experiences strengthened my leadership and reinforced my
          belief in the power of collective action to drive meaningful change.
        </AnimFade>

        <AnimFade direction="up" className="text-sm">
          <span>Explore More</span>
          <div className="flex gap-4">
            <Link
              target="_blank"
              href={'https://www.facebook.com/profile.php?id=61562542580964'}
              className="font-medium text-primary"
            >
              Fanpage
            </Link>
          </div>
        </AnimFade>
      </div>
      <ImgCarousel
        images={[
          '/leadership/blue-legacy/1.jpeg',
          '/leadership/blue-legacy/2.jpeg',
          '/leadership/blue-legacy/3.jpeg',
          '/leadership/blue-legacy/4.jpeg',
          '/leadership/blue-legacy/5.webp',
          '/leadership/blue-legacy/6.webp',
        ]}
      />
    </div>
  );
};

export default LeadershipList;
