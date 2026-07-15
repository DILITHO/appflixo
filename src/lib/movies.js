import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

import { db } from "../firebase/config";

export async function getMovies() {
  const querySnapshot = await getDocs(collection(db, "movies"));

  const movies = [];

  querySnapshot.forEach((doc) => {
    movies.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  movies.sort((a, b) => {
  return (b.createdAt || 0) - (a.createdAt || 0);
});

return movies;
}

export async function getMovieBySlug(slug) {
  const q = query(
    collection(db, "movies"),
    where("slug", "==", slug)
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  return {
    id: querySnapshot.docs[0].id,
    ...querySnapshot.docs[0].data(),
  };
}

export async function getRelatedMovies(currentSlug) {
  const movies = await getMovies();

  return movies
    .filter((movie) => movie.slug !== currentSlug)
    .slice(0, 6);
}
  export async function getFeaturedMovies() {
  const q = query(
    collection(db, "movies"),
    where("featured", "==", true)
  );

  const querySnapshot = await getDocs(q);

  const movies = [];

  querySnapshot.forEach((doc) => {
    movies.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return movies;
}
export async function getMovieById(id) {
  const movies = await getMovies();
  return movies.find((movie) => movie.id === id) || null;
}