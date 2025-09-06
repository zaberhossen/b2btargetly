"use client";

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Logo({ className }: { className?: string }) {
  const [isHovering, setIsHovering] = useState(false);

  // By adding a query string that changes, we can force the GIF to replay.
  const logoSrc = isHovering 
    ? `https://s6.imgcdn.dev/YQSoVo.gif?hover=${Date.now()}` 
    : `https://s6.imgcdn.dev/YQSoVo.gif?load=${Date.now()}`;

  return (
    <Link 
      href="/" 
      className={cn('flex items-center gap-2 text-3xl font-bold font-headline text-primary-foreground hover:text-primary-foreground/90 transition-colors', className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image 
        src={logoSrc} 
        alt="LeadSphere Logo"
        data-ai-hint="logo sphere"
        width={32} 
        height={32}
        unoptimized
      />
      LeadSphere
    </Link>
  );
}
