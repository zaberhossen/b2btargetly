"use client";

import React, { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, FormState } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";

import SectionWrapper from '../section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, Phone, Send } from 'lucide-react';
import { Loader2 } from 'lucide-react';

const initialState: FormState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);
  
  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-primary">Contact Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Ready to start a project? Let's talk.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <div className="fade-in-up space-y-8">
            <h3 className="text-2xl font-headline font-semibold text-accent">Get in Touch Directly</h3>
            <div className="space-y-4">
              <a href="mailto:rabbibabu007@gmail.com" className="flex items-center gap-4 group">
                <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent transition-colors">
                  <Mail className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-muted-foreground group-hover:text-foreground">rabbibabu007@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/8801767621444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent transition-colors">
                  <Phone className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">WhatsApp</p>
                  <p className="text-muted-foreground group-hover:text-foreground">+880 1767-621444</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/rabbi-hasan-23608321b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent transition-colors">
                  <Linkedin className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">LinkedIn</p>
                  <p className="text-muted-foreground group-hover:text-foreground">Connect with Rabbi Hasan</p>
                </div>
              </a>
            </div>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <form ref={formRef} action={formAction} className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                    {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                    {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project..." required rows={5} />
                    {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
