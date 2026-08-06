import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { db } from "../../../firebase/config";
import { NextResponse } from "next/server";

export async function GET() {
  const ref = doc(db, "stats", "visits");

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      count: 0,
    });

    return NextResponse.json({
      count: 0,
    });
  }

  return NextResponse.json(snap.data());
}

export async function POST() {
  const ref = doc(db, "stats", "visits");

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      count: 1,
    });

    return NextResponse.json({
      count: 1,
    });
  }

  await updateDoc(ref, {
    count: increment(1),
  });

  const updated = await getDoc(ref);

  return NextResponse.json(updated.data());
}