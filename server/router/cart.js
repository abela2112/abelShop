const {
    AddCart,
    updateCart,
    deleteCart,
    getAllCarts,
    getUserCart,
   
} =require('../controller/cart')
const { verifyTokenAndIsAdmin, verifyTokenAndAuthorize, verifyToken } = require('../middleware/verifyToken')

const router=require('express').Router()
 router.get('/',verifyTokenAndIsAdmin,getAllCarts)

 router.get('/:userId',verifyTokenAndAuthorize,getUserCart)
 router.post('/',verifyToken,AddCart)

router.put('/update/:id',verifyTokenAndAuthorize,updateCart)
 router.delete('/:id',verifyTokenAndAuthorize,deleteCart)


module.exports = router