const Mock = require('mockjs');

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

const addUser = (req, res) => {
  const index = users.findIndex((user) => user.name === req.body[0].name);
  if (index === -1) {
    users.push(req.body[0]);
  } else {
    users[index].sex = req.body[0].sex;
    users[index].age = req.body[0].age;
    users[index].email = req.body[0].email;
    users[index].birth = req.body[0].birth;
    users[index].techStack = req.body[0].techStack;
  }
  res.json({
    content: users,
    total: 1000,
    success: true,
  });
};

const queryUser = (req, res) => {
  const userRes = users;
  res.json(
    Mock.mock({
      content: userRes,
      total: 1000,
      success: true,
    })
  );
};
const deleteUser = (req, res) => {
  const index = users.findIndex((user) => user.name === req.body[0].name);
  users.splice(index);
  res.json(
    Mock.mock({
      content: users,
      total: 1000,
      success: true,
    })
  );
};
export default {
  'POST /_api/query-intro-info': queryUser,
  'POST /_api/add-user': addUser,
  'POST /_api/delete-user': deleteUser,
};
