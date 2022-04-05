
const controller = require('../controller/user.controller');
const express = require('express');
const router = express.Router();
console.log(" hyy friends ");
//create users api 
router.post("/" ,controller.create );
router.get("/:id", controller.getUserById);
router.get('/all/users', controller.getAllUsers) ; 
router.put('/:id' , controller.updateById);
 router.delete('/:id' , controller.delete) ;
module.exports = router;  
