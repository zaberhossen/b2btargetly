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
          "w-full py-16 md:py-24 lg:py-28",
          isInView ? "is-in-view" : "",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
