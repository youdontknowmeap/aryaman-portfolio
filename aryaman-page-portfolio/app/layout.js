import "@/styles/globals.css";
import Grain from "@/components/Grain";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

import { SoundContextProvider } from "@/context/SoundContext";
import Sound from "@/components/Sound";

export const metadata = {
  title: "Aryaman Page — UI/UX Designer & Creative Director",
  description: "Portfolio of Aryaman Page — multidisciplinary designer working across UI/UX, motion, cinematography, and visual storytelling.",
  themeColor: "#080808",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#080808" />
      </head>
      <body className="bg-[#080808]">
        <a href="#hero" className="skip-link">Skip to content</a>
        <SoundContextProvider>
          <Preloader />
          <Grain />
          <Cursor />
          <Sound />
          <Nav />
          <SmoothScroll>
            <main className="relative z-10">{children}</main>
          </SmoothScroll>
        </SoundContextProvider>
      </body>
    </html>
  );
}

