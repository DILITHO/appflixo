"use client";

import { useEffect, useState } from "react";

export default function VisitsDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function loadVisits() {
      try {
        const res = await fetch("/api/visits");
        const data = await res.json();

        setCount(data.count || 0);
      } catch (error) {
        console.error("Error obteniendo visitas:", error);
      }
    }

    loadVisits();

    function handleVisitUpdated(event) {
      setCount(event.detail || 0);
    }

    window.addEventListener(
      "appflixo-visit-updated",
      handleVisitUpdated
    );

    return () => {
      window.removeEventListener(
        "appflixo-visit-updated",
        handleVisitUpdated
      );
    };
  }, []);

  return (
    <div
      style={{
        background: "#1a1a1a",
        padding: "10px 18px",
        borderRadius: "12px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
      }}
    >
      👀 {count.toLocaleString()} visitas
    </div>
  );
}