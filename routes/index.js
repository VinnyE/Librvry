const express = require('express');
const router = express.Router();

router.get('/', () => console.log('Index route'));

module.exports = router;