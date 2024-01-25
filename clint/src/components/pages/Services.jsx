import React from 'react'
import './Services.css'
import img from '../../../public/images/service-1.jpg'
import img2 from '../../../public/images/service-2.jpg'
import img3 from '../../../public/images/service-3.jpg'
import img4 from '../../../public/images/service-4.jpg'

const Services = () => {
  return (
    <>
    <div className="container mt-5">
            <div className="row">
                <div className="col-sm">
                    <h4 className='text-center services'>OUR SERVICES</h4>
                        <h1 className='text-center display-4 services_heading'>Fresh & Organic Beans</h1>
                </div>
            </div>

            <div className="row mt-5">
            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0" src={img} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><i className="fa fa-truck service-icon "></i><span>
                            Fastest Door Delivery </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>

            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0" src={img2} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><i className="fa fa fa-coffee service-icon "></i><span>
                            Fresh Coffee Beans </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="row mt-5">
            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0" src={img3} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><i className="fa fa-award service-icon "></i><span>
                            Best Quality Coffee </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>

            <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0" src={img4} alt=""/>
                        </div>
                        <div className="col-sm-7" style={{marginBottom:"12%"}}>
                            <h4 className=''><i className="fa fa-table service-icon "></i><span>
                            Online Table Booking </span> </h4>
                            <p className="service_para">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>
            </div>


    </div>
    </>
  )
}

export default Services
