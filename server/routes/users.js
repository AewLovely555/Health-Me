const express = require('express')
const router = express.Router()

//controllers
const { listUsers,readUsers,updateUsers,removeUsers,changeStatus,changeRole } = require('../controllers/users')

// middleware
const { auth,adminCheck } = require('../middleware/auth');

//Enpoint http://localhost:5000/api/users
//Method  GET
//@Access Private
router.get('/users',auth, adminCheck, listUsers);

//Enpoint http://localhost:5000/api/users/:id
//Method  GET
//@Access Private
router.get('/users/:id', readUsers);

//Enpoint http://localhost:5000/api/users/:id
//Method  put
//@Access Private
router.put('/users/:id', updateUsers);

//Enpoint http://localhost:5000/api/users/:id
//Method  DELETE
//@Access Private
router.delete('/users/:id', removeUsers);

//Enpoint http://localhost:5000/api/change-status
//Method  POST
//@Access Private
router.post('/change-status',auth,adminCheck, changeStatus);

//Enpoint http://localhost:5000/api/change-role
//Method  POST
//@Access Private
router.post('/change-role',auth,adminCheck, changeRole);

module.exports = router