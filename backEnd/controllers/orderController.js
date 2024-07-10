import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import stripe from 'stripe'


// Placing User ordre from frontEnd
const placeOrder =async (req,res)=>{

    const frontend_url = "http://localhost:5173"

    try{
        const newOrder = new orderModel({
            userId : req.body.userId,
            items: req.body.items,
            amount : req.body.amount,
            address : req.body.address

        })
        // console.log(newOrder);
        await newOrder.save();
        // await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Payment can be done through stripe 
        // Do Google it

        // const line_items = req.body.items.map((item)=>({
        //     price_data : {
        //         currency : "inr",
        //         product_data :{
        //             name : item.name
        //         },
        //         unit_amount : item*price*100
        //     },
        //     quantity : item.quantity
        // }))

        // line_items.push({
        //     price_data : {
        //         currency : "inr",
        //         product_data : {
        //             name : "Delivery Charges"
        //         },
        //         unit_amount : 2*100
        //     },
        //     quantity:1
        // })
        res.json({success:true,surl:frontend_url});
    }
    catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"})
    }
}

const verifyOrder = async (req,res)=>{
    const {orderId,success} = req.body;
    try{
        if(success==="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,msg:"PAID"})
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,msg:"Not paid"});
        }
    }catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"})
    }
}
// User order for frontEnd
const userOrders = async (req,res)=>{
    try{
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders});
    }catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"})
    }
}

const listOrders = async (req,res)=>{
    try{
        const orders = await orderModel.find({});
        res.json({success:true,data:orders});
    }
    catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"})
    }
}

export {placeOrder,verifyOrder,userOrders,listOrders}