import React from 'react';
import '../Registerpage/Registerpage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Registerpage() {
  const [fullname, setfullname]= useState("");
  const [email, setemail]= useState("");
  const [password, setpassword]= useState("");
  const [confirmpassword, setconfirmpassword]= useState("");
  const [skills, setskills]= useState("");

  const handlesignup = (e) => {
    e.preventDefault();
    alert("Clicked Submit");

    console.log("signup",fullname,email,password,confirmpassword,skills);

    const config={
        method:"POST",
        url:"https://jobs-api.squareboat.info/api/v1//auth/register",
        headers:{
            "Content-Type": "application/json",
        },
        data:{
            name: fullname,
            email: email,
            password: password,
            userRole: 0,
            confirmPassword: confirmpassword,
            skills: skills,
        },
    };

    axios(config)
        .then(function(response){
            console.log("response", response.data);
        })
        .catch(function(error){
            console.log("error", error);
        })
        .finally(() => {})
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
                <h3 style={{backgroundColor:'#FFFFFF'}}>Signup</h3>
                &nbsp;
                <p style={{marginBottom:'10px', backgroundColor:'#FFFFFF'}}>I'm a *</p>
            <div class='button' style={{backgroundColor:'#FFFFFF'}}>    
            <button style={{backgroundColor:' #43AFFF', color:'aliceblue', height:'30px', width:'70px',border:'0.5px solid #43AFFF' }}>Recruiter</button>
            &nbsp;&nbsp;
            <button style={{ color:'#43AFFF', height:'30px', width:'70px', border:'0.5px solid #43AFFF'}}>Candidate</button>
            </div>
            <label style={{backgroundColor:'#FFFFFF', marginTop:'10px'}} for="fname">Full Name*</label>
            <input type={Text} value={fullname} onChange={ (e) => setfullname(e.target.value)} placeholder='Enter your Full Name' 
            style={{height:'30px', border:'0.8px solid #C6C6C6', backgroundColor:'#E8E8E833' , borderRadius:'5px', color:'', marginTop:'10px'}}></input>
             <label style={{backgroundColor:'#FFFFFF', marginTop:'10px'}} for="email">Email Address*</label>
            <input type={Text} value={email} onChange={ (e) => setemail(e.target.value)} placeholder='Enter your email' style={{height:'30px', border
        :'0.8px solid #C6C6C6', backgroundColor:'#E8E8E833' , borderRadius:'5px', marginTop:'10px'}}></input>
            <div style={{backgroundColor:'#FFFFFF', marginTop:'10px'}}>
            <label style={{backgroundColor:'#FFFFFF', marginTop:'10px'}} for="password">Create Password*</label>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <label style={{backgroundColor:'#FFFFFF', marginTop:'10px'}} for="confirm-password">Confirm Password*</label>
            <input type={Text} value={password} onChange={ (e) => setpassword(e.target.value)} placeholder='Enter your password'  style={{height:'25px', marginTop:'10px', border:'0.8px solid #C6C6C6', backgroundColor:'#E8E8E833' ,  width:'178px', borderRadius:'5px'}}></input> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            <input type={Text} value={confirmpassword} onChange={ (e) => setconfirmpassword(e.target.value)}  placeholder='Enter your password'  style={{height:'25px', marginTop:'10px', border:'0.8px solid skyblue', backgroundColor:'#E8E8E833' , width:'180px', borderRadius:'5px'}}></input>
            </div>
            <label style={{backgroundColor:'#FFFFFF', marginTop:'10px'}} for="skills">Skills</label>
            <input ttype={Text} value={skills} onChange={ (e) => setskills(e.target.value)}  placeholder='Enter comma separated skills' 
            style={{height:'35px', border:'0.8px solid #C6C6C6', backgroundColor:'#E8E8E833', borderRadius:'5px' , marginTop:'10px'}}></input>
             &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            <button class='submit-button' onClick={ (e) => handlesignup(e)} style={{backgroundColor:' #43AFFF', color:'aliceblue', height:'42px', width:'105px',border:'0.5px solid #43AFFF', borderRadius:'5px', marginTop:'15px', marginLeft:'150px' }}>Signup</button>
            &nbsp;
            <p style={{fontSize:'13px', backgroundColor:'#FFFFFF', marginLeft:'130px'}}>Have an Account?<a href='/' style={{backgroundColor:'#FFFFFF',color:'#43AFFF'}}>Login</a></p>
            </div>
        </div>
        <div class='div2'>
            {/* <p>div2</p>  */}
        </div>
    </div>
  )
}

export default Registerpage