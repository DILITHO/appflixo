"use client";

import { useState } from "react";

export default function MovieForm({ movie = {} }) {
  const [title, setTitle] = useState(movie.title || "");
  const [slug, setSlug] = useState(movie.slug || "");
  const [description, setDescription] = useState(movie.description || "");
const [poster, setPoster] = useState(movie.poster || "");
const [download, setDownload] = useState(movie.download || "");
const [quality, setQuality] = useState(movie.quality || "");
const [featured, setFeatured] = useState(movie.featured || false);
const [size, setSize] = useState(movie.size || "");
const [password, setPassword] = useState(movie.password || "");
  async function handleSubmit(e) {
    e.preventDefault();

    const isEditing = !!movie.id;

const url = isEditing
  ? `/api/movies/${movie.id}`
  : "/api/movies";

const method = isEditing ? "PUT" : "POST";

await fetch(url, {
  method,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title,
    slug,
    description,
    poster,
    download,
    quality,
    size,
    password,
    featured,
    downloads: movie.downloads ?? 0,
  }),
});
    alert("Cambios guardados");
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", marginTop: "20px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px" }}
      />

      <input
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px" }}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={6}
        style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px" }}
      />
<input
  type="text"
  value={poster}
  onChange={(e) => setPoster(e.target.value)}
  placeholder="URL del póster"
  style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px" }}
/>

<input
  type="text"
  value={download}
  onChange={(e) => setDownload(e.target.value)}
  placeholder="Enlace de descarga"
  style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px" }}
/>

<input
  type="text"
  value={quality}
  onChange={(e) => setQuality(e.target.value)}
  placeholder="Calidad"
  style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px" }}
/>

<input
  type="text"
  value={size}
  onChange={(e) => setSize(e.target.value)}
  placeholder="Tamaño"
  style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px" }}
/>

<input
  type="text"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Contraseña"
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
  }}
/>

<label style={{ display: "block", marginBottom: "15px" }}>
  <input
    type="checkbox"
    checked={featured}
    onChange={(e) => setFeatured(e.target.checked)}
  />{" "}
  Película destacada
</label>
      <button
        type="submit"
        style={{
          padding: "12px 20px",
          background: "#e50914",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Guardar cambios
      </button>
    </form>
  );
}