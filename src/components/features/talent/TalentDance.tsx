import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';

const TalentDance = () => {
  return (
    <div className="py-6">
      <h2 className="section-heading text-center">Dance</h2>
      <p className="my-4 w-full mx-auto">
        Although my passion for dance began with a simple &quot;yes&quot; to a friend’s
        invitation, it has evolved into a vital form of creative expression and community
        connection. Dance allows me to explore movement as a powerful language,
        translating emotions and experiences into performances that resonate with others.
        Whether collaborating on intricate choreography or sharing the joy of movement
        through teaching, I’ve found that dance fosters a deep sense of connection and
        belonging. It’s more than just performing—it&apos;s a constant journey of growth
        and discovery. I’m always seeking new ways to push my creative limits, using dance
        to inspire, engage, and build a vibrant artistic community.
      </p>

      <div className="-mx-6 mt-6">
        <ImgCarousel
          images={['/dance/1.PNG', '/dance/2.JPG', '/dance/3.JPG', '/dance/4.JPG']}
        />
      </div>
    </div>
  );
};

export default TalentDance;
