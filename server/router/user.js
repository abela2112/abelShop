const { login, register ,updateUser, deleteUser, getAllUsers, getUsersById, getUserStats} = require('../controller/user')
const {verifyTokenAndAuthorize, verifyTokenAndIsAdmin} = require('../middleware/verifyToken')

const router=require('express').Router()
router.get('/',verifyTokenAndIsAdmin,getAllUsers)
router.get('/stat',verifyTokenAndIsAdmin,getUserStats)
router.get('/:id',verifyTokenAndIsAdmin,getUsersById)
router.post('/login',login)
router.post('/register',register)
router.put('/update/:id',verifyTokenAndAuthorize,updateUser)
router.delete('/:id',verifyTokenAndIsAdmin,deleteUser)


module.exports = router