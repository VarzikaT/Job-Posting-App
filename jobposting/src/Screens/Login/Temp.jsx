import axios from "axios";
import { useState } from "react";
import "./Login.css";

const Temp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Clicked login");

    console.log("login ", email, password);

    const config = {
      method: "POST",
      url: "https://jobs-api.squareboat.info/api/v1//auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: "varzika@gmail.com",
        password: "varzikaT",
      },
    };

    axios(config)
      .then(function (response) {
        console.log("response  " ,response);
      })
      .catch(function (error) {
        console.log("errrror " ,error);
      })
      .finally(() => {});
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        

        <div className="login-page"></div>
      </div>
    </div>
  );
};

export default Temp;
