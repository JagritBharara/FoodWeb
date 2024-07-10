import React from 'react'
import './Verify.css'
import { useSearchParams } from 'react-router-dom'
const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    // console.log(success);
    // console.log(orderId);

  return (
    <div>
        Order Place
    </div>
  )
}

export default Verify