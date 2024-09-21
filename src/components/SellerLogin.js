import React from "react";
import { Helmet } from 'react-helmet'
import './SellerLogin.css'
import { useNavigate } from "react-router-dom";
function SellerLogin() {
    const navigate=useNavigate();
    const NavigateToRegister=()=>{
        navigate('/SellerRegister')
    }
    const SellerDashboard=()=>{
        navigate('/SellerDashboard')
    }
    const Submit=(event)=>{
        event.preventDefault();
          const email=document.getElementById('email').value;
          const password=document.getElementById('password').value;
          const otp=document.getElementById('otp').value;
          const emailPattern=/^[A-Za-z0-9._]+@[a-z]+\.[a-z]{2,4}$/;
          if(email===''|| password===''||otp===''){
            alert('Must Fill All Fields')
            return false;
          }
          else if(!emailPattern.test(email)){
            alert('Enter Correct Email')
            return false;
          }
          else if(otp===''){
            alert('enter Correct OTP')
            return false;
          }
          else{
            SellerDashboard();
            //Authentication 
          }
       }
        const Top={
            marginTop: "60px",
            marginBottom: "20px",
        }
        return(
            <div>
                 <Helmet>
                    <title>Seller Login - Vibevault</title>
                    <meta name="description" content="Learn more about Vibevault and our mission to provide quality products." />
                    <link rel="canonical" href="https://vibevault.onrender.com/seller" />
                </Helmet>
                <section>
                    <div className="container-fluid text-center">
                        <div className="row" >
                            <div className="col-6 signup_page_content" >
                                <h1 style={Top}>Seller Account</h1>
                                <form onSubmit={Submit}>
                                    <div>
                                        <input id="email" className="input_box" placeholder="Email"/>
                                    </div>
                                    <div>
                                        <input id="password" className="input_box" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <input id="otp" className="input_box" placeholder="OTP"/>
                                    </div>
                                   <button className="signup_button">Login</button>
                                </form>
                                <p style={{marginTop:"20px"}}>Don't Have a Seller Account <span style={{textDecoration:"underline",color:"blue",cursor:"pointer"}} className="login" onClick={NavigateToRegister}>Register Now</span></p>
                            </div>
                            
                           
                        </div>
                    </div>
                </section>
            </div>
        )
    // }
}
export default SellerLogin;
