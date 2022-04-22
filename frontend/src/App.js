import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/home";
import Movie from "./pages/movie/movie";
import Tv from "./pages/tv/tv";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="tv/:id" element={<Tv />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
