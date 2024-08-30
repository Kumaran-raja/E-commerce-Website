import React, { useEffect, useState ,useRef} from 'react'
import './contactUs.css'
import { MdAttachFile } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate=useNavigate();
    const scrollRef = useRef(null);
    const goBack=()=>{
        navigate(-1)
    }
    const [message,setMessage]=useState([{text:"Hello Dear Customer, What is Your Query?",isSent:false}]);
    const [input,setInput]=useState('');

    const sendMessage=()=>{
        document.getElementById('choose_file').style.display="none"

        if(input.trim()){
            setMessage([...message,{text:input,isSent:true}])
            setInput('');
        }
    }
    useEffect(()=>{
        if(scrollRef.current){
            scrollRef.current.scrollTop=scrollRef.current.scrollHeight;
        }
    },[message])
 
  return (
    <div>
        <section>
           <div className='container text-center'>
                <div className='row row_center'>
                    <div className='col-12 chat_container'>
                        <div className='chat_header'>
                            <IoMdArrowRoundBack onClick={goBack} style={{width:"50px",height:"50px",padding:"10px"}}/>
                            <h1 className='cutomer_care'>Customer Care</h1>
                        </div>
                     
                                <div className='scroll_msg_content' ref={scrollRef}>
                                {
                                    message.map((msg,index)=>(
                                    <div key={index}>
                                        {
                                            msg.isSent?(
                                                <div style={{display:"flex",marginRight:"10px"}}>
                                                <p className='send_msg'>{msg.text}</p>
                                                <IoPersonCircle className='chat_person_logo' />
                                                </div>
                                            ):(
                                                <div style={{display:"flex",marginLeft:"10px"}}>
                                                <FcCustomerSupport className='chat_person_logo'/>
                                                    <p className='receive_msg'>{msg.text}</p>
                                                </div>
                                                
                                            )
                                        }
                                    </div>
                                    ))
                                }
                            </div>
                       
                        <div>
                            <input type='file' id='choose_file' style={{marginRight:"auto",display:"None"}}/>
                            <div className='img_input'>
                                <MdAttachFile onClick={()=>{
                                    document.getElementById('choose_file').style.display="block"
                                }} className='file_image'/>
                                <input className='message_box' 
                                placeholder='Message Here...'
                                value={input}
                                onKeyPress={(e)=>{
                                    if(e.key==='Enter'){
                                        sendMessage()
                                    }
                                }}
                                onChange={(e)=>setInput(e.target.value)}/>
                                <IoMdSend className='file_image' style={{color:"black"}} onClick={sendMessage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    </div>
  )
}

export default ContactUs