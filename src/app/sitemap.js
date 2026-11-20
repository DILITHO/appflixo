import { getMovies } from "../lib/movies";

export default async function sitemap() {
  const movies = await getMovies();

  const movieUrls = [
    ...new Map(
      movies
        .filter(
          (movie) =>
            typeof movie.slug === "string" &&
            movie.slug.trim() !== ""
        )
        .map((movie) => {
          const slug = movie.slug.trim();

          return [
            slug,
            {
              url: `https://appflixo.vercel.app/pelicula/${encodeURIComponent(slug)}`,
            },
          ];
        })
    ).values(),
  ];

  return [
    {
      url: "https://appflixo.vercel.app",
    },
    ...movieUrls,
  ];
}
