import React, { useState } from 'react'
import '../tabel/Tabel.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Table = () => {
    const [detail, setDetail]= useState({
        name:"",
        email:"",
        phone:"",
        addresh:'',
        total:','

    })

    const changeVallu = (e)=>{
        setDetail({
            ...detail,
            [e.target.name]:e.target.value,
        })
    }

    const submitNow =async(e) =>{
        e.preventDefault();

        try {
            await axios.post(`http://localhost:5000/api/v1/post/`,detail)
                alert(`Data Send Sussfully`)
        } catch (error) {
            alert("Please Fill Valid Vallu");
        }
    }
  return (
    <>
    <div className="container-fluid mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='table-heading'>
                            30% OFF
                        </h1>
                        <h2 className="table_offer">
                            For Online Reservation
                        </h2>
                        <p className="table_dec">
                        Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-center table_heading">BOOK YOUR TABLE NOW</h1>
                        <form className='table_book' onSubmit={submitNow} style={{width:'100%'}}>
                        <input className='table_input' type="text" name='name' value={detail.name} onChange={changeVallu} placeholder='Enter Full Name' required/>
                        <input className='table_input' type="email" name='email' value={detail.email} onChange={changeVallu} placeholder='Enter Your email' required/>
                        <input className='table_input' type="number" name='phone' value={detail.phone} onChange={changeVallu} placeholder='Enter Your PhoneNumber' required/>
                        <input className='table_input' type="text" name='addresh' value={detail.addresh} onChange={changeVallu} placeholder='Enter Your Addresh' required/>
                        <input className='table_input' type="number" name='total' value={detail.total} onChange={changeVallu} placeholder='Enter Total Tabel'/>
                        <button type='submit'className='btn btn-md btn-danger btn '>Submit Now</button>
                        
                        <button type='submit'className='btn btn-md btn-primary btn' style={{marginLeft:"15px"}}>
                            <Link to='/payment' className='text-light' style={{textDecoration:"none"}}> Pay Now</Link>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Table
