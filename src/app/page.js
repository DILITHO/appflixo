import { getMovies, getFeaturedMovies } from "../lib/movies";
import MovieCard from "../components/MovieCard";
import FeaturedCarousel from "../components/FeaturedCarousel";
import SearchBar from "../components/SearchBar";

export const dynamic = "force-dynamic";

export default async function Home() {
  const movies = await getMovies();
const totalMovies = movies.length;
const featuredMovies = await getFeaturedMovies();

// Mostrar solo las primeras 20 películas
const moviesPerPage = 20;
const currentMovies = movies.slice(0, moviesPerPage);


  return (
    <main
      style={{
        background: "#111",
        minHeight: "100vh",
        padding: "30px",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
  style={{
    textAlign: "center",
    marginBottom: "60px",
  }}
>
  <h1
    style={{
      fontSize: "70px",
      color: "#e50914",
      marginBottom: "15px",
      fontWeight: "bold",
    }}
  >
    APPFLIXO
  </h1>
  
  <p>Total de películas: {totalMovies}</p>

  <p
    style={{
      fontSize: "22px",
      color: "#ddd",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.7",
    }}
  >
    Descarga películas gratis en HD, Full HD y 4K.
    Encuentra estrenos, clásicos y las mejores películas
    con enlaces directos de descarga.
  </p>
</div>
<SearchBar movies={movies} />
<FeaturedCarousel movies={featuredMovies} />
<h2
  style={{
    color: "#e50914",
    fontSize: "32px",
    marginBottom: "25px",
  }}
>
  🔥 Últimas películas
</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {currentMovies.map((movie) => (
  <MovieCard
    key={movie.id}
    movie={movie}
  />
))}
</div>
    </main>
  );
}