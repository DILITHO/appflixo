export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://appflixo.vercel.app/sitemap.xml",
  };
}