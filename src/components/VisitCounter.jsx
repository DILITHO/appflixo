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
    }).catch(() => {});
  }, []);

  return null;
}