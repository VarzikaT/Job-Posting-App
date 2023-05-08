import React from 'react';
import '../PasswordReset/PasswordReset.css'

function PasswordReset() {
  return (
    <div>
         <nav>
            <div class='navbar'>
            <div>
            <p style={{backgroundColor:'#303F60',height:'55px', width:'55px', paddingTop:'15px', paddingLeft:'35px'}}>My<span class='jobsword'>Jobs</span></p>
            </div>
            <button style={{height:'38px', backgroundColor:'#43AFFF33', border:'1px solid #43AFFF', borderRadius:'4px', marginTop:'7px', marginLeft:'1250px', width:'100px', color:'#FFFFFF'}}>Login/SignUp</button>
            </div>
        </nav>
        <div className='div1'>
            <div class='password-box'>
                <h3 style={{backgroundColor:'#ffffff', marginLeft:'15px', marginTop:'10px'}}>Reset Your Password</h3>
                &nbsp;&nbsp;
                <p style={{backgroundColor:'#ffffff', marginLeft:'15px'}}>Enter your new password below.</p>
                &nbsp;&nbsp;
                <label name="password" style={{backgroundColor:'#ffffff', marginLeft:'15px'}}>New password</label>  
                <input type="text" id="email" name="password" placeholder='Enter your password'
                 style={{height:'30px', border
                 :'0.8px solid #C6C6C6', backgroundColor:'#E8E8E833' , borderRadius:'5px', 
                 marginTop:'10px', width:'460px',  marginLeft:'15px'}}></input>  
                 &nbsp;
                 <label name="password" style={{backgroundColor:'#ffffff', marginLeft:'15px'}}>Confirm new password</label>  
                <input type="text" id="email" name="password" placeholder='Enter your Password'
                 style={{height:'30px', border
                 :'0.8px solid #C6C6C6', backgroundColor:'#E8E8E833' , borderRadius:'5px', 
                 marginTop:'10px', width:'460px',  marginLeft:'15px'}}></input>  
                 &nbsp;
                <button style={{backgroundColor:' #43AFFF', color:'aliceblue', height:'42px', width:'105px',border:'0.5px solid #43AFFF', borderRadius:'5px', marginTop:'15px', marginLeft:'180px' }}>Submit</button>
                 </div>
        </div>
    </div>
  )
}

export default PasswordReset