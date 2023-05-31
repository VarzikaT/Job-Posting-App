import React from "react";
import { LuClipboardEdit } from "react-icons/lu";
import "./PostAjob.css";
import Modal from "../../Components/modal/Modal";
import { useState } from "react";
import Loginpage from "../../Loginpage/Loginpage";

const PostAjob = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="postajob-wrapper">
        <div className="div2-AllJobs">
          <h3 style={{ backgroundColor: "#303F60", color: "white" }}>
            Jobs posted By you
          </h3>
        </div>
        <div className="div-postjob">
          <div className="div-clipboard-icon">
            <LuClipboardEdit style={{color:"gray", height:"40px", width:"50px"}} />
          </div>
          <p style={{ fontSize: "20px", color: "gray" }}>
            Your posted jobs will show here!
          </p>
          <button
            className="postjob-btn"
            onClick={() => setShowModal(!showModal)}
          >
            Post a Job
          </button>
        </div>
      </div>
      {/* <Modal /> */}
    </>
  );
};

export default PostAjob;
