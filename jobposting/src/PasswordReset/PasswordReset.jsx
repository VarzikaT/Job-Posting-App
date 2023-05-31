import React from "react";
import "./PasswordReset.css";

function PasswordReset() {
  return (
    <div className="password-reset-wrapper">
      <div className="div1">
        <div class="password-box">
          <h3
            style={{
              backgroundColor: "#ffffff",
              marginLeft: "15px",
              marginTop: "10px",
            }}
          >
            Reset Your Password
          </h3>
          &nbsp;&nbsp;
          <p style={{ backgroundColor: "#ffffff", marginLeft: "15px" }}>
            Enter your new password below.
          </p>
          &nbsp;&nbsp;
          <label
            name="password"
            style={{ backgroundColor: "#ffffff", marginLeft: "15px" }}
          >
            New password
          </label>
          <input
            type="text"
            id="email"
            name="password"
            placeholder="Enter your password"
            style={{
              height: "30px",
              border: "0.8px solid #C6C6C6",
              backgroundColor: "#E8E8E833",
              borderRadius: "5px",
              marginTop: "10px",
              width: "460px",
              marginLeft: "15px",
            }}
          ></input>
          &nbsp;
          <label
            name="password"
            style={{ backgroundColor: "#ffffff", marginLeft: "15px" }}
          >
            Confirm new password
          </label>
          <input
            type="text"
            id="email"
            name="password"
            placeholder="Enter your Password"
            style={{
              height: "30px",
              border: "0.8px solid #C6C6C6",
              backgroundColor: "#E8E8E833",
              borderRadius: "5px",
              marginTop: "10px",
              width: "460px",
              marginLeft: "15px",
            }}
          ></input>
          &nbsp;
          <button
            style={{
              backgroundColor: " #43AFFF",
              color: "aliceblue",
              height: "42px",
              width: "105px",
              border: "0.5px solid #43AFFF",
              borderRadius: "5px",
              marginTop: "15px",
              marginLeft: "180px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
