import React from "react";
import Header from "../Headder/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import {CiLocationOn} from "react-icons/ci"
import './AllJobs.css';

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
    <div>
      {/* <Header/> */}
      <div className="div2-AllJobs">
        <h3 style={{backgroundColor:"#303F60", color:'white'}}>Jobs posted By you</h3>
      </div>
      <div className="textbox-AllJobs">
        {value &&
          value.map(user => (
        <div className="textbox" >
            <span style={{font:"13px", backgroundColor:"#FFFFFF"}}><p style={{backgroundColor:"#FFFFFF"}}>{(user.title)}</p></span>
            <span className="text">{(user.description)}</span>
            <div style={ {  display : "flex" , justifyContent : "space-between", marginTop : "40px", backgroundColor:'#FFFFFF'}}>
      
            <span className="text"> <CiLocationOn/>{(user.location)}</span>
            <button style={{backgroundColor:'lightblue', borderRadius:'3px',border:'none', width:'100px', fontSize:'13px'}}>View Applications</button>
            </div>
        </div>
          )) }     
      </div>
      <div className="last-div"></div>
    </div>
  );
}

export default AllJobs;
