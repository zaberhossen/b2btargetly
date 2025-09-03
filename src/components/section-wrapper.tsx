"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const [ref, isInView] = useInView({ triggerOnce: true });

    const combinedRef = (node: HTMLElement | null) => {
      // @ts-ignore
      ref.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    return (
      <section
        ref={combinedRef}
        className={cn(
          "w-full py-16 md:py-24 lg:py-28 relative overflow-hidden",
          isInView ? "is-in-view" : "",
          className
        )}
        {...props}
      >
        <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
        <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
        {children}
      </section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
