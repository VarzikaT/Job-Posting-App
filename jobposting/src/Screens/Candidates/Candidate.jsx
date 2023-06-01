import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import "./Candidate.css";

function Candidate({ data, jobId, closePopup }) {
  const [jobApplicants, setJobApplicants] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    let config = {
      method: "get",
      url: `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobId}/candidates`,
      headers: {
        Authorization: `${user.token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Job Applicantss", response.data);
        if (response.data && response.data?.data)
          setJobApplicants(response?.data?.data);
        setTotal(response.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jobId]);

  console.log(jobApplicants);

  return (
    <div className="modal-wrapper">
      <div className="modal-popup">
        <div className="popup_inner">
          <div className="modal-container">
            <h4 className="modal-header">
              Applicants for this job <span onClick={closePopup}>close </span>{" "}
            </h4>

            <div className="line-divider"> </div>

            <p className="total-applicants"> Total {total} applications </p>
            <div className="applicants-container">
              {total === 0 ? (
                <div>
                  <div className="clipboard-icon">
                    <LuClipboardEdit
                      style={{ color: "gray", height: "60px", width: "60px" }}
                    />
                    <h4>No applications available!</h4>
                  </div>
                </div>
              ) : (
                jobApplicants.map((each) => (
                  <div className="applicant">
                    <div className="row-1">
                      <div className="applicant-avatar">
                        {each.name.slice(0, 1)}
                      </div>
                      <div className="applicant-details">
                        <h4>{each.email}</h4>
                        <h4>{each.name}</h4>
                      </div>
                    </div>
                    <div className="applicant-skills">
                      Skills
                      <p className="app-skill">{each.skills}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
