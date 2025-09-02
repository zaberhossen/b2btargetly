import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SectionWrapper from "../section-wrapper";
import { 
  Database, 
  Search, 
  Linkedin, 
  MousePointerSquareDashed, 
  LayoutGrid, 
  Clapperboard, 
  PenTool, 
  Presentation, 
  Monitor, 
  Smartphone, 
  Palette, 
  Users
} from "lucide-react";
import React from "react";

type Service = {
  title: string;
  icon: React.ElementType;
};

type ServiceCategory = {
  category: string;
  services: Service[];
};

const serviceData: ServiceCategory[] = [
  {
    category: "Lead & Data Services",
    services: [
      { title: "List & Prospect Building", icon: Database },
      { title: "B2B Lead Generation", icon: Linkedin },
      { title: "Data Scraping & Enrichment", icon: Search },
      { title: "Web Research & Data Entry", icon: MousePointerSquareDashed },
    ],
  },
  {
    category: "Creative & Marketing",
    services: [
      { title: "Graphic Design", icon: LayoutGrid },
      { title: "Video Editing & Animation", icon: Clapperboard },
      { title: "SEO & Copywriting", icon: PenTool },
      { title: "PowerPoint Presentations", icon: Presentation },
    ],
  },
  {
    category: "Web & App Solutions",
    services: [
      { title: "Web Design & Development", icon: Monitor },
      { title: "App Development", icon: Smartphone },
      { title: "UI/UX Design", icon: Palette },
      { title: "CRM Management", icon: Users },
    ],
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-primary">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Comprehensive solutions to fuel your business growth.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((category, index) => (
            <div key={category.category} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full bg-card/50 hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.services.map((service) => (
                      <li key={service.title} className="flex items-center gap-4">
                        <service.icon className="h-6 w-6 text-primary" />
                        <span className="text-foreground">{service.title}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
