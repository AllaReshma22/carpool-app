import React, { Component } from 'react';
import bg from '../images/img1.png'
import '../css/Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
                email:'',
                password:'',
                id:'',
            message:''
        }
        
       
    }
    handleChange=(e)=>
    {
        this.setState(
        {
        [e.target.name]:e.target.value
        }
        )
        e.preventDefault();

    }
    handleSubmit=(e)=>
    {
        var self=this;
        
        axios(
            {
            method: 'post',
            url:'https://localhost:44348/api/UserService/Login',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Acces-Control-Allow-Origin": "*"
              },
            data: {
                "EmailId": this.state.email,
                "Password": this.state.password
            }
          }).then(function (response) {

            console.log("response"+JSON.stringify(response.data));
            if(response.data !== "")
            {
                console.log('final email :' + self.state.email)
                console.log('final pass  :'+  self.state.password)
                window.localStorage.setItem('id',response.data);
                window.localStorage.setItem('email',self.state.email);
                self.setState({message:"Login Succesful"})
            }
            else{
                window.alert("User Not found.. Sign up ??")
            }
          });
    
        e.preventDefault();
    }
   
    render() {
        return (
            <div class="signUpPage flex">
            <div className="intro">        
            <img   className="bg-img" src={bg} alt='img'></img>
                   </div>
                   <div class="loginUpForm flex"> 
                        <br></br>
                        <br></br>
                        <div className='success-message'><Link to={{pathname:'/OptionsPage',state:{name:this.state.email}}}>{this.state.message}</Link></div>
                        <br></br>
                        
                        <h2 className='sign-up'><b>Log In</b></h2>
                        <hr></hr> 
                        <br></br>
                        
                        <br></br>
                        <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
                            <div className='input-container'>
                                <input type="text" className="inputText" placeholder="Enter Email Id" onChange={this.handleChange} name="email" required/>
        
                            </div>
                            <br></br>
                            <div className='input-container'>
                                <input type="password" placeholder="Enter password"className="inputText"  onChange={this.handleChange} name="password" required/>                

                            </div>
                            <br></br>
                            <div className='button-container'>
                                <input className="rounded-pill" id="log-in-submit" type="submit"></input>
                            </div>
                            <br></br>
                            <p style={{color:"white", margin:"auto", width:"fit-content", marginTop:"30px"}}>Not a member yet? <Link to='/'  style={{ textDecoration:"none",color:"white",fontWeight:"bold",paddingLeft:"10px"}}>S<span style={{borderBottom:"solid 2px white"}}>IGN</span> UP</Link></p>

                        </form>
                    </div>
                </div>
        );
    }
}

export default Login;