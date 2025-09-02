"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#clients' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Button key={link.name} variant="link" asChild className="text-primary-foreground font-semibold text-base hover:text-accent transition-colors">
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
             <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Logo />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-4 p-4">
                    {navLinks.map((link) => (
                      <SheetClose key={link.name} asChild>
                        <Link href={link.href} className="text-lg font-medium hover:text-accent transition-colors">
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                     <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold mt-4">
                      <Link href="#contact">Contact Us</Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
