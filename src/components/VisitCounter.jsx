"use client";

import { useEffect } from "react";

export default function VisitCounter() {
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const lastVisit = localStorage.getItem("appflixo-last-visit");

    if (lastVisit === today) return;

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

        localStorage.setItem("appflixo-last-visit", today);

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