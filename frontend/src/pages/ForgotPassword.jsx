import React from "react";
import Button from "../components/atoms/Button";


const ForgotPassword = () => {


  return (
    <div className={`sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} style={{ minHeight: "calc(100vh - 400px)" }}>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-white text-4xl font-semibold mb-6">Forgot Password</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="py-2 px-4 rounded-md mb-4"
        />
        <Button styles="mt-5 w-52 h-full" text="Recover" />
      </div>
    </div>
  );
};

export default ForgotPassword;
