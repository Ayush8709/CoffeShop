import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-dark ">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src='https://w7.pngwing.com/pngs/734/482/png-transparent-white-coffee-cafe-coffee-cup-coffee-simple-logo-decorative.png' alt="" className=" nav_img img img-fluid " /> <span className='nav_title'>Coffe House</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/menu">Menu</Link>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
