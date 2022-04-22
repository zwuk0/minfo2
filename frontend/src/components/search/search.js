import React, { useState, useEffect, useRef } from "react";
import axios from "../../axios";
import "./Search.css";
import { ReactComponent as SearchIcon } from "../../static/Vector.svg";
import { Link } from "react-router-dom";

function Search() {
  const [find, setFind] = useState("");
  const [result, setResult] = useState([]);
  const [searchShow, setSearchShow] = useState(false);
  const resultRef = useRef();

  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  const handleChange = (e) => {
    setFind(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };
  useEffect(() => {
    if (find !== "") {
      axios
        .get(`/api/search/${find}`)
        .then((res) => setResult(res.data.results));
    } else {
    }
  }, [find]);

  document.addEventListener("click", (e) => {
    if (e.target !== resultRef) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  });

  return (
    <div className="search">
      <form className="search__form">
        <input type="text" className="form__input" onChange={handleChange} />
        <Link className="form__btn" to={`/search/${find}`}>
          <SearchIcon />
        </Link>
      </form>
      <div
        className={
          searchShow === true ? "search__results" : "search__results--hidden"
        }
        ref={resultRef}
      >
        {result.slice(0, 10).map((i) => (
          <Link
            className="search__results__link"
            key={i.id}
            to={!i.name ? `movie/${i.id}` : `tv/${i.id}`}
          >
            <div
              className={
                !i.poster_path ? "results__content--hidden" : "results__content"
              }
            >
              <img
                className="results__content_img"
                src={imgBaseUrl + `${i.poster_path}`}
                alt={i.id}
              />
              <h4>{i.title || i.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
