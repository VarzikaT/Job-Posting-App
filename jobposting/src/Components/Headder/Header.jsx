import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const data =
    sessionStorage.getItem("user") &&
    JSON.parse(sessionStorage.getItem("user"));
  const isAuthorized = sessionStorage.getItem("isAuthorized")
    ? JSON.parse(sessionStorage.getItem("isAuthorized"))
    : false;

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <nav class="navbar">
        {/* {isAuthorized ? "You are logged in " : "You are not logged in"} */}
        <div>
          <p
            style={{
              backgroundColor: "#303F60",
              height: "55px",
              width: "55px",
              paddingTop: "15px",
              paddingLeft: "25px",
            }}
          >
            My<span class="jobsword">Jobs</span>
          </p>
        </div>
        {/* <div></div> */}

        <div class="login-button">
          {isAuthorized ? (
            <div className="div-nav-element">
              <Link to={"/postjob"} className="post-job-link">
                <p> post a job</p>
              </Link>
              <button className="name-box-initial">
                {data && data.name.slice(0, 1)}
              </button>
              <button className="login" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="login-btn-navbar">
              <Link to={"/login"} style={{ backgroundColor: "#303F60" }}>
                <button className="login">Login/Signup</button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
