import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SectionWrapper from '../section-wrapper';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <SectionWrapper id="home" className="relative overflow-hidden min-h-dvh flex items-center justify-center text-center !py-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
            <div className='flex justify-center items-center mb-4'>
                <div className='flex items-center gap-1 text-sm border border-border rounded-lg px-2 py-1'>
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <span className='ml-2 text-muted-foreground'>5.0 from 180+ happy clients</span>
                </div>
            </div>
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground">
            Where Data Turns Into Deals.
            </h1>
            <p className="mt-6 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We transform raw data into real business opportunities through lead generation, research, and digital solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg group">
                    <Link href="#contact">Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="text-lg">
                    <Link href="#work">View Our Work</Link>
                </Button>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
