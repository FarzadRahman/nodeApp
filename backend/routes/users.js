var express = require('express');
var router = express.Router();
const jwt=require('jsonwebtoken');
const User=require('../models/user');
const config=require('../config');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next){
  // console.log(req.body);
  // res.json(req.body);
  User.findOne({email:req.body.email},function(err,user){
    // if(err) throw err;

    if(!user){
      res.json({
        success:false,
        message:'user not found'
      });
    }

    else{
        var confirmPass=user.comparePassword(req.body.password);

        if(!confirmPass){
          res.json({
            success:false,
            message:'password not match'
          });
        }

        else{
          var token=jwt.sign({
            user:user
          },config.secret,{
            expiresIn:'7d'
          });
    
          res.json({
            success:true,
            message:'Log in Success',
            token:token
          });

        }


    }



  });
});

router.post('/signup',function(req,res,next){
  
  let user=new User();
  user.name=req.body.name;
  user.email=req.body.email;
  user.password=req.body.password;
  user.picture=user.gravater();
  user.isSeller=req.body.isSeller;

  User.findOne({email:req.body.email},function(err,exsitingUser){
    if(exsitingUser){
      res.json({
        success:false,
        message:'email is already exist'
      });
    }

    else{
      user.save();

      var token=jwt.sign({
        user:user
      },config.secret,{
        expiresIn:'7d'
      });

      res.json({
        success:true,
        message:'Log in Success',
        token:token
      });
    }

  });
  
});

module.exports = router;
