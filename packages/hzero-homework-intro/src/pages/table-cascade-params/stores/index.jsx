import React, { createContext, useMemo } from 'react';
import { DataSet } from 'choerodon-ui/pro';
import tableInlineDS from './tableInlineDataSet';

const Store = createContext({});
export default Store;
export const StoreProvider = (props) => {
  const { children } = props;
  const tableInlineDataSet = useMemo(() => new DataSet(tableInlineDS()), []);
  const value = { ...props, tableInlineDataSet };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
