import React from 'react'

const Footer = () => {
    const style ={
        background:"black",
        fontWeigh:"bold"
    }
  return (
    <>
    <div className="container-fluid text-center text-white border-top mt-5 py-4 px-sm-3 px-md-5" style={style} >
            <p className="mb-2 text-white">Copyright &copy;. All Rights Reserved.</p>
            <p className="m-0 text-white">Designed by Ayush</p>
        </div>
    </>
  )
}

export default Footer

