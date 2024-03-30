const { UnAuthorizedError, BadRequestError } = require("../errors")
const jwt=require('jsonwebtoken')
const verifyToken=async (req,res,next)=>{
const {authorization}=req.headers
if(!authorization || !authorization.startsWith("Bearer ")){
    
    throw new BadRequestError('invalid header')
}
const token=authorization.split(' ')[1]
const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
req.user=decoded
console.log('req.user',decoded);
next()
}

const verifyTokenAndAuthorize=async (req,res,next)=>{
    verifyToken(req,res,()=>{
        const {id,isAdmin}=req.user 
        if(id===req.params?.id || isAdmin){
          next()
        }
        else{
            throw new UnAuthorizedError('access denied');
        }
    })}

    const verifyTokenAndIsAdmin=async (req,res,next)=>{
        verifyToken(req,res,()=>{
          try {
            const {isAdmin}=req.user 
            if(!isAdmin){
               throw new UnAuthorizedError('access denied');
            }
            next()
          } catch (error) {
           res.status(403).json({message:'un authorized user'})
          }
        })}
    
module.exports={verifyToken,verifyTokenAndAuthorize,verifyTokenAndIsAdmin}