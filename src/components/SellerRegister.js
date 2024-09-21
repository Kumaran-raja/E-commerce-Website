import React from 'react'
import './SellerRegister.css'
import { Helmet } from 'react-helmet'

import { useNavigate } from 'react-router-dom'
function SellerRegister() {
  const navigate=useNavigate();
  const naviagateToLogin=()=>{
    navigate('/SellerLogin')
  }
  const gotoLogin=()=>{
    navigate('/SellerLogin')
  }
  const handleCategory=(value)=>{
    
    if(value==='all'){
      document.getElementById('PAN').style.display='none'
      document.getElementById('all_product').style.backgroundColor="yellowgreen"
      document.getElementById('GSTIN').style.display='block'
      
      document.getElementById('only_book').style.backgroundColor="antiquewhite"
    }
    else if(value==='book'){
      document.getElementById('GSTIN').style.display='none'
      document.getElementById('PAN').style.display='block'

      document.getElementById('all_product').style.backgroundColor="antiquewhite"
      document.getElementById('only_book').style.backgroundColor="yellowgreen"

    }
  }
  return (
    <div className='section'>
       <Helmet>
        <title>Seller Register - Vibevault</title>
        <meta name="description" content="Become a seller on Vibevault! Register now to showcase your products to a growing audience and benefit from our robust platform designed for success." />
        <link rel="canonical" href="https://vibevault.onrender.com/SellerRegister" />
      </Helmet>
      <div className='constainer'>
        <div className='row'>
          <div className='col-5 seller_container text-center' style={{display:"block",marginLeft:"auto",marginRight:"auto",backgroundColor:"antiquewhite"}}>
            <h1>Seller</h1>
            <input className='seller_input' placeholder='Phone Number'/>
            <input className='seller_input' placeholder='Email'/>
            <h6 className='seller_text_position'>What are you looking to sell on Vibevault?</h6>
            <div  className='seller_category_type_container'>
                <h3 style={{backgroundColor:"yellowgreen"}} id='all_product' onClick={()=>{handleCategory('all')}} className='seller_category_type'>All Category</h3>
                <h3 id='only_book' onClick={()=>{handleCategory('book')}} className='seller_category_type'>Only Books</h3>
            </div>
            <div id='GSTIN' >
              <input className='seller_input' placeholder='GSTIN'/>
              <p className='seller_text_position'>GSTIN is required to sell Products on Vibevault</p>
            </div>
            <div id='PAN' style={{display:"none"}}>
              <input className='seller_input' placeholder='PAN'/>
              <p className='seller_text_position'>PAN is required to sell Books on Vibevault</p>
            </div>
            <input className='seller_input' placeholder='Enter Business Name'/>
            <input className='seller_input' placeholder='Enter Business Address'/>
            <input className='seller_input' placeholder='Enter Pincode'/>
            <input className='seller_input' type='file'/>
            <p className='seller_text_position'><strong>Front & Back :</strong> VoterId /Passport</p>
            <p className='seller_text_position'><strong>Only Front :</strong> Electricity Bill / Telephone or Mobile Bill /Bank Passbook or Statement</p>
            <p className='seller_text_position'>Add Your E-signature</p>
            
            <div  className='seller_category_type_container'>
              <input type='file' />
              <input type='file' />
            </div>

            <h5 className='seller_text_position'>Store and Pickup Details</h5>
            <input className='seller_input' placeholder='Your Full Name'/>
            <input className='seller_input' placeholder='Enter Display Name'/>
            <textarea className='seller_input' placeholder='Enter Store Description'/>
            <input className='seller_input' placeholder='Pickup Pincode'/>

            <button className='Seller_Register' onClick={gotoLogin}>Submit</button>

            <p>Already Have a Seller Account <strong style={{textDecoration:"underline",color:"blue",cursor:"pointer"}} onClick={naviagateToLogin}>Login</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerRegister