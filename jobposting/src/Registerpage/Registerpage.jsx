import React from "react";
import "./Registerpage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {MdOutlineGroups2} from "react-icons/md";
import {MdOutlinePersonOutline} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Registerpage() {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [skills, setskills] = useState("");

  const navigate = useNavigate();

  const handlesignup = (e) => {
    e.preventDefault();
    // alert("Clicked Submit");
    console.log("signup", fullname, email, password, confirmpassword, skills);

    if( !fullname || !email || !password || !confirmpassword ){
      alert("Please fill all the required fields")
      return;
    }

    if(password !== confirmpassword){
      alert("passwords do not match");
      return;
    }

    const config = {
      method: "POST",
      url: "https://jobs-api.squareboat.info/api/v1/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: fullname,
        email: email,
        password: password,
        userRole: 0,
        confirmPassword: confirmpassword,
        skills: skills,
      },
    };

    axios(config)
      .then(function (response) {
        console.log("response", response.data);
        if(response.data.data){
          navigate("/login");
        }
      })
      .catch(function (error) {
        console.log("error", error);
        alert("some error occured!!")
        // alert(error);
      })
      .finally(() => {});
  };

  return (
    <div>
      <div class="div1-registerpage">
        <div class="register-form">
          <h3 style={{ backgroundColor: "#FFFFFF" }}>Signup</h3>
          &nbsp;
          <p style={{ marginBottom: "10px", backgroundColor: "#FFFFFF" }}>
            I'm a *
          </p>
          <div class="button-container" style={{ backgroundColor: "#FFFFFF" }}>
            
            <button
            className="profile-buttons-registerpage-recruiter"
            >
              <MdOutlinePersonOutline style={{height:'20px', width:'30px', color:'white', backgroundColor:'#43AFFF'}}/>
              Recruiter
            </button>
            &nbsp;&nbsp;
            <button
              className="profile-buttons-registerpage-candidate"
            >
              <MdOutlineGroups2 style={{height:'20px', width:'30px', color:'#43AFFF', backgroundColor:'#E8E8E833'}}/>
              Candidate
            </button>
          </div>
          <label
            style={{ backgroundColor: "#FFFFFF", marginTop: "10px" }}
            for="fname"
          >
            Full Name*
          </label>
          <input
            type={Text}
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            placeholder="Enter your Full Name"
            className="inputfield-registerpage"
          ></input>
          <label
            style={{ backgroundColor: "#FFFFFF", marginTop: "10px" }}
            for="email"
          >
            Email Address*
          </label>
          <input
            type={Text}
            value={email}
            className="inputfield-registerpage"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
          ></input>
          <div style={{ backgroundColor: "#FFFFFF", marginTop: "10px" }}>
            <label
              style={{ backgroundColor: "#FFFFFF", marginTop: "10px" }}
              for="password"
            >
              Create Password*
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            
            <label
              style={{ backgroundColor: "#FFFFFF", marginTop: "10px", marginLeft:"40px" }}
              for="confirm-password"
            >
              Confirm Password*
            </label>
            <input
              type={Text}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="passwordfields-registerpage"
              placeholder="Enter your password"
            ></input>
            <input
              type={Text}
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              className="passwordfields-registerpage"
              placeholder="Enter your password"
              style={{marginLeft:'25px'}}
            ></input>
          </div>
          <label
            style={{ backgroundColor: "#FFFFFF", marginTop: "10px" }}
            for="skills"
          >
            Skills
          </label>
          <input
            ttype={Text}
            value={skills}
            className="skills-registerpage"
            onChange={(e) => setskills(e.target.value)}
            placeholder="Enter comma separated skills"
          ></input>
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <button
            class="submit-button"
            onClick={(e) => handlesignup(e)}
          >
            Signup
          </button>
          &nbsp;
          <p
            style={{
              fontSize: "15px",
              backgroundColor: "#FFFFFF",
              marginLeft: "130px",
            }}
          >
            Have an Account?
            <a
              href="/"
              style={{ backgroundColor: "#FFFFFF", color: "#43AFFF" , textDecoration:"none", }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
      <div class="div2">{/* <p>div2</p>  */}</div>
    </div>
  );
}

export default Registerpage;
