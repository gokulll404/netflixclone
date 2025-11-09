import "../assets/css/moviecard.css";
import axios from "axios";
import { useEffect, useState } from "react";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export default function MovieCard(props) {
  const [movie, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
    });
  }, [props.url]);

  const handleCardClick = async (movie) => {
    setSelectedMovie(movie);

    const type = movie.media_type === "tv" ? "tv" : "movie";
    const res = await axios.get(`${API_URL}/${type}/${movie.id}/videos?api_key=${API_KEY}`);
    const trailers = res.data.results.filter((v) => v.type === "Trailer");

    if (trailers.length > 0) {
      setTrailer(`https://www.youtube.com/embed/${trailers[0].key}?autoplay=1`);
    } else {
      setTrailer(null);
    }
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setTrailer(null);
  };

  return (
    <>
      <div className="movie-container">
        {movie.map((obj) => (
          <div className="card" key={obj.id} onClick={() => handleCardClick(obj)}>
            <img
              src={`${IMAGE_BASE_URL}${obj.backdrop_path}`}
              alt={obj.name || obj.title}
              loading="lazy"
            />
            <div className="card-title">{obj.name || obj.title}</div>
            <div className="card-rating">⭐ {obj.vote_average}</div>
          </div>
        ))}
      </div>

      {/* Popup Modal with Blurred Background */}
      {selectedMovie && (
        <div className="movie-modal">
          <div
            className="modal-bg"
            style={{
              backgroundImage: `url(${IMAGE_BASE_URL}${selectedMovie.backdrop_path})`,
            }}
          ></div>

          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2>{selectedMovie.title || selectedMovie.name}</h2>
            <p className="movie-overview">{selectedMovie.overview}</p>
            <p><strong>Rating:</strong> ⭐ {selectedMovie.vote_average}</p>

            {trailer ? (
              <iframe
                width="100%"
                height="315"
                src={trailer}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>No trailer available</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
