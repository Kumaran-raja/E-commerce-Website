import React from 'react';
import Login from './components/login'
import ReactDOM from 'react-dom/client';
import Signup from './components/signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Cart from './components/cart';
import CategoryPage from './components/CategoryPage';
import Seller from './components/Seller';
import ProductPage from './components/productPage';
import ContactUs from './components/contactUs'
import Footer from './components/Footer'
class Run extends React.Component {
  render() {
    return (
      <Router>
        <div className='background_color'>
          {/* <Header /> */}
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/Category" element={<div><Header/><CategoryPage />  <Footer /></div>} /> 
            <Route path="/product" element={<div><Header/><ProductPage />  <Footer /></div>} /> 
            <Route path="/" element={<div><Header/><Home />  <Footer /></div>} />
            <Route path="/cart" element={<div><Header/><Cart />  <Footer /></div>} />
            <Route path="/seller" element={<div><Seller />  <Footer /></div>} />
            <Route path='/contactus' element={<ContactUs/>}/>
          </Routes>
          
        </div>
      </Router>
    );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Run/>)

