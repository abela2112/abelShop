const {Schema,model}=require('mongoose')

const productSchema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    }
    ,
    desc:{
        type:String,
    },
    image:{
        type:String,
        
       
    }
    ,catagories:{
        type:Array,
        
    },
   size:{
        type:Array,
   
    },
    color:{
        type:Array,
   
    },
    price:{
        type:Number,
        
    },
    inStock:{
        type:Boolean,
        default:true,
       
    }
},{timestamps:true})


module.exports =model('product',productSchema)