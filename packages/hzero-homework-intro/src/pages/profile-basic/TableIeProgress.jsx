import { Table } from 'choerodon-ui/pro';
import React, { useContext } from 'react';
import { TableEditMode } from 'choerodon-ui/pro/lib/table/enum';
import Store from './stores';

const From = () => {
  const { tableProgressDataSet } = useContext(Store);
  const columns = [
    {
      name: 'time',
      width: 150,
      sortable: true,
    },
    {
      name: 'rate',
      width: 150,
      sortable: true,
    },
    {
      name: 'status',
      width: 150,
      sortable: true,
    },
    {
      name: 'operator',
      width: 150,
      sortable: true,
    },
    {
      name: 'cost',
      width: 150,
      sortable: true,
    },
  ];
  return (
    <Table
      header="退货进度"
      dataSet={tableProgressDataSet}
      columns={columns}
      editMode={TableEditMode.inline} // 行内编辑
      pagination={false}
    />
  );
};

export default From;
