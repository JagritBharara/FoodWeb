import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/ordreRoute.js";

const app = express();

const PORT = 4444;


// app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.send("Shree Ganeshae Namah   Jai Shri SitaRam")
})

// Connect DB
connectDB();

// api Endpoints

app.use('/api/food',foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.listen(PORT,()=>{
 console.log('localhost/'+PORT);
})

// mongodb+srv://jagritbharara12:9667819733@cluster0.5xzl1u6.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0