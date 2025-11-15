"use client";

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {

  return (
    <Link 
      href="/" 
      className={cn('flex items-center gap-2 md:text-3xl font-bold font-headline text-white transition-colors', className)}
    >
      <Image 
        src="/logo.svg" 
        alt="b2btargetly Logo"
        data-ai-hint="logo sphere"
        width={32} 
        height={32}
        unoptimized
      />
      B2BTargetly
    </Link>
  );
}
