import React from 'react';
import '../Loginpage/Loginpage.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Loginpage() {
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
                <input type={Text} style={{marginTop:'10px',backgroundColor:'lightgrey',borderRadius:'3px', border:'0.8px solid grey', height:'26px',width:'380px'}}></input>
                <br></br>
                <br></br>
                <label >Password:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    <a style={{fontSize:'10px',color:'#43AFFF'}} href="/">Forgot your password?</a></label>
                <br></br>
                
                <input type={Text} style={{backgroundColor:'lightgrey',borderRadius:'3px',marginTop:'10px', border:'0.8px solid grey', height:'26px',width:'380px'}}></input>
                <br></br>
                <br></br>
                <br></br>
                <button class='submit-button'>Submit</button>
                <br></br>
                <p style={{fontSize:'13px', textAlign:'center', marginTop:'18px'}}>New to MyJobs? <a href='/' style={{color:'#43AFFF'}}>Create an account</a></p>
            </form>
            </div>
        </div>
        <div class='div2'>
            {/* <p>div2</p>  */}
        </div>
    </div>
  )
}

export default Loginpage