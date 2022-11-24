import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [fetchData, setFetchData] = useState([]);

  let api = `https://rickandmortyapi.com/api/character/?page=19`;

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
      <div>
        {fetchData.map((data) => {
          return (
            <div key={data.id}>
              {fetchData.map((data) => {
                return (
                  <>
                    <div className="card max-w-sm rounded overflow-hidden border-2">
                      <div className="mb-10">
                        <img src={data.image} className="w-full" />
                        <div className="px-6 py-4">
                          <h5>{data.name}</h5>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
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
