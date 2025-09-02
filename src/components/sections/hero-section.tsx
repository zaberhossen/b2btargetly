import Link from 'next/link';
import SectionWrapper from '../section-wrapper';
import { ArrowRight, Globe, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <SectionWrapper
      id="home"
      className="relative overflow-hidden min-h-dvh flex items-center justify-center text-center !py-0"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center gap-1 text-sm border border-border rounded-lg px-2 py-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-2 text-muted-foreground">
                5.0 from 180+ happy clients
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground">
            Where Data Turns Into Deals.
          </h1>
          <p className="mt-6 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We transform raw data into real business opportunities through lead
            generation, research, and digital solutions.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Link href="#contact">
              <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                  <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                    <Globe className="animate-spin" size={18} />
                    Get started
                  </p>
                </div>
                <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                  <ArrowRight
                    className="group-hover:rotate-180 ease-in-out transition-all"
                    size={14}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
