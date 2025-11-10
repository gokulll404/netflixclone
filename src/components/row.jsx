import MovieCard from "./moviecard";
import "../assets/css/row.css";

export default function Row(props) {
  return (
    <section className="row">
      <h2 className="row-title">{props.title}</h2>
      <div className="row-cards">
        <MovieCard url={props.fetchUrl} />
      </div>
    </section>
  );
}
