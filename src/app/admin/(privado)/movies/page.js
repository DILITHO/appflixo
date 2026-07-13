import { getMovies } from "../../../../lib/movies";
import AdminMoviesTable from "../../../../components/AdminMoviesTable";

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <main
      style={{
        padding: "30px",
        color: "white",
        background: "#111",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#e50914" }}>Administrar películas</h1>
      <a
  href="/admin/movies/new"
  style={{
    display: "inline-block",
    margin: "20px 0",
    padding: "10px 15px",
    background: "#e50914",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
  }}
>
  + Nueva película
</a>

      <AdminMoviesTable movies={movies} />
    </main>
  );
}