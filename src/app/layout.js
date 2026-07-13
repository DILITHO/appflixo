import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "APPFLIXO - Descarga películas HD y Full HD",

  description:
    "Descarga películas gratis en HD, Full HD y 4K. Estrenos, clásicos y las mejores películas con enlaces directos.",

  verification: {
    google: "ByinOQQ5fgbyh1wwuc97wejVDTI-5NU5iFWy2SSWxQk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
