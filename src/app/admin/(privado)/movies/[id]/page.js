import { getMovieById } from "../../../../../lib/movies";
import MovieForm from "../../../../../components/MovieForm";
export default async function EditMoviePage({ params }) {
  const { id } = await params;
  const movie = await getMovieById(id);

  if (!movie) {
    return <h1>Película no encontrada</h1>;
  }

 return (
  <main
    style={{
      padding: "30px",
      color: "white",
      background: "#111",
      minHeight: "100vh",
    }}
  >
    <h1>Editar película</h1>

    <MovieForm movie={movie} />
  </main>
);
}