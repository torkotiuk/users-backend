const customDocumentation = (req, res) => {
  res.json({
    freeLine: '======================================================',
    freeLine1: '===================== USERS ==========================',
    freeLine2: '======================================================',
    allUsers: 'https://contacts-1234.herokuapp.com/api/users',
    userAdd: {
      URL: 'https://contacts-1234.herokuapp.com/api/user',
      schemaForAddingUser: {
        name: '',
        groupId: '',
      },
    },
    userGet: 'https://contacts-1234.herokuapp.com/api/user/USER_ID',
    userPut: 'https://contacts-1234.herokuapp.com/api/user/USER_ID',
    userDelete: 'https://contacts-1234.herokuapp.com/api/user/USER_ID',
    freeLine3: '======================================================',
    freeLine4: '-',
    freeLin5: '-',
    freeLin6: '-',
    freeLin7: '-',
    freeLin8: '======================================================',
    freeLin9: '===================== GROUPS ==========================',
    freeLine10: '======================================================',
    allGroups: 'https://contacts-1234.herokuapp.com/api/groups',
    groupAdd: {
      URL: 'https://contacts-1234.herokuapp.com/api/group',
      schemaForAddingGroup: {
        name: '',
      },
    },
    groupGet: 'https://contacts-1234.herokuapp.com/api/group/USER_ID',
    groupPut: 'https://contacts-1234.herokuapp.com/api/group/USER_ID',
    groupDelete: 'https://contacts-1234.herokuapp.com/api/group/USER_ID',
  });
};

module.exports = customDocumentation;
