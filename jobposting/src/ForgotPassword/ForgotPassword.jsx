import React from 'react';
import '../ForgotPassword/ForgotPassword.css';

function ForgotPassword() {
  return (
    <div>
         <nav>
            <div class='navbar'>
            <div>
            <p style={{backgroundColor:'#303F60',height:'55px', width:'55px', paddingTop:'15px', paddingLeft:'35px'}}>My<span class='jobsword'>Jobs</span></p>
            </div>
            </div>
        </nav>
        <div className='div1'>
            <div class='password-box'>
                <h4 style={{backgroundColor:'#ffffff', marginLeft:'15px', marginTop:'10px'}}>Forgot your password?</h4>
                &nbsp;&nbsp;
                <p style={{backgroundColor:'#ffffff', marginLeft:'15px'}}>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
                &nbsp;&nbsp;
                <label name="password" style={{backgroundColor:'#ffffff', marginLeft:'15px'}}>Email address</label>  
                <input type="text" id="email" name="password" placeholder='Enter your email'
                 style={{height:'30px', border
                 :'0.8px solid #C6C6C6', backgroundColor:'#E8E8E833' , borderRadius:'5px', 
                 marginTop:'10px', width:'460px',  marginLeft:'15px'}}></input>  
                 &nbsp;
                <button style={{backgroundColor:' #43AFFF', color:'aliceblue', height:'42px', width:'105px',border:'0.5px solid #43AFFF', borderRadius:'5px', marginTop:'15px', marginLeft:'180px' }}>Submit</button>
                 </div>
        </div>
        <div className='div2'>

        </div>
    </div>
  )
}

export default ForgotPassword