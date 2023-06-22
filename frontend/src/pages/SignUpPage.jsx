import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../services/authSlice";
import Button from "../components/atoms/Button";



const SignUpPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Dispatch the sign up action with email and password
    dispatch(signUp({ email, password }));
  };

  return (
    <div className={`sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} style={{ minHeight: "calc(100vh - 400px)" }}>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-white text-4xl font-semibold mb-6">Create Your Account</h1>
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
        <input
          name="Confirm Password"
          placeholder="Confirm password"
          type="password"
          className="py-2 px-4 rounded-md mb-4"
        />
        <p className="mt-4 text-sm font-medium text-white text-center">
              Already have an account?
              {' '}
            <a href="/login" className="font-medium text-gray-400 hover:opacity-75">
              Login
            </a>
            </p>
        <Button styles="mt-6 w-48" text="Sign Up" onClick={handleSignUp} />
      </div>
    </div>
  );
};

export default SignUpPage;
