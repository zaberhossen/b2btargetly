"use client";

import React, { useState, useTransition } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionWrapper from '../section-wrapper';
import { summarizeTestimonials, SummarizeTestimonialsInput } from '@/ai/flows/ai-powered-testimonial-summarizer';
import { Bot, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "LeadSphere helped us generate high-quality leads that converted into sales. Professional, fast, and reliable.",
    author: "Client, USA"
  },
  {
    quote: "Excellent work in data scraping and research. Highly recommended!",
    author: "Client, UK"
  }
];

export default function ClientsSection() {
  const [summary, setSummary] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSummarize = () => {
    const reviews = testimonials.map(t => t.quote).join('\n');
    const input: SummarizeTestimonialsInput = { reviews };

    startTransition(async () => {
      const result = await summarizeTestimonials(input);
      setSummary(result.summary);
    });
  };

  return (
    <SectionWrapper id="clients" className="bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-primary">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Real feedback from businesses we've helped grow.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full bg-card/50">
                <CardContent className="p-6">
                  <blockquote className="text-lg text-foreground">
                    " {testimonial.quote} "
                  </blockquote>
                  <p className="mt-4 text-right font-semibold text-accent">- {testimonial.author}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button onClick={handleSummarize} disabled={isPending} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            {isPending ? "Summarizing..." : "Summarize with AI"}
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
        {summary && (
          <div className="mt-8 fade-in-up">
            <Card className="bg-primary/10 border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Bot className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-headline font-semibold text-primary">AI Summary</h3>
                    <p className="mt-2 text-foreground">{summary}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
