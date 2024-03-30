const { PRECONDITION_FAILED } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const Order=require('../models/order');
const AddOrder=async (req,res)=>{
  if    (!req.body)
    throw new BadRequestError('please provide the product info')
  const order=await Order.create({...req.body})
  res.status(201).json({data:order,message:'product added successfully'})
}

const getUserOrder=async (req,res)=>{
    const {userId}=req.params
    const order=await Order.find({userId})
    res.status(200).json({data:order})
}

const updateOrder=async (req, res) => {
  const {id}=req.params
  const order=await order.findByIdAndUpdate(id,{...req.body},{new:true,
  runValidators:true})
  res.status(200).json({data:order,message:'updated successfully'})
}

const deleteOrder=async (req, res) => {
  const {id}=req.params
  const order=await Order.findByIdAndDelete(id)
  res.status(200).json({message:'deleted successfully'})
}


//GET ALL orders
const getAllOrders= async (req, res) => {
  const order=await order.find()
  res.status(200).json({data:order})
}

//get incomes
const getMonthlyIncome=async (req, res) => {
    const date=new Date();
    const lastMonth=new Date(date.setMonth(date.getMonth()-1))
    const previousMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1))
    
  const income=await Order.aggregate([
    {$match:{createdAt:{$gte:previousMonth}}},
    {$project:{
      month:{
        $month:"$createdAt"},
        sales:"$amount"
       
    }},
    {$group:{
      _id:"$month",
      total:{$sum:"$sales"}
    }}
  ])
  
  res.status(200).json(income)
  }


// 
module.exports={
    AddOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getUserOrder,
    getMonthlyIncome,
   
}