import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async (req,res)=>{
    // console.log(req);
    let image_filename = `${req.file.filename}`;
    // console.log(image_filename);
    const food = new foodModel({
        name: req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename
    })
    try{    
        await food.save();
        res.json({success:true,msg:"Food Added"})
    }
    catch(err){
        console.log(err);
        res.json({success:false,msg:"Not Added"})
    }
}


// List food item

const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});
    }
    catch(err){
        console.log(err);
        res.json({success:false,msg:"error"})
    }
}

// Remove Food Item
const removeFood = async (req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id)
        // console.log(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{}) //remove image form upload folder
        
        await foodModel.findByIdAndDelete(req.body.id); //delete form database
        res.json({success:true,msg:"Food Removed"})
    }
    catch(err){
        console.log(err);
        res.json({success:false,msg:"Error"})
        
    }
}

export {addFood,listFood,removeFood}