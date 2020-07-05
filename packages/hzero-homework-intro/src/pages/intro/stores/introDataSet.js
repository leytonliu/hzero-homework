import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';
import { DataSet } from 'choerodon-ui/pro';

const sexOptionDS = new DataSet({
  selection: 'single',
  data: [
    { value: 'male', meaning: '男' },
    { value: 'female', meaning: '女' },
  ],
});
const techStackOptionDS = new DataSet({
  selection: 'multiple',
  data: [
    { value: 'h5', meaning: 'H5' },
    { value: 'css', meaning: '层叠样式表' },
    { value: 'vue', meaning: 'Vue' },
    { value: 'react', meaning: 'React' },
  ],
});
const introDataSet = () => ({
  autoQuery: true,
  fields: [
    {
      name: 'name',
      label: '姓名',
      type: FieldType.string,
    },
    {
      name: 'sex',
      label: '性别',
      type: FieldType.string,
      options: sexOptionDS,
    },
    {
      name: 'age',
      label: '年龄',
      type: FieldType.string,
    },
    {
      name: 'email',
      type: FieldType.email,
      label: '邮箱',
    },
    {
      name: 'techStack',
      type: FieldType.string,
      label: '技术栈',
      multiple: true,
      options: techStackOptionDS,
    },
    {
      name: 'birth',
      type: FieldType.date,
      label: '生日',
    },
  ],
  transport: {
    read: {
      url: '/_api/query-intro-info',
      method: 'POST',
    },
    submit: ({ data }) => {
      return {
        url: '/_api/add-user',
        method: 'POST',
        params: data[0],
      };
    },
  },
});
export default introDataSet;
