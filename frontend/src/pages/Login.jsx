import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../services/authSlice";
import Button from "../atoms/Button";


const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <div className={`sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} style={{ minHeight: "calc(100vh - 400px)" }}>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-white text-4xl font-semibold mb-6">Log In</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 px-4 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-2 px-4 rounded-md mb-4"
        />
        <div className="text-sm mt-1">
          <a href="/forgot-password" className="font-medium text-gray-400 hover:opacity-75">
            Forgot password?
          </a>
        </div>
        <Button styles="mt-6 w-52" text="Login" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
