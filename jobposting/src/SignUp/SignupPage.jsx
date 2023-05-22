import React from 'react';
import '../SignUp/SignupPage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';



function Signup() {
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
        <div class='signup-form'>
          <form>
            <h3>SignUp</h3>
            <br></br>
            <h6>I'm a*</h6>
            <button></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup