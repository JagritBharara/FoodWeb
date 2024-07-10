import express from "express";
import { addFood , listFood, removeFood} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }   
})

const upload =multer({storage:storage}) //This upload the image in upload folder middle ware multer



foodRouter.post("/add",upload.single("image"),addFood); //multer middle ware added 
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);


export default foodRouter;
