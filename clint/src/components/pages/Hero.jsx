import React from 'react'
import './Hero.css'
import img from '../../../public/images/about.png'
const Hero = () => {
    return (
        <>
            <div className="container-fluid first ">
                <div className="row center">
                    <div className="col-sm">
                        <p className='heading p'>We Have Been  Serving</p>
                        <h1 className='heading head'>Coffee</h1>
                        <p className='heading p1'>*Since 1950*</p>
                    </div>
                </div>

            </div>

            <div className="contaienr-fluid mt-5">
                <div className="row">
                    <div className="col-sm text-center">
                        <p>About Us</p>
                        <h1>Serving Since 1950</h1>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                            <h1 className='story'>OUR Story</h1>
                            <h5 className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, excepturi laboriosam modi maiores quibusdam blanditiis quia quaerat. </h5>
                            <p className='paraa'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam repudiandae cupiditate. Eligendi rerum tempore quisquam voluptate maxime culpa laborum delectus, perspiciatis corrupti labore amet.</p>
                            <button className='btn btn-md btn-dark'>Learn More</button>
                    </div>
                    
                    <div className="col-sm-4">
            <img src={img} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-sm-4">
                    <h1 className='story'>OUr Vison</h1>
                            <h5 className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, excepturi laboriosam modi maiores quibusdam blanditiis quia quaerat. </h5>
                            <p className='paraa'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam repudiandae cupiditate. Eligendi rerum tempore quisquam voluptate maxime culpa laborum delectus, perspiciatis corrupti labore amet.</p>
                            <button className='btn btn-md btn-dark'>Learn More</button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Hero
