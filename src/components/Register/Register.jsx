import React, { useState } from "react";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const auth = getAuth(app);
  const handleRegister = (event) => {
    event.preventDefault();
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      console.log("okay thik ace ");
    } else {
      setError("password thik nai");
      return;
    }
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccess("You have successfully registered!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      setError("Please enter email and password.");
    }
  };
  console.log(email, password);
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              {error && <p className="text-danger">{error}</p>}
              {success && <p className="text-success">{success}</p>}
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
                  required
                />
                <div className="password-container">
                  {showPass ? (
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="password p-3 m-2"
                      type="text"
                      placeholder="enter your password"
                      required
                    />
                  ) : (
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="password p-3 m-2"
                      type="password"
                      placeholder="enter your password"
                      required
                    />
                  )}
                </div>
                <button onClick={() => setShowPass(!showPass)}>
                  Show Password
                </button>

                <button
                  onClick={handleRegister}
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Register
                </button>
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
