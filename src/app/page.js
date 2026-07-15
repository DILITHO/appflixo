import Link from "next/link";
import { getMovies, getFeaturedMovies } from "../lib/movies";
import MovieCard from "../components/MovieCard";
import FeaturedCarousel from "../components/FeaturedCarousel";
import SearchBar from "../components/SearchBar";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }) {

  const params = await searchParams;
  const movies = await getMovies();
const totalMovies = movies.length;
const featuredMovies = await getFeaturedMovies();

// Cantidad de películas por página
const moviesPerPage = 20;

// Página actual
const currentPage = Number(params?.page || 1);

// Índices
const startIndex = (currentPage - 1) * moviesPerPage;
const endIndex = startIndex + moviesPerPage;

// Películas que se mostrarán
const currentMovies = movies.slice(startIndex, endIndex);

// Total de páginas
const totalPages = Math.ceil(totalMovies / moviesPerPage);

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
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "40px",
    flexWrap: "wrap",
  }}
>
  {currentPage > 1 && (
    <Link href={`/?page=${currentPage - 1}`}>
      <button
        style={{
          padding: "10px 18px",
          cursor: "pointer",
        }}
      >
        ← Anterior
      </button>
    </Link>
  )}

  {Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;

    return (
      <Link key={page} href={`/?page=${page}`}>
        <button
          style={{
            padding: "10px 15px",
            background: page === currentPage ? "#e50914" : "#333",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {page}
        </button>
      </Link>
    );
  })}

  {currentPage < totalPages && (
    <Link href={`/?page=${currentPage + 1}`}>
      <button
        style={{
          padding: "10px 18px",
          cursor: "pointer",
        }}
      >
        Siguiente →
      </button>
    </Link>
  )}
</div>
    </main>
  );
}