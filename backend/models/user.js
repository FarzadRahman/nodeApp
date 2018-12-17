const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt-nodejs');

const UserSchema=new Schema({
  email:{type:String,unique:true,lowercase:true},
  name:String,
  password:String,
  picture:String,
  isSeller:{type:boolean,default:false},
  address:{
      addr1:String,
      addr2:String,
      city:String,
      country:String,

  },
  created:{type:Date,default:Date.now}

});

// Hashing password before save

UserSchema.pre('save',function(next){
    var user=this;
    if(!user.isModified('password')){
        return next();
    }
    else{
        bcrypt.hash(user.password,null,null,function(err,hash){
            if(err){
                return next(err);
            }
            user.password=hash;
            next();
        })
    }
});

UserSchema.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.password);
};