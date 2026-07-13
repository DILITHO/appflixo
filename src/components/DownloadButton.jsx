"use client";

export default function DownloadButton({ movieId, downloadUrl }) {
  async function handleClick() {
    await fetch(`/api/movies/${movieId}/download`, {
      method: "POST",
    });

    window.open(downloadUrl, "_blank");
  }

  return (
    <button
      onClick={handleClick}
      style={{
        display: "inline-block",
        padding: "15px 35px",
        background: "#e50914",
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontSize: "18px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      ⬇ Descargar Ahora
    </button>
  );
}