import "../assets/css/banner.css";
import axios from "axios";
import { useEffect, useState, } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;



export default function Banner() {

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const trendingMovies = response.data.results[8];
        console.log(trendingMovies);
        setMovie(trendingMovies)
      })

  }, []);



  if (!movie) {
    return (
      <header className="banner">
        <h1>Loading...</h1>
      </header>
    );
  }


  return (
    <header className="banner" style={{
      backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
    }}>
      <div className="banner-fade">
        <div className="banner-content">
          <h1 className="banner-title">{movie.title}</h1>
          <p className="banner-desc">{movie.overview}</p>
          <div className="banner-buttons">
            <button className="btn play" >Play</button>
            <button className="btn info">More Info</button>
          </div>
        </div>
      </div>
    </header>
  );
}
