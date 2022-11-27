import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useButtonLogin from "../../hooks/useButtonLogin";
import { UserContext } from "../UserContext";
import Component from "../layout/root";

const Home = () => {
  const [fetchData, setFetchData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
      setFetchData(data.results);
    })();
  }, []);

  const navigate = useNavigate();
  const handlerLogout = () => {
    alert("Want to Exit?");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        {fetchData.map((data) => {
          return (
            <div key={data.id} className="rounded border-2 ">
              <Link to={`/home/${data.id}`}>
                <img src={data.image} className="w-full" />
                <div className="grid grid-rows-2 gap-1">
                  <div className="text-3xl font-bold text-center">
                    {data.name}
                  </div>
                  <div className="location grid gap-1 ml-4 mb-2">
                    <div className="text-gray-600">Location</div>
                    <p className="text-lg font-semibold">
                      {data.location.name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <h1 className="font-bold">
        {fetchData.map((data) => {
          return <p key={data.id}>{data.name}</p>;
        })}
      </h1> */}
      <button onClick={handlerLogout}>Logout</button>
    </>
  );
};

export default Home;
