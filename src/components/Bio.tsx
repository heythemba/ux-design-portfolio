import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Bio() {
  return (
    <section id="bio" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl text-slate-900">
              Hi, I'm Sarah Chen
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                I'm a UX designer with 6+ years of experience transforming complex challenges into elegant, user-friendly solutions. My approach combines research, empathy, and creativity to design products people love to use.
              </p>
              <p>
                Currently, I'm leading design initiatives at a fintech startup, where I focus on making financial services accessible and delightful for everyone. Previously, I worked with healthcare and e-commerce companies to reimagine their digital experiences.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new cities, experimenting with ceramics, or mentoring aspiring designers through local workshops.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <h3 className="text-slate-900">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['User Research', 'Interaction Design', 'Prototyping', 'Design Systems', 'Usability Testing', 'Wireframing'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753162658653-d33c53910d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyfGVufDF8fHx8MTc2MzU4MDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sarah Chen - UX Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
