import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  impact: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "FinFlow",
    subtitle: "Banking App Redesign",
    description: "Reimagined the mobile banking experience to reduce transaction time by 60% and increase user satisfaction scores from 3.2 to 4.7 stars.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNTg5MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile", "FinTech", "iOS & Android"],
    impact: "60% faster transactions"
  },
  {
    id: 2,
    title: "HealthHub",
    subtitle: "Patient Portal Dashboard",
    description: "Designed an intuitive dashboard for patients to manage appointments, view test results, and communicate with healthcare providers seamlessly.",
    image: "https://images.unsplash.com/photo-1588511986632-592db3d6c81f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwZGVzaWdufGVufDF8fHx8MTc2MzYyMzY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web", "Healthcare", "Dashboard"],
    impact: "3x increase in portal usage"
  },
  {
    id: 3,
    title: "StyleBox",
    subtitle: "E-commerce Platform",
    description: "Created a personalized shopping experience using AI-powered recommendations, resulting in 45% higher conversion rates and improved customer retention.",
    image: "https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjM1Nzg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["E-commerce", "Mobile & Web", "AI"],
    impact: "45% higher conversions"
  },
  {
    id: 4,
    title: "FitTrack Pro",
    subtitle: "Fitness & Wellness App",
    description: "Developed a comprehensive fitness tracking app with personalized workout plans, nutrition logging, and social features to keep users motivated.",
    image: "https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc2MzU1OTY1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile", "Health", "Social"],
    impact: "85% user retention"
  }
];

export function CaseStudies() {
  return (
    <section id="work" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-4">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore how I've helped companies create meaningful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl text-slate-900 mb-1">{study.title}</h3>
                  <p className="text-slate-500">{study.subtitle}</p>
                </div>
                <p className="text-slate-600">
                  {study.description}
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {study.impact}
                  </div>
                </div>
                <Button variant="ghost" className="group/btn">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
