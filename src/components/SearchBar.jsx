"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchBar({ movies }) {
  const [search, setSearch] = useState("");

  const results = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto 50px",
        position: "relative",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Buscar películas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "18px",
          borderRadius: "12px",
          border: "none",
          outline: "none",
          fontSize: "18px",
        }}
      />

      {search && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            background: "#1a1a1a",
            marginTop: "8px",
            borderRadius: "12px",
            overflow: "hidden",
            zIndex: 1000,
            maxHeight: "450px",
            overflowY: "auto",
          }}
        >
          {results.length > 0 ? (
            results.map((movie) => (
              <Link
                key={movie.id}
                href={`/pelicula/${movie.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "12px",
                  textDecoration: "none",
                  color: "white",
                  borderBottom: "1px solid #333",
                }}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  style={{
                    width: "50px",
                    height: "75px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />

                <div>
                  <strong>{movie.title}</strong>
                  <br />
                  <small>{movie.quality}</small>
                </div>
              </Link>
            ))
          ) : (
            <div
              style={{
                padding: "20px",
                color: "#aaa",
              }}
            >
              No se encontraron películas.
            </div>
          )}
        </div>
      )}
    </div>
  );
}