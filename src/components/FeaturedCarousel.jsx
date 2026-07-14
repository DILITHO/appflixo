"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FeaturedCarousel({ movies }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!movies.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [movies]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!movies.length) return null;

  const movie = movies[current];

  return (
    <section
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(90deg,#050505,#1b1b1b)",
        borderRadius: "20px",
        overflow: "hidden",
        padding: isMobile ? "25px" : "50px",
        marginBottom: "60px",
        gap: "40px",
      }}
    >
      <div
        style={{
          flex: 1,
          textAlign: isMobile ? "center" : "left",
          order: isMobile ? 2 : 1,
        }}
      >
        <span
          style={{
            color: "#e50914",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          ⭐ PELÍCULA DESTACADA
        </span>

        <h1
          style={{
            color: "white",
            fontSize: isMobile ? "42px" : "55px",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        >
          {movie.title}
        </h1>

        <p
          style={{
            color: "#ccc",
            lineHeight: "1.8",
            fontSize: "18px",
            marginBottom: "25px",
          }}
        >
          {movie.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "35px",
            color: "#ddd",
          }}
        >
          <span>🎥 {movie.quality}</span>
          <span>📦 {movie.size}</span>
        </div>

        <Link href={`/pelicula/${movie.slug}`}>
          <button
            style={{
              background: "#e50914",
              color: "white",
              padding: "16px 40px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            🎬 Ver Película
          </button>
        </Link>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          order: isMobile ? 1 : 2,
        }}
      >
        <img
          src={movie.poster}
          alt={movie.title}
          style={{
            width: "100%",
            maxWidth: isMobile ? "260px" : "320px",
            borderRadius: "18px",
            boxShadow: "0 0 35px rgba(0,0,0,.6)",
          }}
        />
      </div>
    </section>
  );
}