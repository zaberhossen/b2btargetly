"use client";

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function Logo({ className }: { className?: string }) {
  const [logoSrc, setLogoSrc] = useState('/logo.gif');

  useEffect(() => {
    // Reset the GIF to replay it on load
    setLogoSrc(`/logo.gif?t=${new Date().getTime()}`);
  }, []);

  const handleMouseEnter = () => {
    // Appending a timestamp makes the browser reload the GIF, creating a loop effect on hover
    setLogoSrc(`/logo.gif?t=${new Date().getTime()}`);
  };

  return (
    <Link href="/" className={cn('flex items-center gap-2 text-3xl font-bold font-headline text-primary-foreground hover:text-primary-foreground/90 transition-colors', className)}>
      <Image 
        src={logoSrc} 
        alt="LeadSphere Logo" 
        width={32} 
        height={32}
        unoptimized // Needed for GIFs
        onMouseEnter={handleMouseEnter}
      />
      LeadSphere
    </Link>
  );
}
