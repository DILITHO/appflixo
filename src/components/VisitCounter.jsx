"use client";

import { useEffect } from "react";

export default function VisitCounter() {
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const lastVisit = localStorage.getItem("appflixo-last-visit");

    if (lastVisit === today) return;

    localStorage.setItem("appflixo-last-visit", today);

    fetch("/api/visits", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
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