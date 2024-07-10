import React from 'react'
import './Orders.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);
  const fetchAllorders = async ()=>{
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data)
    }else{
      toast.error("Error")
    }
  }

  useEffect(()=>{ 
    fetchAllorders();
  },[])

  return (
    
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, itemIndex) => (
                  item.name + " X " + item.quantity + (itemIndex === order.items.length - 1 ? "" : ", ")
                ))}
              </p>
              <p>Amount: {order.amount}</p>
              <p>Address: {order.address.street}, {order.address.city}</p>
              <p>Name: {order.address.firstName} {order.address.lastName}</p>
              <p>Contact: {order.address.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders