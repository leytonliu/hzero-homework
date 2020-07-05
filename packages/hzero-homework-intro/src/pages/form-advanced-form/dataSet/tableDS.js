import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';

const getTableDSProps = () => ({
  name: 'advancedFormTable',
  autoQuery: true,
  fields: [
    {
      name: 'name',
      type: FieldType.string,
      label: '成员姓名',
    },
    {
      name: 'workId',
      type: FieldType.string,
      label: '工号',
    },
    {
      name: 'department',
      type: FieldType.string,
      label: '部门',
    },
  ],
  transport: {
    read: {
      method: 'get',
      url: '/_api/advanced-form/list',
    },
    submit: {
      method: 'post',
      url: '_api/advanced-form/list',
    },
  },
});

export default getTableDSProps;
