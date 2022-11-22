import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handlerLogout = () => {
    alert("Anda telah keluar");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <h1 className="font-bold"> Home </h1>
      <button onClick={handlerLogout}>Logout</button>
    </>
  );
};

export default Home;
