import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';

const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};

const getFormDSProps = () => ({
  name: 'advancedForm',
  autoCreate: true,
  fields: [
    {
      name: 'name',
      type: FieldType.string,
      label: fieldLabels.name,
      required: true,
    },
    {
      name: 'url',
      type: FieldType.string,
      label: fieldLabels.url,
      required: true,
    },
    {
      name: 'owner',
      type: FieldType.string,
      label: fieldLabels.owner,
      required: true,
    },
    {
      name: 'approver',
      type: FieldType.string,
      label: fieldLabels.approver,
      required: true,
    },
    {
      name: 'dateRange',
      type: FieldType.string,
      label: fieldLabels.dateRange,
      required: true,
    },
    {
      name: 'type',
      type: FieldType.string,
      label: fieldLabels.type,
      required: true,
    },
    {
      name: 'owner',
      type: FieldType.string,
      label: fieldLabels.owner,
      required: true,
    },
    {
      name: 'name2',
      type: FieldType.string,
      label: fieldLabels.name,
      required: true,
    },
    {
      name: 'url2',
      type: FieldType.string,
      label: fieldLabels.url2,
      required: true,
    },
    {
      name: 'owner2',
      type: FieldType.string,
      label: fieldLabels.owner2,
      required: true,
    },
    {
      name: 'approver2',
      type: FieldType.string,
      label: fieldLabels.approver2,
      required: true,
    },
    {
      name: 'dateRange2',
      type: FieldType.date,
      label: fieldLabels.dateRange2,
      required: true,
    },
    {
      name: 'type2',
      type: FieldType.string,
      label: fieldLabels.type2,
      required: true,
    },
    {
      name: 'owner2',
      type: FieldType.string,
      label: fieldLabels.owner2,
      required: true,
    },
  ],
  transport: {
    submit: {
      method: 'post',
      url: '/_api/advanced-form/submit',
    },
  },
});

export default getFormDSProps;
