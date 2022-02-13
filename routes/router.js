const { Router } = require('express');

const router = Router();

router.get('/', (_, res) => {
  res.send('API is running......');
});

module.exports = router;
