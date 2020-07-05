import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';

const codeCodeDynamicProps = {
  // 代码code_code值绑定 为 字段code 的 值列表的值字段为code.codevalue
  bind({ record }) {
    const field = record.getField('code');

    if (field) {
      const valueField = field.get('valueField');
      return `code.${valueField}`;
    }
  },
};
const codeDynamicProps = {
  lovCode({ record }) {
    if (record) {
      return 'LOV_CODE';
    }
  },
};

const tableInlineDs = () => ({
  primaryKey: 'userid',
  name: 'user',
  queryUrl: '/_api/table/inline/dataset/user/queries',
  submitUrl: '/_api/table/inline/dataset/user/mutations',
  tlsUrl: '/_api/table/inline/dataset/user/languages',
  validateUrl: '/_api/table/inline/dataset/user/validate',
  autoQuery: true,
  pageSize: 5,
  queryFields: [
    {
      name: 'name',
      type: FieldType.string,
      label: '姓名',
    },
    {
      name: 'age',
      type: FieldType.number,
      label: '年龄',
    },
    {
      name: 'date.startDate',
      type: FieldType.date,
      label: '开始日期',
    },
    {
      name: 'mySex',
      type: FieldType.string,
      label: '性别',
      lookupUrl: '/_api/table/inline/common/code/HR.EMPLOYEE_GENDER',
    },
    {
      name: 'code',
      lovDefineUrl: '/_api/table/inline/sys/lov/lov_define',
      cascadeMap: {
        sex: 'mySex',
      },
      type: FieldType.object,
      lovQueryUrl: '/_api/table/inline/common/lov/dataset/LOV_CODE',
      label: '代码描述',
      lovCode: 'LOV_CODE',
    },
  ],
  fields: [
    {
      name: 'userid',
      type: FieldType.string,
      label: '编号',
      required: true,
      unique: true,
      help: '主键，区分用户',
    },
    {
      name: 'name',
      type: FieldType.string,
      label: '姓名',
    },
    {
      name: 'age',
      type: FieldType.number,
      label: '年龄',
      unique: 'uniqueGroup',
      max: 100,
      step: 1,
      help: '用户年龄，可以排序',
    },
    {
      name: 'sex',
      type: FieldType.string,
      label: '性别',
      lookupUrl: '/_api/table/inline/common/code/HR.EMPLOYEE_GENDER',
    },
    {
      name: 'code',
      type: FieldType.object,
      label: '代码描述',
      dynamicProps: codeDynamicProps,
      lovDefineUrl: '/_api/table/inline/sys/lov/lov_define',
      lovQueryUrl: '/_api/table/inline/common/lov/dataset/LOV_CODE',

      transformRequest() {
        // 在发送请求之前对数据进行处理
        return {
          v: 2,
        };
      },
    },
    {
      name: 'code_code',
      type: FieldType.string,
      label: '代码描述',
      dynamicProps: codeCodeDynamicProps,
    },
  ],
  events: {
    query: ({ params, data }) => console.log('custom bar query parameter', params, data),
  },
});

export default tableInlineDs;
