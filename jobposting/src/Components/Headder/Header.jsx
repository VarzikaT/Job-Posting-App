import React from "react";
import "./Header.css";

const Header = () => {
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <nav class="navbar">
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
        <div></div>
        <button className="login" onClick={logout}>
          Logout
        </button>
        <div class="login-button">
          <button className="login">Login/Signup</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
