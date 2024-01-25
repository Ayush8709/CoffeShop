import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'
import img from '../../../public/images/menu-1.jpg'
import img2 from '../../../public/images/menu-2.jpg'
import img3 from '../../../public/images/menu-3.jpg'
import img4 from '../../../public/images/menu-3.jpg'

const Menu = () => {
  return (
   <>
   <div className="container mt-5">
    <div className="row ">
        <div className="col-md mt-5">
            <h4 className='text-center'>MENU
            <span> & </span>PRINCPLE</h4>
            <h1 className="text-center menu_heading">
            Competitive Pricing
            </h1>
        </div>
    </div>
    <hr className='menu_hr'/>


    <div className="row mt-5">
            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0 menu_img" src={img} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><span>
                            Black Cofee </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>

                            <button className=" btn btn-md btn-outline-danger">PRICE :- 150⟨₹⟩ 
                            </button>
                        </div>
                    </div>
                </div>

            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0 menu_img" src={img} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><span>
                            Chocolete Coffee </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            <button className=" btn btn-md btn-outline-danger">PRICE :- 150⟨₹⟩ 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="row mt-5">
            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0 menu_img" src={img2} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><span>
                            Black Coffee </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            <button className=" btn btn-md btn-outline-danger">PRICE :- 150⟨₹⟩ 
                            </button>
                        </div>
                    </div>
                </div>

            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0 menu_img" src={img2} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><span>
                            Black Coffee </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            <button className=" btn btn-md btn-outline-danger">PRICE :- 150⟨₹⟩ 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0 menu_img" src={img3} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><span>
                            Coffee With Milk </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            <button className=" btn btn-md btn-outline-danger">PRICE :- 150⟨₹⟩ 
                            </button>
                        </div>
                    </div>
                </div>

            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0 menu_img" src={img4} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><span>
                            Coffee With Milk </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            <button className=" btn btn-md btn-outline-danger">PRICE :- 150⟨₹⟩ 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button className='btn btn-lg btn-outline-primary menu_btn'> <Link to='/menu' className='menu_link_btn'>Show Menu</Link> </button>

   </div>
   <hr />
   </>
  )
}

export default Menu
