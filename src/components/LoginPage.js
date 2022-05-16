import React, { useState, useEffect } from "react";
import './LoginPage.css';
import {Link} from 'react-router-dom';
import bg from '../images/img1.png';
function LoginPage()
{
    
        const imageStyle={height:"99vh",width: "70%"};
        const [emailId,setEmailId]=useState('');
        const [password,setPassword]=useState('');
    
        function Login()
        {
           
        }
        
    return<>
        <div class="signUpPage flex">
             <div className="intro">
             <img   className="bg-img" src={bg} alt='img'></img>
             </div>
        
        <div style={{height:"98.5vh",width:"30%", backgroundColor:"#9319ff"}}>
        
            <div style={{height:"55vh"}}>
            <div style={{marginTop:"7vh", marginBottom:"3vh",}}><p className="SignUp">L<span style={{borderBottom:"solid white 2px", paddingBottom:"5px"}}>og I</span>n</p></div>
                <form className="LoginForm">
                
                    <input type="text" className="inputbox" placeholder="Enter Email Id" onChange={e=>setEmailId(e.target.value)}/>
                    <input type="password" className="inputbox" placeholder="Enter Password" onChange={e=>setPassword(e.target.value)} />
                </form>
                <button  className="submit-btn" onClick={()=>Login()}>Submit</button>
                <p style={{color:"white", margin:"auto", width:"fit-content", marginTop:"30px"}}>Not a member yet ?<Link to='/'  style={{ textDecoration:"none",color:"white",fontWeight:"bold",paddingLeft:"10px"}}>S<span style={{borderBottom:"solid 2px white"}}>IGN U</span>P</Link></p>
            </div>
            <img src={require("../images/formbg.png")} alt="HomeImage" style={{height:"30%",width:"100%"}}/>
        </div>
        
        </div>
        </>
}
export  default LoginPage