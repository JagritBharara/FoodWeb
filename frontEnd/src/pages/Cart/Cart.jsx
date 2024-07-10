import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalAmount,url} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,idx)=>{
          if(cartItems[item._id]>0){
            return (
            <div><div className='cart-items-title cart-items-item'>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                
            </div>
            <hr />
            </div>
            )
            
          }
          
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
                <p>Subtotal</p>
                <p>{getTotalAmount()}</p>
            </div>
            <div className='cart-total-details'>
              <p>Delievery Fee</p>
              <p>{getTotalAmount()===0?0:2}</p>
            </div>
            <div className='cart-total-details'>
              <p>Total</p>
              <p>{getTotalAmount()+getTotalAmount()===0?0:2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
          <div className="cart-promocode">
              <div>
                <p>If you have a promocode, Enter it</p>
                <div className='cart-promocode-input'>
                  <input type="text" placeholder='promocode' />
                  <button>Submit</button>
                </div>
              </div>
          </div>
      </div>

    </div>
  )
}

export default Cart