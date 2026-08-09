"use client";

import { useEffect } from "react";

export default function VisitCounter() {
  useEffect(() => {
    fetch("/api/visits", {
      method: "POST",
      cache: "no-store",
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Error registrando visita");
        }

        console.log("Visita registrada:", data);

        window.dispatchEvent(
          new CustomEvent("appflixo-visit-updated", {
            detail: data.count,
          })
        );
      })
      .catch((error) => {
        console.error("Error registrando visita:", error);
      });
  }, []);

  return null;
}