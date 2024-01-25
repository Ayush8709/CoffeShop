import React, { useState } from 'react'
import './payment.css'
import img from '../../public/paymentimg/card_img.png'
import axios from 'axios';

const payment = () => {

  const [paymentdetail , setPaymentdetail] = useState({
    name:'',
    email:'',
    addresh:'',
    city:'',
    state:'',
    zipcode:''
  })

  const changepaymentDetail = (e) =>{
    setPaymentdetail({
      ...paymentdetail,
      [e.target.name]:e.target.value,
  })
  }

  //paymet send logic

  const [paydetail, setPaydetail] = useState({
    cardholder :'',
    cardnumber:'',
    expmonth:'',
    expyear:'',
    cvv:'',
  })

  const payVallu = (e) =>{
    setPaydetail({
      ...paydetail,
      [e.target.name]:e.target.value,
    })
  }
  
  //send payment and payment detail;

  const payNow = async(e) =>{
    e.preventDefault(); 

    try {
      await axios.post('http://localhost:5000/paydetail',paymentdetail)
      await axios.post('http://localhost:5000/payment',paydetail)
      alert('Paymetn Succesfll')
      
    } catch (error) {
      alert('Server is bussy ')
    }
  }

  return (
   <>
   
<div class="container container_payment">

<form action="" onSubmit={payNow} className='form_payment'>

    <div class="row payment_row">

        <div class="col paymentt_col">

            <h3 class="title payment_title">billing address</h3>

            <div class="inputBox payment_inputbox">
                <span>full name :</span>
                <input type="text" name='name' value={paymentdetail.name} onChange={changepaymentDetail} required placeholder="full name"/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" name='email' value={paymentdetail.email} onChange={changepaymentDetail} required placeholder="example@example.com"/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" name='addresh' value={paymentdetail.addresh} onChange={changepaymentDetail} required placeholder="room - street - locality"/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" name='city' value={paymentdetail.city} onChange={changepaymentDetail} required placeholder="mumbai"/>
            </div>

            <div class="flex payment_flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" name='state' value={paymentdetail.state} onChange={changepaymentDetail} required placeholder="india"/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" name='zipcode' value={paymentdetail.zipcode} onChange={changepaymentDetail} required placeholder="123 456"/>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src={img} alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" name='cardholder' value={paydetail.cardholder} onChange={payVallu} required placeholder="mr. abc "/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" name='cardnumber' value={paydetail.cardnumber} onChange={payVallu} required placeholder="1111-2222-3333-4444"/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="number" name='expmonth' value={paydetail.expmonth} onChange={payVallu} required placeholder="january"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" name='expyear' value={paydetail.expyear} onChange={payVallu} required placeholder="2022"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="number" name='cvv' value={paydetail.cvv} onChange={payVallu} required placeholder="1234"/>
                </div>
            </div>

        </div>

    </div>

    {/* <input type="submit" value="proceed to checkout" class="submit-btn payment_submit-btn"/> */}
    <button type="submit"  class="submit-btn payment_submit-btn>">proceed to checkout  </button>

</form>

</div>    

   
   </>
  )
}

export default payment
