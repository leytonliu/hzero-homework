import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';

const tableInlineDs = () => ({
  primaryKey: 'userid',
  name: 'user',
  queryUrl: '/_api/dataset/goods/queries',
  submitUrl: '/_api/dataset/goods/mutations',
  autoQuery: true,
  pageSize: 5,
  selection: false,
  queryFields: [],
  fields: [
    {
      name: 'id',
      type: FieldType.string,
      label: '编号',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: FieldType.string,
      label: '商品姓名',
    },
    {
      name: 'barcode',
      type: FieldType.string,
      label: '商品条码',
    },
    {
      name: 'price',
      type: FieldType.currency,
      label: '单价',
      currency: 'CNY',
    },
    {
      name: 'num',
      type: FieldType.number,
      label: '数量',
    },
    {
      name: 'amount',
      type: FieldType.currency,
      label: '金额',
      currency: 'CNY',
    },
  ],
  events: {
    load: ({ dataSet }) => {
      if (dataSet) {
        const data = dataSet.reduce(
          (previousValue, record) => ({
            id: '总计',
            num: previousValue.num + record.get('num'),
            amount: previousValue.amount + record.get('amount'),
          }),
          {
            id: '总计',
            num: 0,
            amount: 0,
          }
        );
        dataSet.create(data);
      }
    },
  },
});

export default tableInlineDs;
