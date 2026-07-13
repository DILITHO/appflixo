import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../../firebase/config";

export async function POST(request) {
  const data = await request.json();
const q = query(
  collection(db, "movies"),
  where("slug", "==", data.slug)
);

const existing = await getDocs(q);

if (!existing.empty) {
  return NextResponse.json(
    { error: "Ya existe una película con ese slug" },
    { status: 400 }
  );
}
  const docRef = await addDoc(collection(db, "movies"), data);

  return NextResponse.json({ id: docRef.id, ok: true });
}