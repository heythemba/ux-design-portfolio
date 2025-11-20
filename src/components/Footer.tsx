import { Button } from "./ui/button";
import { Mail, Linkedin, Github, Dribbble } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-4xl md:text-5xl">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
            <Button size="lg" variant="secondary" className="gap-2">
            <Mail className="w-5 h-5" />
            haythem.bag@gmail.com
          </Button>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400">
              © 2025 Haythem Baganna. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Dribbble className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
