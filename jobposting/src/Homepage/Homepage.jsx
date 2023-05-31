import React from 'react';
import './Homepage.css';
import joblogo from '../images/joblogo.png';
import jobposter from '../images/jobposter.jpeg';
import { Link } from 'react-router-dom';

function Homepage() {

    const logout = () => {
        sessionStorage.clear();
        window.location.href = "/";
    }

  return (
    <div class="homepage-wrapper">

        
        <div class="posterarea">
            <div className='job-text'>
                <p style={{backgroundColor:'#303F60'}}>Welcome to </p>
                <p style={{backgroundColor:'#303F60'}}>My<span class='jobsword'>Jobs</span></p>
                <Link to="/alljobs" className='get-started' style={{textDecoration:"none", fontSize:"20px", padding:"7px 12px"}}>Get Started</Link>
                {/* <div class="why-us">
                <p>Why Us?</p>
            </div> */}
            </div>
            <div className='job-poster'>
                <img src={jobposter} alt="poster" className='posterimg'></img>
            </div>
            
        </div>
        <div class="why-us">
                <h4>Why Us</h4>
            </div>
        <div class="card-area">
       
            <div class="textbox">
                <h2 class="card-heading">Get more visibility</h2>
                <br></br>
                <p style={{backgroundColor:'#ffffff'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus ad vero necessitatibus sit harum.</p>
            </div>
            <div class="textbox">
            <h2 class="card-heading">Organize your candidates</h2>
                <br></br>
                <p style={{backgroundColor:'#ffffff'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nihil voluptatibus aspernatur, doloribus reiciendis non?</p> 
            </div>
            <div class="textbox">
            <h2 class="card-heading">Verify their abilities</h2>
                <br></br>
                <p style={{backgroundColor:'#ffffff'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem doloremque unde ad adipisci ab quam!</p> 
            </div>
        </div>
        <div>
            <h4 class="companies-text">Companies who trust us</h4>
        </div>
    </div>
  )
}

export default Homepage;
