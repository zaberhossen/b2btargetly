"use client";

import { cn } from "@/lib/utils";
import React from 'react';

export default function AnimatedGlobe({ className }: { className?: string }) {
  const arcs = Array.from({ length: 12 });
  
  return (
    <div className={cn("globe-wrap", className)}>
      <div className="globe">
        {arcs.map((_, index) => (
          <div
            key={index}
            className="globe-arc"
            style={{
              transform: `rotateY(${index * 15}deg)`,
            }}
          />
        ))}
        <div className="globe-arc" style={{ transform: 'rotateX(90deg)' }} />
      </div>
    </div>
  );
}
