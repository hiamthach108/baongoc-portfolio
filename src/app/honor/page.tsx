import React from 'react';

import HonorList from '@/components/features/honor/HonorList';
import PageHeader from '@/components/shared/PageHeader';

const page = () => {
  return (
    <div>
      <PageHeader name="Honor" />
      <HonorList />
    </div>
  );
};

export default page;
