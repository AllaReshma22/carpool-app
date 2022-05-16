//import {variables} from '../Variables';
import React, { useEffect } from "react";

import bg from '../images/img1.png';
import "../components/SignUpPage.css"
import {Link} from 'react-router-dom';
import { useState } from 'react';
import LoginPage from "./LoginPage";
import {Route} from 'react-router-dom';
import img from "../images/logo.png"
function SignUpPage()
//export class SignUp extends React.Component
{

            const initialValues={email:"",password:"",confirmPassword:""};
            const [formValues,setFormValues]=useState(initialValues);
            const [formErrors,setFormErrors]=useState({});
            const [isSubmit,setIsSubmit]=useState(false);
            const handleChange=(e)=>{
                const{id,value}=e.target;
                setFormValues({...formValues,[id]:value});
                console.log(formValues);
            }
            const handleSubmit=(e)=>{
                e.preventDefault();
                setFormErrors(validate(formValues));
                setIsSubmit(true);
            }
            useEffect(()=>{
                console.log(formErrors);
               if(Object.keys(formErrors).length === 0 &&isSubmit){
                 console.log(formValues);  
               }
            },[formErrors,formValues,isSubmit])
            const validate=(values)=>{
                const errors={};
                const regex=/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
                if(!values.email){
                    errors.email="Email is required";
                }
                if(!values.password){
                    errors.password="password is required";
                }
                if(!values.password){
                    errors.cofirmPassword="password is required";
                }

                

            }
           
        
    //render(){
    return(
        <div class="signUpPage flex">
             <div className="intro">        
             <img   className="bg-img" src={bg} alt='img'></img>
            </div>
        
            <div class="signUpForm flex">
            <div style={{marginTop:"7vh", marginBottom:"3vh",marginLeft:"5vw"}}><p className="SignUp">Si<span style={{borderBottom:"solid white 2px"}}>gn </span>Up</p></div>
            <form className="LoginForm">
                
                <input type="text" className="inputbox" placeholder="Enter Email Id" id="email" value={formValues.email} onChange={handleChange}/>
                <p>{formErrors.email}</p>
                <input type="password" className="inputbox" placeholder="Enter Password" id="password" value={formValues.password} onChange={handleChange} />
                <p>{formErrors.password}</p>
                <input type="password" className="inputbox" placeholder="Confirm Password" id="confirmPassword"  value={formValues.confirmPassword}onChange={handleChange}/>
                <p>{formErrors.confirmPassword}</p>
            </form>
            <button className="signUp-submit-btn" onClick={handleSubmit}>Submit</button>
            <p style={{color:"white", margin:"auto", width:"fit-content", marginTop:"30px"}}>Already a member?<Link to='/login'  style={{ textDecoration:"none",color:"white",fontWeight:"bold",paddingLeft:"10px"}}>L<span style={{borderBottom:"solid 2px white"}}>OG</span> IN</Link></p>
        </div>
       
            </div>
        
    );
}   
export  default SignUpPage;