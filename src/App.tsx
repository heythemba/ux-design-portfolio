import { Hero } from "./components/Hero";
import { Bio } from "./components/Bio";
import { CaseStudies } from "./components/CaseStudies";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Bio />
      <CaseStudies />
      <Footer />
    </div>
  );
}
