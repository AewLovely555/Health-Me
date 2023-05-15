const express = require('express')
const router = express.Router()

//controllers
const {register,login,listUser,editUser,deleteUser,currentUser} = require('../controllers/auth');

// middleware
const { auth,adminCheck } = require('../middleware/auth');


//Enpoint http://localhost:3000/api/register
//Method  POST
//@Access Publish
router.post('/register',register);

//Enpoint http://localhost:3000/api/login
//Method  POST
//@Access Publish
router.post('/login',login);

//Enpoint http://localhost:3000/api/current-user
//Method  POST
//@Access Private
router.post('/current-user', auth, currentUser);

//Enpoint http://localhost:3000/api/current-admin
//Method  POST
//@Access Private
router.post('/current-admin', auth,adminCheck, currentUser);

//Enpoint http://localhost:3000/api/auth
//Method  GET
//@Access Publish
router.get('/auth',listUser);

//Enpoint http://localhost:3000/api/auth
//Method  PUT
//@Access Publish
router.put('/auth',editUser);

//Enpoint http://localhost:3000/api/auth
//Method  DELETE
//@Access Publish
router.delete('/auth',deleteUser);


module.exports = router