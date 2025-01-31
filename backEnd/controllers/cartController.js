import userModel from "../models/userModel.js"


// Add items to user cart
const addToCart = async (req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }else{
            cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,msg:"Added to cart"});   
    }catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"});
    }
    
}


// Remove item from user cart
const removeFromCart = async(req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,msg:"Removed From cart "});
    }catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"});
    }
}


// Fetch User Cart Data
const getCart = async (req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        
        res.json({success:true,cartData});
    }catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"});
    }
}

export {addToCart,removeFromCart,getCart}