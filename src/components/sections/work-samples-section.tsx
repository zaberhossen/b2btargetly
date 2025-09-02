"use client";

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionWrapper from '../section-wrapper';
import { cn } from '@/lib/utils';
import { generateLeadDataVisualization, GenerateLeadDataVisualizationInput } from '@/ai/flows/interactive-lead-data-visualization';
import { Loader2, Wand2 } from 'lucide-react';

const workSamples = [
  { category: 'Lead Generation', src: 'https://picsum.photos/600/400?random=1', title: 'B2B Lead Sheet', hint: 'data spreadsheet' },
  { category: 'Websites', src: 'https://picsum.photos/600/400?random=2', title: 'Corporate Website', hint: 'website design' },
  { category: 'Designs', src: 'https://picsum.photos/600/400?random=3', title: 'Brand Identity', hint: 'graphic design' },
  { category: 'Dashboards', src: 'https://picsum.photos/600/400?random=4', title: 'Sales Dashboard', hint: 'data dashboard' },
  { category: 'Lead Generation', src: 'https://picsum.photos/600/400?random=5', title: 'LinkedIn Prospecting', hint: 'linkedin profile' },
  { category: 'Websites', src: 'https://picsum.photos/600/400?random=6', title: 'E-commerce Store', hint: 'online store' },
];
const filters = ['All', 'Lead Generation', 'Websites', 'Designs', 'Dashboards'];

export default function WorkSamplesSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [chartDataUri, setChartDataUri] = useState('');
  const [isPending, startTransition] = useTransition();

  const filteredSamples = workSamples.filter(
    (sample) => activeFilter === 'All' || sample.category === activeFilter
  );

  const handleGenerateChart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const clientSector = formData.get('clientSector') as string;
    const workSampleDescription = formData.get('workSampleDescription') as string;
    
    if (!clientSector || !workSampleDescription) return;

    const input: GenerateLeadDataVisualizationInput = { clientSector, workSampleDescription };
    
    startTransition(async () => {
      const result = await generateLeadDataVisualization(input);
      setChartDataUri(result.chartDataUri);
    });
  };

  return (
    <SectionWrapper id="work">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-primary">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A glimpse into our successful projects and capabilities.
          </p>
        </div>
        
        <div className="my-8 flex justify-center flex-wrap gap-2 fade-in-up">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                activeFilter === filter ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-transparent'
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSamples.map((sample, index) => (
            <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="overflow-hidden group bg-card/50 hover:border-accent transition-all duration-300">
                <div className="relative h-60">
                  <Image
                    src={sample.src}
                    alt={sample.title}
                    data-ai-hint={sample.hint}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-headline text-lg font-semibold text-accent">{sample.title}</h3>
                  <p className="text-sm text-muted-foreground">{sample.category}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-24 fade-in-up">
          <div className="text-center">
            <h3 className="text-2xl font-headline font-bold tracking-tighter sm:text-3xl text-primary">Interactive Lead Data Visualization</h3>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Generate a sample data visualization with AI based on your inputs.
            </p>
          </div>
          <Card className="mt-8 bg-card/50">
            <CardContent className="p-6 grid md:grid-cols-2 gap-8 items-center">
              <form onSubmit={handleGenerateChart} className="space-y-4">
                <div>
                  <label htmlFor="clientSector" className="block text-sm font-medium mb-1">Client Sector</label>
                  <Input id="clientSector" name="clientSector" placeholder="e.g., Technology, Healthcare" required />
                </div>
                <div>
                  <label htmlFor="workSampleDescription" className="block text-sm font-medium mb-1">Work Description</label>
                  <Textarea id="workSampleDescription" name="workSampleDescription" placeholder="e.g., Lead generation for a SaaS company targeting startups" required />
                </div>
                <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  Generate Chart
                </Button>
              </form>
              <div className="h-80 flex items-center justify-center border border-dashed rounded-lg bg-muted/20">
                {isPending && <Loader2 className="h-8 w-8 animate-spin text-accent" />}
                {!isPending && chartDataUri && <Image src={chartDataUri} alt="Generated chart" width={400} height={320} className="w-full h-full object-contain" />}
                {!isPending && !chartDataUri && <p className="text-muted-foreground">Your chart will appear here</p>}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
