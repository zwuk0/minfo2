import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
// import axios from "../../axios";
import axios from "axios";

import "./Carousel.css";
import { Link } from "react-router-dom";

function Carousel() {
  const [movies, setMovies] = useState([]);

  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios.get("/api/movie/now_playing").then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const truncate = (text, start, end) => {
    let string = text;
    if (string.length > end) {
      return string.slice(start, end);
    } else {
      return text;
    }
  };
  return (
    <div className="carousel__container">
      <Slider {...settings}>
        {movies.slice(0, 10).map((i, index) => (
          <div key={i.id}>
            <div
              className="carousel"
              style={{
                backgroundImage: `url(${imgBaseUrl}${i.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="ca-slide__details">
                <Link className="ca-slide__title" to={`movie/${i.id}`}>
                  {i.title}
                </Link>
                <div className="ca-slide__ratings">
                  <span>Ratings: {i.vote_average}⭐</span>
                  <span>{truncate(i.release_date, 0, 4)}</span>
                </div>
                <p className="ca-slide__description">
                  {" "}
                  {truncate(i.overview, 0, 200)}
                </p>
                <button className="ca-slide__trailer-btn">
                  ▶️ Watch Trailer
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
