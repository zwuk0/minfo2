import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./movie.css";

function Movie() {
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";
  let params = useParams();
  const [state, setState] = useState({
    similar: [],
    reviews: [],
    movie: [],
    trailers: [],
    recommendations: [],
    hideRecom: false,
  });

  // All the Fetch APIs are wrapped inside useEffect to stop rerendering everytime.
  useEffect(() => {
    let trailers = `/api/movie/${params.id}/video`;
    let details = `/api/movie/${params.id}`;
    let recommendations = `/api/movie/${params.id}/recommendations`;
    let similar = `/api/movie/${params.id}/similar`;
    let reviews = `/api/movie/${params.id}/reviews`;

    const reqTrailers = axios.get(trailers);
    const reqDetails = axios.get(details);
    const reqRecommendations = axios.get(recommendations);
    const reqSimilar = axios.get(similar);
    const reqReviews = axios.get(reviews);

    axios
      .all([
        reqTrailers,
        reqDetails,
        reqRecommendations,
        reqSimilar,
        reqReviews,
      ])
      .then(
        axios.spread((...responses) => {
          setState({
            movie: responses[1].data,
            similar: responses[3].data.results,
            trailers: responses[0].data.results,
            recommendations: responses[2].data.results,
            reviews: responses[4].data.results,
          });
        })
      )
      .catch((error) => console.log(error));
  }, [params.id]);

  // track mouse wheel to scroll horizontally in movie recommendations section.
  useEffect(() => {
    const scrollContainer = document.querySelector(".recom__content");
    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();

      scrollContainer.scrollLeft += e.deltaY;
    });
  }, []);

  // runtime function to calculate the movie total screen time in hours and minutes.
  const runtime = (time) => {
    let hour = Math.floor(time / 60);
    let minutes = time - 60 * hour;
    return hour + "h " + minutes + "m";
  };
  console.log();
  return (
    <div className="movie">
      {state.trailers
        .filter((t) => t.type === "Trailer")
        .slice(0, 1)
        .map((i) => (
          <div key={i.id + "i"} className="movie__trailer">
            {i.key ? (
              <iframe
                title="trailer-video"
                src={`https://www.youtube.com/embed/${i.key}`}
                frameBorder="0"
                width="100%"
                className="youtube__video"
              ></iframe>
            ) : (
              <img
                className="movie__backdrop"
                src={`${imgBaseUrl}${state.movie.backdrop_path}`}
                alt={i.title}
              />
            )}
          </div>
        ))}
      <div className="movie__content">
        <div className="movie__content--left">
          <img
            src={`${imgBaseUrl}${state.movie.poster_path}`}
            alt={state.movie.title}
            className="movie__poster"
          />
        </div>
        <div className="movie__content--right">
          <h4 className="movie__title">{state.movie.title}</h4>

          <p className="movie__overview">{state.movie.overview}</p>
          <ul className="movie__subtitle">
            <li className="movie-subtitle__item">
              Ratings: {state.movie.vote_average} ⭐
            </li>
            <li className="movie-subtitle__item">
              Screen Time: {runtime(state.movie.runtime)}
            </li>
            <li className="movie-subtitle__item">
              Release Date: {state.movie.release_date}
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          state.recommendations.length !== 0
            ? "movie__recom"
            : "movie__recom--hide"
        }
      >
        <h2>Recommendations</h2>
        <div className="recom__content">
          <div className="recom__row">
            {state.recommendations.map((i) => (
              <div key={i.id + "m"} className="recom-row__item">
                <div className="recom__img">
                  <img src={`${imgBaseUrl}${i.poster_path}`} alt={i.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
