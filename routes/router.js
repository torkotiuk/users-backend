const { Router } = require('express');
const { users } = require('../controllers');
const { groups } = require('../controllers');
const router = Router();

router.get('/', (_, res) => {
  res.json({
    allUsers: 'https://contacts-1234.herokuapp.com/api/users',
    userAdd: 'https://contacts-1234.herokuapp.com/api/user',
    userGet: 'https://contacts-1234.herokuapp.com/api/user/USER_ID',
    userPut: 'https://contacts-1234.herokuapp.com/api/user/USER_ID',
    userDelete: 'https://contacts-1234.herokuapp.com/api/user/USER_ID',
    freeLine: '',
    allGroups: 'https://contacts-1234.herokuapp.com/api/groups',
    groupAdd: 'https://contacts-1234.herokuapp.com/api/group',
    groupGet: 'https://contacts-1234.herokuapp.com/api/group/USER_ID',
    groupPut: 'https://contacts-1234.herokuapp.com/api/group/USER_ID',
    groupDelete: 'https://contacts-1234.herokuapp.com/api/group/USER_ID',
  });
});

router.get('/api/users', users.getAll);
router.post('/api/user', users.add);
router.get('/api/user/:userId', users.getById);
router.put('/api/user/:userId', users.update);
router.delete('/api/user/:userId', users.del);

router.get('/api/groups', groups.getAll);
router.post('/api/group', groups.add);
router.get('/api/group/:groupId', groups.getById);
router.put('/api/group/:groupId', groups.update);
router.delete('/api/group/:groupId', groups.del);

module.exports = router;
