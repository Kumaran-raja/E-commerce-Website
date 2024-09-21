import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import logo from './images/logo.png'
import './SellerDashboard.css'
import Dashboard from './SellerPages/Dashboard'
import Listing from './SellerPages/Listing';
import Orders from './SellerPages/Orders';
import Payment from './SellerPages/Payment';
import Helpline from './SellerPages/Helpline';
import Ads from './SellerPages/Ads';
function SellerDashboard() {
    const [SellerPage,setSellerPage]=useState('orders');
    const handlePages=(value)=>{
        setSellerPage(value);
    }
    return (
    
        <div className='seller_Dashboard_container'>
             <Helmet>
                <title>Seller Dashboard - Vibevault</title>
                <meta name="description" content="Access your Seller Dashboard on Vibevault. Manage your listings, track sales, and optimize your store to reach a wider audience effortlessly." />
                <link rel="canonical" href="https://vibevault.onrender.com/SellerDashboard" />
            </Helmet>
            <div className='seller_menu'>
                <img className='Seller_image' src={logo}/>
                <p onClick={()=>{handlePages('dashboard')}} className='seller_menu_item'>Dashboard</p>
                <p onClick={()=>{handlePages('listing')}} className='seller_menu_item'>Listing</p>
                <p onClick={()=>{handlePages('orders')}} className='seller_menu_item'>Orders</p>
                <p onClick={()=>{handlePages('payment')}} className='seller_menu_item'>Payment</p>
                <p onClick={()=>{handlePages('ads')}} className='seller_menu_item'>Promotion</p>
                <p onClick={()=>{handlePages('helpline')}} className='seller_menu_item'>Helpline</p>
            </div>
            <div className='seller_content'>
                {SellerPage==='dashboard' && <Dashboard/>}
                {SellerPage==='listing' && <Listing/>}
                {SellerPage==='orders' && <Orders/>}
                {SellerPage==='payment' && <Payment/>}
                {SellerPage==='ads' && <Ads/>}
                {SellerPage==='helpline' && <Helpline/>}

            </div>
        </div>
    )
}

export default SellerDashboard