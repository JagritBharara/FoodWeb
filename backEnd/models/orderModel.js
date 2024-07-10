// import mongoose from 'mongoose'

// const orderSchema = new mongoose.Schema({
//     userId : {type: String , required: true},
//     items: {type: Array,required:true},
//     amount : {type : Number,required: true},
//     address : {type: String,required: true},
//     status : {type: String,default: "Food Processing"},
//     date : {type: Date,default: Date.now()},
//     payment : {type : Boolean,default:false}
// })

// const orderModel = mongoose.models.order || mongoose.model("order",orderSchema);

// export default orderModel;


import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    date : {type: Date,default: Date.now()},
    phone: { type: String, required: true }
});

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ],
    amount: { type: Number, required: true },
    address: { type: addressSchema, required: true }
});

const orderModel = mongoose.model('Order', orderSchema);

export default orderModel;
