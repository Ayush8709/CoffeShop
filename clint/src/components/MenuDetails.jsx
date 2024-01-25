import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './MenuDetails.css'
import {Link} from 'react-router-dom'


const MenuDetails = () => {
  const {id} = useParams()
    const [signle, setSingle] = useState({})

    const mySingleApi = async ()=>{
         await fetch(`http://localhost:5000/dataApi/${id}`).then((response)=>{return response.json()}).then((x)=>{
          setSingle(x)
         })
   }

   useEffect(()=>{
    mySingleApi()
   })
  return (
    <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-6 col-md-6">
              <img src={signle.image} alt="Coffe Image"  className='img img-fluid rounded single_image'/>
            </div>

            <div className="col-sm-6 col-md-6">
                    <h1 className="single_text">{signle.title}</h1>
                    <h2 className='single_dec text-center'>Decription:-</h2>
                    <p className='single_desc mt-2'>{signle.description}</p>
                    <h1 className="single_price ">Price :- {signle.price} ₹</h1>
                    <button className='btn btn-lg btn-primary'><Link to='/tabel' className='text-light' style={{textDecoration:"none"}}>Book Your Table</Link></button>
            </div>
          </div>
        </div>
    </>
  )
}

export default MenuDetails
