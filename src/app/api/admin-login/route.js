import { NextResponse } from "next/server";

export async function POST(request) {
  console.log(process.env.ADMIN_PASSWORD);
  const { password } = await request.json();
console.log("Escrita:", JSON.stringify(password));
console.log("Esperada:", JSON.stringify(process.env.ADMIN_PASSWORD));
  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ ok: true });

    response.cookies.set("admin", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  }

  return NextResponse.json(
    { error: "Contraseña incorrecta" },
    { status: 401 }
  );
}