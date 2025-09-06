"use client";

import SectionWrapper from '../section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  
  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-primary">Contact Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Ready to start a project? Let's talk.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
            <div className="fade-in-up space-y-8">
                <Card className="bg-card/50">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <a href="mailto:rabbibabu007@gmail.com" className="flex flex-col items-center gap-4 group">
                                <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent transition-colors">
                                    <Mail className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Email</p>
                                    <p className="text-muted-foreground group-hover:text-foreground">rabbibabu007@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://wa.me/8801767621444" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                                <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent transition-colors">
                                    <Phone className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">WhatsApp</p>
                                    <p className="text-muted-foreground group-hover:text-foreground">+880 1767-621444</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/rabbi-hasan-23608321b/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                                <div className="bg-accent/10 p-4 rounded-full group-hover:bg-accent transition-colors">
                                    <Linkedin className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">LinkedIn</p>
                                    <p className="text-muted-foreground group-hover:text-foreground">Connect with Rabbi Hasan</p>
                                </div>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
