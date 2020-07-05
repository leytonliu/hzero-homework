const Mock = require('mockjs');

// eslint-disable-next-line prefer-const
const users = [
  {
    name: '刘立东',
    sex: '男',
    age: '24',
    email: 'lidong.liu@hand-china.com',
    birth: '1996-11-07',
    techStack: ['H5', 'React', 'Vue'],
  },
  {
    name: '廖莉娜',
    sex: '女',
    age: '23',
    email: 'lina.liao@hand-china.com',
    birth: '1997-06-05',
    techStack: ['H5', 'React'],
  },
];

const userQueryData = {
  content: users,
  total: 1000,
  success: true,
};

const userAddData = {
  content: [],
  total: 1000,
  success: true,
};

const userQueryResponse = Mock.mock(userQueryData);
const userAddResponse = Mock.mock(userAddData);

export default {
  'POST /_api/query-intro-info': (req, res) => {
    res.json(userQueryResponse);
  },
  'POST /_api/add-user': (req, res) => {
    users.push(req.body[0]);
    res.json(userAddResponse);
  },
};
