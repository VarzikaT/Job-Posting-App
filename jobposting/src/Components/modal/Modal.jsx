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
    <div className="modal-wrapper" >
      <div className="div1-modal">
      <div className="modal-form">
        <form>
          <h3>Post a job</h3>
          <br></br>
          <label>Job Title*</label>
          <br></br>
          <input
            type={Text}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="modal-inputs"
          ></input>
          <br></br>
          <br></br>
          <label>
           Description*
          </label>
          <br></br>

          <textarea
            type={Text}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="modal-inputs"
            style={{height:"60px"}}
          ></textarea>
          <br></br>
          <br></br>
          <label>
           Location*
          </label>
          <br></br>
          <input
            type={Text}
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            className="modal-inputs"
          ></input>
          <br></br>

          <button class="submit-button" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
          <br></br>
          
        </form>
      </div>
      </div>
    </div>
  );
}

export default Modal;
