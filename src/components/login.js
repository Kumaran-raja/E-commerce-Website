// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import apple from './images/apple.png';
import google from './images/google.png';
import facebook from './images/facebook.png';
import { Helmet } from 'react-helmet'
import './login.css';

function Login() {
  const navigate = useNavigate(); // Create navigate function

  const handleLoginClick = () => {
    navigate('/signup'); // Navigate to Signup page
  };
  const login={
    marginTop:"80px",
    marginBottom:"20px"
 }
 const Submit=(event)=>{
  event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const emailPattern=/^[A-Za-z0-9._]+@[a-z]+\.[a-z]{2,4}$/;
    if(email==''|| password==''){
      alert('Must Fill All Fields')
      return false;
    }
    else if(!emailPattern.test(email)){
      alert('Enter Correct Email')
      return false;
    }
    else{
      //Authentication
    }
 }

  return (
    <section>
       <Helmet>
        <title>Login - Vibevault</title>
        <meta name="description" content="Log in to your Vibevault account to access your personalized shopping experience. Manage your orders, track shipments, and enjoy exclusive deals tailored just for you." />
        <meta name="keywords" content="Login, Vibevault, Online Shopping,Vibevault purchase" />

        <link rel="canonical" href="https://vibevault.onrender.com/login" />
      </Helmet>
      <div className="container-fluid text-center">
        <div className="row" style={{backgroundColor:"white"}}>
          <div className="col-6 login_page_content">
            <h1 style={login}>Login</h1>
            <form onSubmit={Submit}>
              <div>
                <input id='email' className='input_box' type='text' placeholder="Email" />
              </div>
              <div>
                <input id='password' className='input_box' type='password' placeholder="Password" />
              </div>
              <p className="forgotpassword">Forgot Password?</p>
              <button className='login_button' type="submit">Login</button>
              <div className="hr-with-text">or</div>
            </form>
            <div className="login_option">
              <img style={{margin:"10px",cursor:"pointer"}} src={facebook} alt="Facebook" />
              <img style={{margin:"10px",cursor:"pointer"}} src={google} alt="Google" />
              <img style={{margin:"10px",cursor:"pointer"}} src={apple} alt="Apple" />
            </div>
            <p style={{marginTop:"20px"}}>
              I don't Have an Account <span onClick={handleLoginClick} style={{textDecoration:"underline",color:"blue",cursor:"pointer"}}>Register Now</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
