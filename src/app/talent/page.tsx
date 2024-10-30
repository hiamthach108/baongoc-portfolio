import React from 'react';

import TalentArtwork from '@/components/features/talent/TalentArtwork';
import TalentDance from '@/components/features/talent/TalentDance';
import PageHeader from '@/components/shared/PageHeader';

const page = () => {
  return (
    <div className=" overflow-hidden">
      <PageHeader name="Talent" />
      <div className="page-container flex flex-col gap-20">
        <TalentArtwork />
        <TalentDance />
      </div>
    </div>
  );
};

export default page;
