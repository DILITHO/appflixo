"use client";
import { useState } from "react";
export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    async function handleLogin() {
  setError("");

  const res = await fetch("/api/admin-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  if (res.ok) {
    window.location.href = "/admin";
  } else {
    setError("Contraseña incorrecta");
  }
}
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <form
        style={{
          background: "#1a1a1a",
          padding: "40px",
          borderRadius: "15px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#e50914" }}>
          Iniciar sesión
        </h1>

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "none",
          }}
        />
{error && (
  <p style={{ color: "#e50914", marginBottom: "15px" }}>
    {error}
  </p>
)}
        <button
          type="button"
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#e50914",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>
      </form>
    </main>
  );
}