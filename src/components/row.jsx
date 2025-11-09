// Row.jsx
import MovieCard from "./moviecard";
import "../assets/css/row.css";

export default function Row({ title, fetchUrl }) {
  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-cards">
        <MovieCard url={fetchUrl} />
      </div>
    </section>
  );
}
