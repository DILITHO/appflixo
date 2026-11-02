
"use client";

import { useState, useEffect } from "react";

export default function PosterImage({ src, alt = "", ...props }) {
  const [failed, setFailed] = useState(false);

  const posterUrl =
    typeof src === "string" ? src.trim() : "";

  useEffect(() => {
    setFailed(false);
  }, [posterUrl]);

  return (
    <img
      {...props}
      src={
        failed || !posterUrl
          ? "/poster-no-disponible.png"
          : posterUrl
      }
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
