import MovieForm from "../../../../../components/MovieForm";

export default function NewMoviePage() {
  return (
    <main
      style={{
        padding: "30px",
        color: "white",
        background: "#111",
        minHeight: "100vh",
      }}
    >
      <h1>Nueva película</h1>

      <MovieForm />
    </main>
  );
}