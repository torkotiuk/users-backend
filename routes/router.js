const { Router } = require('express');
const { users } = require('../controllers');
const router = Router();

router.post('/api/user', users.add);

router.get('/api/users', users.getAll);
router.get('/api/user/:userId', users.getById);

router.put('/api/user/:userId', users.update);

router.delete('/api/user/:userId', users.del);

module.exports = router;
