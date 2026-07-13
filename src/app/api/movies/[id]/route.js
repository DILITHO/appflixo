import { doc, updateDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = await params;
  const data = await request.json();

  await updateDoc(doc(db, "movies", id), data);

  return NextResponse.json({ ok: true });
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  await deleteDoc(doc(db, "movies", id));

  return NextResponse.json({ ok: true });
}