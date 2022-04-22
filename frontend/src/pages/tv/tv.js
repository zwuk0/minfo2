import React, { useEffect, useState } from "react";
import "./tv.css";
import { useParams } from "react-router-dom";
import axios from "../../axios";

function Tv() {
  const params = useParams();
  const [tv, setTv] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/tv/${params.id}`)
      .then((res) => setTv(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  console.log(tv);
  return (
    <div>
      Tv id: {params.id} <h1>{tv.name}</h1>
    </div>
  );
}
export default Tv;
