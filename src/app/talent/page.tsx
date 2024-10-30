import React from 'react';

import TalentArtwork from '@/components/features/talent/TalentArtwork';
import TalentDance from '@/components/features/talent/TalentDance';

const page = () => {
  return (
    <div className="page-container overflow-hidden">
      <TalentArtwork />
      <TalentDance />
    </div>
  );
};

export default page;
