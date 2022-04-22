import "./home.css";
import Carousel from "../../components/carousel/Carousel";
import Grid from "../../components/grid/Gird";
// import axios from "../../axios";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <Carousel />
      </div>
      <div className="home__body">
        <Grid
          title={"Trending Movies"}
          link={"/movie"}
          url={"/api/movie/trending"}
        />
      </div>
    </div>
  );
}

export default Home;
