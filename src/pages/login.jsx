import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  useEffect(() => {
    email.current.focus();
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email == "user@gmail.com" && password == "abc1234") {
      const token = "123456789";
      localStorage.setItem("token", token);

      if (!localStorage.getItem("token")) {
        alert("Silahkan Login");
        navigate("");
      }
      navigate("/Home");
    }
  };
  return (
    <>
      <div className="h-screen flex align-middle content-center items-center justify-center bg-gray-300">
        <div className="flex flex-col bg-white mx-auto w-1/3 h-3/4 p-6 border-b rounded-xl text-center justify-center space-y-8">
          <div className="title text-center text-xl font-semibold">LOGIN</div>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              placeholder="Email"
              type="text"
              ref={email}
              className="mb-4 border-0 border-b-2 p-3 w-full"
            />
            <input
              placeholder="Password"
              type="password"
              ref={password}
              className="mb-4 border-0 border-b-2 p-3 w-full"
            />

            <button
              type="submit"
              className=" h-12 w-full rounded-md bg-red-300 text-white hover:bg-red-400 mt-8"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
