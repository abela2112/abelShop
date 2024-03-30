const { getAllProducts, getProductsById, AddProduct, updateProduct, deleteProduct } = require('../controller/product')
const { verifyTokenAndIsAdmin } = require('../middleware/verifyToken')

const router=require('express').Router()
 router.get('/',getAllProducts)

 router.get('/:id',getProductsById)
 router.post('/',verifyTokenAndIsAdmin,AddProduct)

router.put('/update/:id',verifyTokenAndIsAdmin,updateProduct)
 router.delete('/:id',verifyTokenAndIsAdmin,deleteProduct)


module.exports = router