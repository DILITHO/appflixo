import {
  getMovieBySlug,
  getRelatedMovies,
} from "../../../lib/movies";
import Link from "next/link";
import DownloadButton from "../../../components/DownloadButton";
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const movie = await getMovieBySlug(slug);

  if (!movie) {
    return {
      title: "Película no encontrada",
    };
  }

  return {
    title: `${movie.title} | AppFlixo`,
    description: movie.description,

    openGraph: {
      title: movie.title,
      description: movie.description,
      images: [movie.poster],
    },
  };
}
export default async function MoviePage({ params }) {

  const { slug } = await params;

  const movie = await getMovieBySlug(slug);

  const relatedMovies = await getRelatedMovies(slug);


  if (!movie) {
    return <h1>Película no encontrada</h1>;
  }

  return (
    <main
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
  style={{
    fontSize: "42px",
    color: "#e50914",
    marginBottom: "20px",
  }}
>
  {movie.title}
</h1>

      <img
  src={movie.poster}
  alt={movie.title}
  style={{
    width: "100%",
    maxWidth: "400px",
    borderRadius: "15px",
    display: "block",
    marginBottom: "25px",
    boxShadow: "0 0 25px rgba(0,0,0,.6)",
  }}
/>
      <p
  style={{
    lineHeight: "1.8",
    color: "#ddd",
    maxWidth: "900px",
    marginBottom: "30px",
  }}
>
  {movie.description}
</p>

     <div
  style={{
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    fontSize: "18px",
  }}
>
  <span>🎥 {movie.quality}</span>

  <span>📦 {movie.size}</span>

  <span>⬇ {movie.downloads || 0}</span>
</div>

      <DownloadButton
  movieId={movie.id}
  downloadUrl={movie.download}
/>

<div
  style={{
    marginTop: "25px",
    background: "#1f1f1f",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "450px",
  }}
>
  🔑 Contraseña:

  <br />

  <strong>{movie.password}</strong>
</div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Movie",
      name: movie.title,
      image: movie.poster,
      description: movie.description,
    }),
  }}
/>
<h2
  style={{
    marginTop: "60px",
    marginBottom: "25px",
    color: "#e50914",
  }}
>
  También te puede interesar
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
    gap: "20px",
  }}
>
  {relatedMovies.map((item) => (
    <Link
  key={item.id}
  href={`/pelicula/${item.slug}`}
  style={{
    textDecoration: "none",
    color: "white",
  }}
>
      <div
        style={{
          background: "#1f1f1f",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src={item.poster}
          alt={item.title}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "12px" }}>
          <strong>{item.title}</strong>
        </div>
      </div>
    </Link>
  ))}
</div>
    </main>
  );
}