import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';

const data = [
  {
    goodsNumber: 1000000000,
    stauts: '已取货',
    sellNumber: 1234123421,
    childNumber: 3214321432,
    name: '付小小',
    phone: '18100000000',
    express: '菜鸟仓储',
    address: '浙江省杭州市西湖区万塘路18号',
    remark: '无',
  },
];

const fromDs = () => ({
  autoCreate: true,
  data,
  // 初始化值
  fields: [
    {
      name: 'goodsNumber',
      type: FieldType.number,
      label: '取货单号',
      required: true,
    },
    {
      name: 'stauts',
      type: FieldType.string,
      label: '状态',
      required: true,
    },
    {
      name: 'sellNumber',
      type: FieldType.number,
      label: '销售单号',
      required: true,
    },
    {
      name: 'childNumber',
      type: FieldType.number,
      label: '子订单',
      required: true,
    },
    {
      name: 'name',
      type: FieldType.string,
      label: '用户姓名',
      required: true,
    },
    {
      name: 'phone',
      type: FieldType.string,
      label: '联系电话',
      labelWidth: '150',
      required: true,
      pattern: '^1[3-9]\\d{9}$', // 正则校验
    },
    {
      name: 'express',
      type: FieldType.string,
      label: '常用快递',
      required: true,
    },
    {
      name: 'address',
      type: FieldType.string,
      label: '取货地址',
      required: true,
    },
    {
      name: 'remark',
      type: FieldType.string,
      label: '备注',
      required: true,
    },
  ],
});

export default fromDs;
