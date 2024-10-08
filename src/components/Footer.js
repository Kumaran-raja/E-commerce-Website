import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>
        <div className='Footer_Space'>
            <div>
                <h5 className='footer_title'>About</h5>
                <Link to='/contactus' className='footer_link'>Contact Us</Link>
                <Link className='footer_link' to='/aboutus'>
                About Us
                </Link>
                {/* <Link className='footer_link' to='/contactus'>
                Career
                </Link>
                <Link className='footer_link' to='/contactus'>
                Corporate Information
                </Link> */}
            </div>
            <div>
                <h5 className='footer_title'>Help</h5>
            <Link className='footer_link' to='/payment'>
                Payments
                </Link>
                <Link className='footer_link' to='/shipping'>
                Shipping
                </Link>
                <Link className='footer_link' to='/Cancelandrefund'>
                Cancellation & Returns
                </Link>
                <Link className='footer_link' to='/FAQ'>
                FAQ
                </Link>
            </div>
            <div>
                <h5 className='footer_title'>Address</h5>
                <p className='footer_text'>VibeVault,<br/> 123 Fashion Avenue,<br/> Suite 456 New York,<br/> NY 10001 United States</p>
                <h6 className='footer_text'>Social:</h6>
                <div className='footer_text'>
                <CiFacebook className='footer_socialmedia_img'/>
                <FiTwitter className='footer_socialmedia_img'/>
                <FaInstagram className='footer_socialmedia_img'/>
                </div>
            </div>
            <div>
                <h5 className='footer_title'>Consumer Policy</h5>
                <Link className='footer_link' to='/termsofuse'>
                Terms of Use
                </Link>
                <Link className='footer_link' to='/security'>
                Security
                </Link>
                <Link className='footer_link' to='/privacy'>
                Privacy
                </Link>
              
              <p className='footer_text'>Phone Number: <a href='tel:+1 (212) 555-7890'>+1 (212) 555-7890</a><br/>Email: <a href='mailto:support@vibevault.com'>support@vibevault.com</a></p>
            </div>

        </div>
        <p className='copy_rights'>&copy; 2024 Vibevault. All Rights Reserved.</p>
    </div>
  )
}

export default Footer