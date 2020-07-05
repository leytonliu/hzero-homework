// import { Table} from 'antd';
import { Icon } from 'choerodon-ui';
import { Button, Table } from 'choerodon-ui/pro';
import React from 'react';
import { TableEditMode, TableCommandType } from 'choerodon-ui/pro/lib/table/enum';

const defaultRowData = {
  workId: '',
  name: '',
  department: '',
};

const TableForm = ({ dataSet }) => {
  const newMember = () => {
    dataSet.create({ ...defaultRowData });
  };

  const columns = [
    {
      name: 'name',
      key: 'name',
      width: 200,
      editor: true,
    },
    {
      name: 'workId',
      width: 200,
      editor: true,
    },
    {
      name: 'department',
      key: 'department',
      width: 200,
      editor: true,
    },
    {
      header: '操作',
      command: [TableCommandType.edit, TableCommandType.delete],
    },
  ];
  return (
    <>
      <Table dataSet={dataSet} columns={columns} editMode={TableEditMode.inline} />
      <Button
        style={{
          width: '100%',
          marginTop: 16,
          marginBottom: 8,
        }}
        onClick={newMember}
      >
        <Icon type="add" />
        新增成员
      </Button>
    </>
  );
};

export default TableForm;
