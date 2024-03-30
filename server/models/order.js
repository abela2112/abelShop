const {Schema,model}=require('mongoose')

const orderSchema=new Schema({
    userId:{
        type:String,
    }
    ,
    products:[
        {
            productId:{
                type:String,
            },
            quantiy:{
                type:Number,
                default:1,
            }
        }
    ],
    amount:{type:Number,required:true},

    address:{type:Object,required:true},
    status:{type:String,default:'pending'},

},{timestamps:true})


module.exports =model('Order',orderSchema)