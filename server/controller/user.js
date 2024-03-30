const { request } = require('express');
const { BadRequestError } = require('../errors');
const User=require('../models/user');
const { genSalt, hash, genSaltSync, hashSync } = require('bcryptjs');

const register=async (req,res)=>{
  const {first_name,last_name,email,password,user_name}=req.body;
  if(!first_name|| !last_name|| !email|| !password|| !user_name)
  {
    throw new BadRequestError('please fill in the required fields')

  }

  const user=await User.create({first_name,last_name,email,password,user_name})
  res.status(201).json({data:user,message:'User created successfully'})
}

const login=async (req,res)=>{
const {email,password}=req.body
if(!email||!password){
    throw new BadRequestError('please provide a valid email and password')
}
const user=await User.findOne({email})
if(!user) throw new BadRequestError('User not found')

const isPasswordCorrect = user.comparePassword(user?.password)
if(!isPasswordCorrect) throw new BadRequestError('invalid password')
const token=user.generateAuthToken()
const {password:userPassword,...other}=user._doc
res.status(200).json({data:user,token:token,message:'user login successful'})
}

const updateUser=async (req, res) => {
  const {id}=req.params
  let newpassword;
 const {password,...other}=req.body
  if(password){
newpassword=hashSync(password,genSaltSync())
  }
 console.log(newpassword)
  const user=await User.findByIdAndUpdate(id,{...other,password:newpassword},{new:true,
  runValidators:true})
  res.status(200).json({data:user,message:'updated successfully'})
}

const deleteUser=async (req, res) => {
  const {id}=req.params
  const user=await User.findByIdAndDelete(id)
  res.status(200).json({message:'deleted successfully'})
}

const getUsersById = async (req, res) => {
  const {id}=req.params;
  const user=await User.findById(id)
  res.status(200).json(user);
}
//GET ALL USERS
const getAllUsers= async (req, res) => {
  const query=req.query.new
  const users= query ? await User.find().sort({_id:-1}).limit(5):await User.find({})
  res.status(200).json(users);
}

//GET USERS STATS
const getUserStats=async (req, res) => {
  const date=new Date();
  const lastYear=new Date(date.setFullYear(date.getFullYear()-1))
const data=await User.aggregate([
  {$match:{createdAt:{$gte:lastYear}}},
  {$project:{
    month:{
      $month:"$createdAt"}
  }},
  {$group:{
    _id:"$month",
    total:{$sum:1}
  }}
])

res.status(200).json(data)
}
module.exports={
    login,
    register,
    updateUser,
    deleteUser,
    getAllUsers,
    getUsersById,
    getUserStats
}