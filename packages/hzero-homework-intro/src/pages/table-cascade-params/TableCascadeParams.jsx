import { Table, Button, Form } from 'choerodon-ui/pro';
import React, { useContext } from 'react';
import { TableButtonType } from 'choerodon-ui/pro/lib/table/enum';
import Store from './stores';

const { FilterBar } = Table;

const TableCascadeParams = () => {
  const { tableInlineDataSet } = useContext(Store); // 自定义操作列

  const columns = [
    {
      name: 'userid',
      style: {
        color: 'red',
      },
      editor: true,
      width: 150,
      lock: true,
    },
    {
      name: 'age',
      editor: true,
      width: 150,
      sortable: true,
    },
    {
      name: 'name',
      editor: true,
      width: 150,
      sortable: true,
    },
    {
      name: 'sex',
      editor: true,
      width: 150,
      sortable: true,
    },
    {
      name: 'code_code',
      width: 150,
      sortable: true,
    },
  ];

  const renderBar = (props) => {
    const { queryFields, queryDataSet, queryFieldsLimit, dataSet, buttons } = props;

    if (queryDataSet) {
      return (
        <>
          <Form columns={queryFieldsLimit} dataSet={queryDataSet}>
            {queryFields}
            <div>
              <Button
                dataSet={undefined}
                onClick={() => {
                  dataSet.query();
                }}
              >
                查询
              </Button>
              <Button onClick={() => queryDataSet.reset()}>重置</Button>
              {buttons}
            </div>
          </Form>
          <FilterBar {...props} buttons={[]} />
        </>
      );
    }
  };

  return (
    <Table
      dataSet={tableInlineDataSet}
      buttons={[TableButtonType.add]}
      queryBar={renderBar}
      columns={columns}
      queryFieldsLimit={3}
    />
  );
};

export default TableCascadeParams;
