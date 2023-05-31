import React from "react";
import Header from "../Headder/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import "./AllJobs.css";

function AllJobs() {
  const [value, setvalue] = useState([]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    let config = {
      method: "get",
      url: "https://jobs-api.squareboat.info/api/v1/recruiters/jobs",
      headers: {
        Authorization: `${user.token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setvalue(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="all-jobs-wrapper">
      {/* <Header/> */}
      <div className="div2-AllJobs">
        <h3 style={{ backgroundColor: "#303F60", color: "white" }}>
          Jobs posted By you
        </h3>
      </div>
      <div className="textbox-AllJobs">
        {value &&
          value.map((user) => (
            <div className="textbox">
              <div className="text-container">

              <span style={{ fontSize: "17px", backgroundColor: "#FFFFFF" }}>
                <p style={{ backgroundColor: "#FFFFFF" }}>{user.title}</p>
              </span>
              <span style={{fontSize:'12px'}}>{user.description}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <span className="text">
                  <CiLocationOn
                    style={{ color: "#43AFFF", height: "30px", width: "30px" }}
                  />
                  {user.location}
                </span>
                <button
                  style={{
                    backgroundColor: "#43AFFF33",
                    borderRadius: "4px",
                    border: "none",
                    minWidth: "100px",
                    fontSize: "13px",
                    padding : "3px 10px"
                  }}
                >
                  View Applications
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="last-div"></div>
    </div>
  );
}

export default AllJobs;
