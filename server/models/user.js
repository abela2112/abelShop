const {Schema,model}=require('mongoose')
const bcryptjs=require('bcryptjs')
const Jwt=require('jsonwebtoken')
const userSchema=new Schema({
    first_name:{
        type:String,
        required:true,
    }
    ,
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    }
    ,password:{
        type:String,
        required:true,
    },
    user_name:{
        type:String,
        required:true,
        unique:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

userSchema.pre("save", async function (next) {
    const salt = await bcryptjs.genSalt(10);
  
    this.password = await bcryptjs.hash(this.password, salt);
    if (!this.isModified("password")) return next();
  });
  userSchema.methods.comparePassword = function (password) {
     return bcryptjs.compare(password,this.password)
  }
  userSchema.methods.generateAuthToken = function () {
    const token = Jwt.sign(
      {
        id: this._id,
        name: this.user_name,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );
    return token;
  };


module.exports =model('user',userSchema)