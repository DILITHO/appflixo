import { doc, updateDoc, increment } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../../../../firebase/config";

export async function POST(request, { params }) {
  const { id } = await params;

  await updateDoc(doc(db, "movies", id), {
    downloads: increment(1),
  });

  return NextResponse.json({ ok: true });
}