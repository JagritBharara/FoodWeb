import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import validator from 'validator';
import { response } from "express";

// Login User
const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});
        // console.log(password);
        if(!user){
            return res.json({success:false,msg:"User Does not exist"})
        }
        // console.log(user);
        const isMatch = await bcrypt.compare(password,user.password);
        // console.log(isMatch);

        if(!isMatch){
            return res.json({success:false,msg:"Invalid Password"})
        }

        const token = createToken(user._id);
        res.json({success:true,token});
    }
    catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"});
    }
}

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

// Sign UP

const registerUser = async (req,res)=>{
    const {name,password,email} = req.body;
    try{
        // IF already exists
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success:false,msg:"User already Exist"})
        }

        // Validate email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,msg:"Please Enter valid Email"})
        }

        if(password.length<8){
            return res.json({success:false,msg:"Please enter strong password"})
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        
        const newUser = new userModel({
            name : name,
            email : email,
            password : hashPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token});
    }
    catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"})
    }
}

export {loginUser,registerUser} 