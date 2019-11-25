const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// router.get('/', userController.userList);
router.post('/login', userController.userToken);
router.post('/register', userController.userRegister);


module.exports = router;
