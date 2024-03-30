
const { BadRequestError } = require('../errors');
const Product=require('../models/product');


const AddProduct=async (req,res)=>{
  if    (!req.body)  throw new BadRequestError('please provide the product info')
  const product=await Product.create({...req.body})
  res.status(201).json({data:product,message:'product added successfully'})
}

const getProductsById=async (req,res)=>{
    const {id}=req.params
    const product=await Product.findById(id)
    res.status(200).json({data:product})
}

const updateProduct=async (req, res) => {
  const {id}=req.params
  const product=await Product.findByIdAndUpdate(id,{...req.body},{new:true,
  runValidators:true})
  res.status(200).json({data:product,message:'updated successfully'})
}

const deleteProduct=async (req, res) => {
  const {id}=req.params
  const product=await Product.findByIdAndDelete(id)
  res.status(200).json({message:'deleted successfully'})
}


//GET ALL  PRODUCTS
const getAllProducts= async (req, res) => {
  const qNew=req.query.new
  const qCatagories=req.query.catagories
  let products;
  if(qNew){
    products=await Product.find().sort({createdAt:-1}).limit(5)
  }
else if(qCatagories){
    products=await Product.find({
        catagories:{
            $in:[qCatagories]
        }
    }).sort({createdAt:-1}).limit(5)
}
else {
    products=await Product.find()
}


  //const products= query ? await Product.find().sort({_id:-1}).limit(5):await Product.find({})
  res.status(200).json(products);
}

// 
module.exports={
    AddProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProductsById,
   
}