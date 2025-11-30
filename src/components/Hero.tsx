import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "../Assets/hero-bg.png";

export function Hero() {
  const scrollToBio = () => {
    document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Hero background image imported from `src/Assets/hero-bg.jpg`.
  // Place your image at that path so Vite can bundle and resolve it.
  const bgUrl = heroBg;

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 80%), url(${bgUrl})`,
      }}
    >
      <div className="max-w-4xl text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-slate-600 mb-4">
          UX/UI Designer
        </div>
        <h1 className="text-5xl md:text-7xl text-slate-900 tracking-tight">
          Crafting Digital Experiences That Matter
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          I'm a UX designer passionate about creating intuitive, user-centered solutions that solve real problems and delight users.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" onClick={scrollToBio}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </Button>
        </div>
      </div>
      <button 
        onClick={scrollToBio} className="absolute bottom-8 animate-bounce" aria-label="Scroll down" >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </button>
    </section>
  );
}
