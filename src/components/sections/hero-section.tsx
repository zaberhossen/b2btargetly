import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SectionWrapper from '../section-wrapper';

export default function HeroSection() {
  return (
    <SectionWrapper id="home" className="relative overflow-hidden min-h-dvh flex items-center justify-center text-center !py-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Abstract network background"
          data-ai-hint="network data"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary-foreground">
            Where Data Turns Into Deals.
            </h1>
            <p className="mt-6 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We transform raw data into real business opportunities through lead generation, research, and digital solutions.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">
                <Link href="#contact">Get Started Today</Link>
            </Button>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
