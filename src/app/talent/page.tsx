import React from 'react';

import TalentArtwork from '@/components/features/talent/TalentArtwork';
import TalentDance from '@/components/features/talent/TalentDance';

const page = () => {
  return (
    <div className="page-container">
      <TalentArtwork />
      <TalentDance />
    </div>
  );
};

export default page;
