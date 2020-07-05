import React, { createContext, useMemo } from 'react';
import { DataSet } from 'choerodon-ui/pro';
import tableInlineDS from './tableInlineDataSet';
import tableProgressDS from './progressDataSet';
import formDS from './formDataSet';

const Store = createContext({});
export default Store;
export const StoreProvider = (props) => {
  const { children } = props;
  const tableInlineDataSet = useMemo(() => new DataSet(tableInlineDS()), []);
  const tableProgressDataSet = useMemo(() => new DataSet(tableProgressDS()), []);
  const FormDataSet = useMemo(() => new DataSet(formDS()), []);
  const value = { ...props, tableInlineDataSet, tableProgressDataSet, FormDataSet };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
