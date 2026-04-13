import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { FloatingElements } from "./components/FloatingElements";
import { MouseFollower } from "./components/MouseFollower";
import { InteractiveGrid } from "./components/InteractiveGrid";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <MouseFollower />
      <InteractiveGrid />
      <FloatingElements />
      <main className="relative z-10 pointer-events-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </div>
  );
}