import React, { useEffect, useState } from 'react'
import './Menu.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Menu = () => {
  const [product, setProduct] = useState([])

  const myApi = async () => {
    try {
      const myApi = await axios.get('http://localhost:5000/dataApi')
      setProduct(myApi.data)


    } catch (error) {
      console.log(error + "Not Fetch data from backend");
    }
  }
  useEffect(() => {
    myApi();
  })
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {
            product.map((values, index) => {
              return (
                  <>
                  
                <div className="col-lg-6 mb-5" key={index}>
                  
                  <div className="row align-items-center">
                    <div className="col-sm-5">

                      <img className="img-fluid mb-3 mb-sm-0 menu_img" src={values.image} alt="" />
                    </div>
                    <div className="col-sm-7" style={{ marginBottom: "12%" }}>
                      <h4 className='menu_title'><span>
                        {values.title} </span> </h4>

                      <Link to={`/menudetail/${values.id}`} className='menu_link'>
                        <p className="menu_para">{values.description}</p> </Link>
                      

                      <button className=" btn btn-md btn-outline-danger">PRICE :- {values.price}
                      </button>
                    </div>
                  </div>
                </div>
</>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default Menu
