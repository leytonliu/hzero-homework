import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';

const tableInlineDs = () => ({
  primaryKey: 'userid',
  name: 'user',
  queryUrl: '/_api/dataset/progress/queries',
  submitUrl: '/_api/dataset/progress/mutations',
  autoQuery: true,
  pageSize: 5,
  selection: false,
  queryFields: [],
  fields: [
    {
      name: 'key',
      type: FieldType.string,
      label: '编号',
      required: true,
      unique: true,
      help: '主键，区分用户',
    },
    {
      name: 'time',
      type: FieldType.dateTime,
      label: '时间',
    },
    {
      name: 'rate',
      type: FieldType.string,
      label: '当前进度',
    },
    {
      name: 'status',
      type: FieldType.string,
      label: '状态',
    },
    {
      name: 'operator',
      type: FieldType.string,
      label: '操作员ID',
    },
    {
      name: 'cost',
      type: FieldType.string,
      label: '耗时',
    },
  ],
});

export default tableInlineDs;
