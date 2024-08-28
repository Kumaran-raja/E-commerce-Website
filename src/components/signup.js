import React from "react";

import apple from './images/apple.png'
import google from './images/google.png'
import facebook from './images/facebook.png'
import './signup.css'
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate=useNavigate();

    const backToLogin=()=>{
        navigate('/login')
    }
    const Submit=(event)=>{
        event.preventDefault();
          const email=document.getElementById('email').value;
          const password=document.getElementById('password').value;
          const confirmpassword=document.getElementById('confirmpassword').value;
          const emailPattern=/^[A-Za-z0-9._]+@[a-z]+\.[a-z]{2,4}$/;
          if(email==''|| password==''||confirmpassword==''){
            alert('Must Fill All Fields')
            return false;
          }
          else if(!emailPattern.test(email)){
            alert('Enter Correct Email')
            return false;
          }
          else if(password!=confirmpassword){
            alert('Confirm Password Not Matching')
            return false;
          }
          else{
            alert("ok")
            //Authentication 
          }
       }
    // render(){
        const Top={
            marginTop: "60px",
            marginBottom: "20px"
        }
        return(
            <div>
                <section>
                    <div className="container-fluid text-center">
                        <div className="row" >
                            <div className="col-6 signup_page_content" >
                                <h1 style={Top}>Register Now</h1>
                                <form onSubmit={Submit}>
                                    <div>
                                        <input id="email" className="input_box" placeholder="Email"/>
                                    </div>
                                    <div>
                                        <input id="password" className="input_box" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <input id="confirmpassword" className="input_box" placeholder="Confirm Password"/>
                                    </div>
                                   <button className="signup_button">Signup</button>
                                   <div className="hr-with-text">or</div>

                          
                                </form>
                                <div className="login_option">
                                    <img style={{margin:"10px",cursor:"pointer"}} className="signup_type_icon" src={facebook}/>
                                    <img style={{margin:"10px",cursor:"pointer"}} className="signup_type_icon" src={google}/>
                                    <img style={{margin:"10px",cursor:"pointer"}} className="signup_type_icon" src={apple}/>
                                </div>
                                <p style={{marginTop:"20px"}}>Already Have an Account <span style={{textDecoration:"underline",color:"blue",cursor:"pointer"}} className="login" onClick={backToLogin}>Login Now</span></p>
                            </div>
                            
                           
                        </div>
                    </div>
                </section>
            </div>
        )
    // }
}
export default Signup;
