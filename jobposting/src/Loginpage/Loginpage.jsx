import React from 'react';
import '../Loginpage/Loginpage.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";

function Loginpage({ setIsAuthorized }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      alert("Clicked login");
  
      console.log("login ", email, password);
  
      const config = {
        method: "POST",
        url: "https://jobs-api.squareboat.info/api/v1//auth/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: email,
          password: password,
        },
      };
  
      axios(config)
        .then(function (response) {
          console.log("response  " ,response.data.data);
          sessionStorage.setItem( "user", JSON.stringify(response.data.data) );
          sessionStorage.setItem("isAuthorized", true);
          setIsAuthorized(true);
        })
        .catch(function (error) {
          console.log("errrror " ,error);
        })
        .finally(() => {});
    };


  return (
    <div>
        <nav>
        <div class='navbar'>
            <div>
            <p style={{backgroundColor:'#303F60',height:'55px', width:'55px', paddingTop:'15px', paddingLeft:'35px'}}>My<span class='jobsword'>Jobs</span></p>
            </div>
        </div>   
        </nav>
        <div class='div1'>
            <div class='login-form'>
            <form>
                <h3 >Login</h3>
                <br></br>
                <label >Email-Id:</label>
                <br></br>
                <input type={Text} value={email} onChange={ (e) => setEmail(e.target.value)} style={{marginTop:'10px',backgroundColor:'lightgrey',borderRadius:'3px', border:'0.8px solid grey', height:'26px',width:'380px'}}></input>
                <br></br>
                <br></br>
                <label >Password
                    <a style={{fontSize:'10px',color:'#43AFFF'}} href="/">Forgot your password?</a></label>
                <br></br>
                
                <input type={Text} value={password} onChange={ (e) => setPassword(e.target.value)} style={{backgroundColor:'lightgrey',borderRadius:'3px',marginTop:'10px', border:'0.8px solid grey', height:'26px',width:'380px'}}></input>
                <br></br>
                <br></br>
                <br></br>
              
                <button class='submit-button' onClick={ (e) => handleLogin(e)}>Submit</button>
                <br></br>
                <p style={{fontSize:'13px', textAlign:'center', marginTop:'18px'}}>New to MyJobs? <a href='/' style={{color:'#43AFFF'}}>Create an account</a></p>
            </form>
            </div>
        </div>
        <div class='div2'>
            {/* <p>div2</p>  */}
            {/* <Button variant="contained">Login</Button> */}
        </div>
    </div>
  )
}

export default Loginpage