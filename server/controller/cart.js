
const { BadRequestError } = require('../errors');
const Cart=require('../models/carts');


const AddCart=async (req,res)=>{
  if    (!req.body)
    throw new BadRequestError('please provide the product info')
  const cart=await Product.create({...req.body})
  res.status(201).json({data:cart,message:'product added successfully'})
}

const getUserCart=async (req,res)=>{
    const {userId}=req.params
    const cart=await Cart.findOne({userId})
    res.status(200).json({data:cart})
}

const updateCart=async (req, res) => {
  const {id}=req.params
  const cart=await Cart.findByIdAndUpdate(id,{...req.body},{new:true,
  runValidators:true})
  res.status(200).json({data:cart,message:'updated successfully'})
}

const deleteCart=async (req, res) => {
  const {id}=req.params
  const cart=await Cart.findByIdAndDelete(id)
  res.status(200).json({message:'deleted successfully'})
}


//GET ALL  carts
const getAllCarts= async (req, res) => {
  const carts=await Cart.find()
  res.status(200).json({data:carts})
}



// 
module.exports={
    AddCart,
    updateCart,
    deleteCart,
    getAllCarts,
    getUserCart,
   
}