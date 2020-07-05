import { Table } from 'choerodon-ui/pro';
import React, { useContext } from 'react';
import { TableEditMode } from 'choerodon-ui/pro/lib/table/enum';
import Store from './stores';

const From = () => {
  const { tableInlineDataSet } = useContext(Store);
  const columns = [
    {
      name: 'id',
      style: {
        color: '#3399CC',
      },
      width: 150,
      lock: true,
    }, // 自定义列的样式
    {
      name: 'name',
      width: 150,
      sortable: true,
    },
    {
      name: 'barcode',
      width: 150,
      sortable: true,
    },
    {
      name: 'price',
      width: 150,
      sortable: true,
    },
    {
      name: 'num',
      width: 150,
      sortable: true,
    },
    {
      name: 'amount',
      width: 150,
      sortable: true,
    },
  ];
  return (
    <Table
      header="退货商品"
      dataSet={tableInlineDataSet}
      columns={columns}
      editMode={TableEditMode.inline}
      pagination={false}
    />
  );
};

export default From;
