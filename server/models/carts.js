const {Schema,model}=require('mongoose')

const cartSchema=new Schema({
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
    ]
},{timestamps:true})


module.exports =model('Cart',cartSchema)