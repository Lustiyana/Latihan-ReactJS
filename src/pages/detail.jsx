import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
      setFetchData(data);
    })();
  }, []);
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="grid grid-cols-2 gap-8">
          <img src={fetchData.image} alt="" />
          <div className="details">
            <div className="text-2xl font-bold">{fetchData.name}</div>
            <div>Species: {fetchData.species}</div>
            <div>Gender: {fetchData.gender}</div>
            <div>Status: {fetchData.status}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
