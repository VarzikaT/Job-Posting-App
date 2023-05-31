import React from "react";
import { Form, useNavigate } from "react-router-dom";
import "./Modal.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Modal() {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [location, setlocation] = useState(" ");
  const navigate=    useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem("user"));


    const config = {
      method: "post",
      url: "https://jobs-api.squareboat.info/api/v1//jobs/",
      headers: {
        Authorization: `${user.token}`,
        "Content-Type": "application/json",
      },
      data: {
        title: title,
        description: description,
        location: location,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        // navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="modal-form">
        <form>
          <h3>Post a job</h3>
          <br></br>
          <label>Title</label>
          <br></br>
          <input
            type={Text}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              marginTop: "10px",
              backgroundColor: "lightgrey",
              borderRadius: "3px",
              border: "0.8px solid grey",
              height: "26px",
              width: "380px",
            }}
          ></input>
          <br></br>
          <br></br>
          <label>
           Description
          </label>
          <br></br>

          <input
            type={Text}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              backgroundColor: "lightgrey",
              borderRadius: "3px",
              marginTop: "10px",
              border: "0.8px solid grey",
              height: "26px",
              width: "380px",
            }}
          ></input>
          <br></br>
          <br></br>
          <label>
           Location
          </label>
          <br></br>
          <input
            type={Text}
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            style={{
              backgroundColor: "lightgrey",
              borderRadius: "3px",
              marginTop: "10px",
              border: "0.8px solid grey",
              height: "26px",
              width: "380px",
            }}
          ></input>
          <br></br>

          <button class="submit-button" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
          <br></br>
          
        </form>
      </div>
    </div>
  );
}

export default Modal;
