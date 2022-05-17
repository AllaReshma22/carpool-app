import React, { Component } from 'react';
import bg from '../images/img1.png'
import '../css/signUp.css'
import {Link} from 'react-router-dom'
class SignUp extends Component {
    constructor(props)
    {
        super(props);
        
        this.state=
        {
            email:'',
            password:'',
            confirmPassword:'',
            formErrors:{email:'',password:'',confirmPassword:''},
            emailValid:false,
            passwordValid:false,
            formValid:false,
            message:''
        }
        
    }
    HandleChange=(e)=>
    {
       e.preventDefault(); 
        this.setState(
            {
                [e.target.name]:e.target.value
            },()=>{this.validateField(e.target.name,e.target.value)});
        e.preventDefault();
        
    }
    HandleSubmit=(e)=>
    {
        if(this.state.formErrors.email==='' &&this.state.formErrors.password===''&& this.state.formErrors.confirmPassword===''){
        this.setState(
            {
            message:'Successfully Signed Up .You can Login Now ....'
            }
        );
        }
        e.preventDefault();
        this.props.Data.push({'email':this.state.email,'password':this.state.password})
        e.preventDefault();
        
    }
    validateField=(fieldName,value)=>
    {
            let fieldValidationErrors = this.state.formErrors;
            let emailValid = this.state.emailValid;
            let passwordValid = this.state.passwordValid;
            let confirmPassword =this.state.confirmPassword;
            switch(fieldName)
            {
                case 'email':
                    if(this.state.email==='')
                    fieldValidationErrors.email='Email should not be empty!!';
                    else{
                    emailValid=value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    fieldValidationErrors.email = emailValid ? '' : ' Email format is invalid!!';
                    }
                    break;
                case 'password':
                    if(this.state.password==='')
                    fieldValidationErrors.password='Password should not be empty!!'
                    else{
                    passwordValid = value.length >= 6;
                    fieldValidationErrors.password = passwordValid ? '': 'Password  is too short!!';
                    }
                    break;
                case 'confirmPassword':
                    if(this.state.confirmPassword==='')
                    fieldValidationErrors.confirmPassword='Confirm Password should not be empty!!'
                    else{
                    confirmPassword = (this.state.confirmPassword===this.state.password);
                    fieldValidationErrors.confirmPassword = confirmPassword ? '': 'Confirm Password not matched!!';
                    }
                    break;
                default:
                    break;
            }
            this.setState(
                {formErrors: fieldValidationErrors,
                emailValid: emailValid,
                passwordValid: passwordValid
              }, this.validateForm);
        }
        validateForm() {
            this.setState({formValid: this.state.emailValid && this.state.passwordValid});
            
          }
    render() {
        return (
            <div class="signUpPage flex">
            <div className="intro">        
            <img   className="bg-img" src={bg} alt='img'></img>
           </div>
       
           <div class="signUpForm flex">
           <div style={{marginTop:"7vh", marginBottom:"3vh",marginLeft:"5vw"}}><p className="SignUp">Si<span style={{borderBottom:"solid white 2px"}}>gn </span>Up</p></div>
            
                        <form className="form" onSubmit={this.HandleSubmit} autoComplete="off">
                            <div className='input-container'>
                                <input type="text" placeholder="Enter Email Id" className="inputText" onChange={this.HandleChange}  name="email" value={this.state.email} required/>
    
                                <p className='Error'>{this.state.formErrors.email}</p>
                            </div>
                            <div className='input-container'>
                                <input type="password" placeholder="Enter password" className="inputText" onChange={this.HandleChange} name="password"  value={this.state.password} required/>
                                <p className='Error'>{this.state.formErrors.password}</p>
                            </div>
                            <div className='input-container'>
                                <input type="password"placeholder="Confirm Password" className="inputText"onChange={this.HandleChange}  name="confirmPassword"   value={this.state.confirmPassword} required/>           
                                <p className='Error'>{this.state.formErrors.confirmPassword}</p>
                            </div>
                            <div className='button-container'>
                                <input className="rounded-pill" type="submit"  ></input>
                            </div>
                            <br></br>
                            <p style={{color:"white", margin:"auto", width:"fit-content", marginTop:"30px"}}>Already a member?<Link to='/login'  style={{ textDecoration:"none",color:"white",fontWeight:"bold",paddingLeft:"10px"}}>L<span style={{borderBottom:"solid 2px white"}}>OG</span> IN</Link></p>
                            </form>
                        </div>
                        
                    </div>
        
        );
    }
}
export default SignUp;