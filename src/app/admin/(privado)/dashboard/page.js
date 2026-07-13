import { getMovies } from "../../../../lib/movies";

export default async function DashboardPage() {
  const movies = await getMovies();
  const featured = movies.filter((m) => m.featured).length;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#e50914", marginBottom: "30px" }}>
        Panel de Administración
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div
          style={{
            background: "#1f1f1f",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "220px",
          }}
        >
          <h2>Total de películas</h2>
          <p style={{ fontSize: "32px", margin: 0 }}>{movies.length}</p>
        </div>

        <div
          style={{
            background: "#1f1f1f",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "220px",
          }}
        >
          <h2>Destacadas</h2>
          <p style={{ fontSize: "32px", margin: 0 }}>{featured}</p>
        </div>
      </div>
    </main>
  );
}