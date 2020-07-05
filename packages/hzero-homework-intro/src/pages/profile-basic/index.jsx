import React from 'react';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { StoreProvider } from './stores';
import TableInline from './TableInline';
import TableIeProgress from './TableIeProgress';
import FromPage from './FormPage';

export default () => (
  <StoreProvider>
    <PageHeaderWrapper title="ProfileBasic">
      <FromPage />
      <TableInline />
      <TableIeProgress />
    </PageHeaderWrapper>
  </StoreProvider>
);
