"use client";

import { useEffect, useState } from "react";

export default function VisitsDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/visits");
      const data = await res.json();

      setCount(data.count || 0);
    }

    load();
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