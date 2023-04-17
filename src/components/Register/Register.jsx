import React, { useState } from "react";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  console.log(email, password);
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <form action="">
                <input
                  className="email p-3 m-2"
                  type="text"
                  placeholder="enter your Name"
                  required
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="password p-3 m-2"
                  type="password"
                  placeholder="enter your password"
                />

                <button className="btn btn-info w-75 p-2 mt-3">Register</button>
                <p className="p-2">
                  <small className="text-info">
                    already have account? login here..
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
              alt=""
            />
          </div>
        </div>
        <SocialLoginBtn />
      </div>
    </div>
  );
};

export default Register;
