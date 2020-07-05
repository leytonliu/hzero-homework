// eslint-disable-next-line import/no-extraneous-dependencies
export default {
  'POST  /_api/advanced-form/submit': (_, res) => {
    res.send({
      message: 'Ok',
    });
  },
  'GET /_api/advanced-form/list': [
    {
      key: '1',
      workId: '00001',
      name: 'John Brown',
      department: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      workId: '00002',
      name: 'Jim Green',
      department: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      workId: '00003',
      name: 'Joe Black',
      department: 'Sidney No. 1 Lake Park',
    },
  ],
};
