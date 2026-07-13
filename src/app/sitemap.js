import { getMovies } from "../lib/movies";

export default async function sitemap() {
  const movies = await getMovies();

  const movieUrls = movies.map((movie) => ({
    url: `https://appflixo.vercel.app/pelicula/${movie.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://appflixo.vercel.app",
      lastModified: new Date(),
    },

    ...movieUrls,
  ];
}