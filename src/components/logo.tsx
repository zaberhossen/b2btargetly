"use client";

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function Logo({ className }: { className?: string }) {
  const [logoSrc, setLogoSrc] = useState('https://picsum.photos/32/32');

  useEffect(() => {
    // This is a placeholder, we'll get a real animated GIF soon.
    const uniqueLogoSrc = `https://picsum.photos/32/32?t=${new Date().getTime()}`;
    setLogoSrc(uniqueLogoSrc);
  }, []);

  const handleMouseEnter = () => {
    const uniqueLogoSrc = `https://picsum.photos/32/32?t=${new Date().getTime()}`;
    setLogoSrc(uniqueLogoSrc);
  };

  return (
    <Link href="/" className={cn('flex items-center gap-2 text-3xl font-bold font-headline text-primary-foreground hover:text-primary-foreground/90 transition-colors', className)}>
      <Image 
        src={logoSrc} 
        alt="LeadSphere Logo"
        data-ai-hint="logo sphere"
        width={32} 
        height={32}
        unoptimized
        onMouseEnter={handleMouseEnter}
      />
      LeadSphere
    </Link>
  );
}
