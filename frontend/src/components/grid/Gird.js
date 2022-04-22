import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "../../axios";
import axios from "axios";
import truncate from "../../helpers/truncate";
import "./Grid.css";

function Grid(props) {
  const [data, setData] = useState([]);
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get(`${props.url}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, [props.url]);

  return (
    <div className="grid">
      <h2 className="grid__head"> {props.title}</h2>
      <div className="grid__content">
        {data.slice(0, 18).map((i) => (
          <div key={i.id + "g"} className="grid-items">
            <Link className="grid__link" to={`${props.link}/${i.id}`}>
              <div>
                <img
                  className="grid__img"
                  src={imgBaseUrl + `${i.poster_path}`}
                  alt={i.title}
                />
                <h6 className="grid__title">
                  {truncate(i.title || i.name, 0, 25)}
                </h6>
                <span className="grid__date">{i.release_date}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
