import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('text-3xl font-bold font-headline text-primary-foreground hover:text-primary-foreground/90 transition-colors', className)}>
      LeadSphere
    </Link>
  );
}
