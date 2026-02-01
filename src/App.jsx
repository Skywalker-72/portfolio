// Proexpor// Production-ready single-page portfolio scaffold
// Stack: React + Vite + Tailwind + Framer Motion
// Deployment target: Netlify

import { Navigation } from "./pages/Navigation";
import { Hero } from "./pages/Hero";
import { About } from "./pages/About";
import { Stack } from "./pages/Stack";
import { CaseStudy } from "./pages/CaseStudy";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <Navigation />
      <Hero />
      <About />
      <Stack />
      <CaseStudy />
      <Contact />
    </main>
  );
}
