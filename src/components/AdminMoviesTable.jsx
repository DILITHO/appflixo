"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminMoviesTable({ movies }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
async function handleDelete(id) {
  if (!confirm("¿Seguro que deseas eliminar esta película?")) return;

  await fetch(`/api/movies/${id}`, {
    method: "DELETE",
  });

  router.refresh();
}
  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      ),
    [movies, search]
  );

  return (
    <>
      <input
        type="text"
        placeholder="🔍 Buscar película..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          width: "300px",
          margin: "20px 0",
        }}
      />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Título</th>
            <th>Destacada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td style={{ textAlign: "center" }}>
                {movie.featured ? "⭐" : ""}
              </td>
              <td style={{ textAlign: "center" }}>
  <a
    href={`/admin/movies/${movie.id}`}
    style={{ color: "#fff", textDecoration: "none" }}
  >
    ✏️
  </a>
  <button
  type="button"
  onClick={() => handleDelete(movie.id)}
  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "white",
    marginLeft: "8px",
  }}
>
  🗑️
</button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}