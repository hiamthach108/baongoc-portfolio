import React from 'react';

import LeadershipList from '@/components/features/leadership/LeadershipList';
import PageHeader from '@/components/shared/PageHeader';

const page = () => {
  return (
    <div className="overflow-hidden">
      <PageHeader name="Leadership" />
      <LeadershipList />
    </div>
  );
};

export default page;
