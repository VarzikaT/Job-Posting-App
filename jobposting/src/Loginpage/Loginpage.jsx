import React from "react";
import "./Loginpage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

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
        console.log("response  ", response.data.data);
        sessionStorage.setItem("user", JSON.stringify(response.data.data));
        sessionStorage.setItem("isAuthorized", true);
        setIsAuthorized(true);
      })
      .catch(function (error) {
        console.log("errrror ", error);
      })
      .finally(() => {});
  };

  return (
    <div className="login-page-wrapper">
      <div class="div1-loginform">
        <div class="loginform">
          <form className="login-form-container">
            <h3>Login</h3>
            <br></br>
            <label>Email-Id:</label>
            <br></br>
            <input
              type={Text}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="loginform-inputs"
            ></input>
            <br></br>
            <br></br>
            <label>
              Password
              <Link
              to="/forgotpassword"
                style={{
                  fontSize: "10px",
                  color: "#43AFFF",
                  marginLeft: "50%",
                }}
            
              >
                Forgot your password?
              </Link>
            </label>

            <input
              type={Text}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="loginform-inputs"
            ></input>

            <button class="submit-button" onClick={(e) => handleLogin(e)}>
              Submit
            </button>
            <br></br>
            <p
              style={{
                fontSize: "13px",
                textAlign: "center",
                marginTop: "18px",
              }}
            >
              New to MyJobs?
              <Link to="/registeruser" style={{ color: "#43AFFF" }}>
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
      {/* <div class="div2">
        <p>div2</p> 
        <Button variant="contained">Login</Button>
      </div> */}
    </div>
  );
}

export default Loginpage;
