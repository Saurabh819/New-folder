const express = require('express');
const studentController = require('../controller/studentController')

const router = express.Router();

router.post('/register',studentController.Register)
router.post('/login',studentController.Login)

module.exports = router ;