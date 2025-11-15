"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from '../section-wrapper';

const testimonials = [
  {
    quote: "b2btargetly helped us generate high-quality leads that converted into sales. Professional, fast, and reliable.",
    author: "Client, USA"
  },
  {
    quote: "Excellent work in data scraping and research. Highly recommended!",
    author: "Client, UK"
  }
];

export default function ClientsSection() {
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
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="mt-4 text-right font-semibold text-accent">- {testimonial.author}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
