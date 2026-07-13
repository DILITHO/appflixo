import { getMovies } from "../lib/movies";

export default async function sitemap() {
  const movies = await getMovies();

  const movieUrls = movies.map((movie) => ({
    url: `http://localhost:3000/pelicula/${movie.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
    },

    ...movieUrls,
  ];
}