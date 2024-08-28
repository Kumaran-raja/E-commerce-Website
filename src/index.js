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

class Run extends React.Component {
  render() {
    return (
      <Router>
        <div className='background_color'>
          {/* <Header /> */}
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/Category" element={<div><Header/><CategoryPage /></div>} /> 
            <Route path="/" element={<div><Header/><Home /></div>} />
            <Route path="/cart" element={<div><Header/><Cart /></div>} />
            <Route path="/seller" element={<Seller />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Run/>)

