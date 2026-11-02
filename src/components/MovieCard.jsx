import Link from "next/link";
import PosterImage from "./PosterImage";
export default function MovieCard({ movie }) {
  return (
    <Link
  href={`/pelicula/${movie.slug}`}
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
  <div
    style={{
      background: "#1a1a1a",
      borderRadius: "12px",
      overflow: "hidden",
      minHeight: "520px",
      display: "flex",
      flexDirection: "column",
    }}
    >
      
<PosterImage
  src={movie.poster}
  alt={movie.title}
  style={{
    width: "100%",
    height: "320px",
    objectFit: "cover",
    display: "block",
  }}
/>

      <div style={{ padding: "20px" }}>
        <h2
          style={{
            color: "white",
            marginBottom: "10px",
          }}
        >
          {movie.title}
        </h2>



      </div>
        </div>
      </Link>
  );
}