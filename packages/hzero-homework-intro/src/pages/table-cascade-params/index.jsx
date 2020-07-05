import React from 'react';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { StoreProvider } from './stores';
import TableCascadeParams from './TableCascadeParams';

export default () => (
  <StoreProvider>
    <PageHeaderWrapper title="table-cascade-params">
      <TableCascadeParams />
    </PageHeaderWrapper>
  </StoreProvider>
);
