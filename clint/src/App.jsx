import React from 'react'
import Navbar from './components/screen/Navbar'
import Main from './components/screen/Main'
import Footer from './components/screen/Footer'
import menu from './components/Menu'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import MenuDetails from './components/MenuDetails'
import Table from './tabel/Tabel'
import payment from './payment/payment'

const App = () => {
  return (
  <>
  <Router>
  <Navbar />
  <Routes>
    <Route path='/' Component={Main} />
  </Routes>
  <Routes>
   <Route path='/menu'Component={menu} />
  </Routes>

  <Routes>
   <Route path='/menudetail/:id'Component={MenuDetails} />
  </Routes>
 
  <Routes>
   <Route path='/tabel'Component={Table} />
  </Routes>

  <Routes>
   <Route path='/payment'Component={payment} />
  </Routes>

     

  <Footer />
  </Router>
  </>
  )
}

export default App
