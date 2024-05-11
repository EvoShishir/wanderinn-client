import React, { useState } from "react";
import CustomButton from "../../Components/Core/CustomButton/CustomButton";
import toast from "react-hot-toast";
import Layout from "../../Components/Layout/Layout";
import "./LoginPage.scss"; // Import SCSS file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.length > 0 && password.length > 0) {
      toast.success("Login Successful");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <Layout>
      <div className="loginContainer">
        <div className="loginForm">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="formInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="formInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={handleLogin} className="submitButton">
            <CustomButton styles="w-full" text="Continue with email" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
