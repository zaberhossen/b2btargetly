"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from 'react';
import createGlobe from "cobe";

export default function AnimatedGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;
  let nextToggle = Date.now();

  type GlobeMarker = { location: [number, number]; size: number };
    const allMarkers: GlobeMarker[] = [
      { location: [40.7128, -74.006], size: 0.05 },
      { location: [51.5074, -0.1278], size: 0.05 },
      { location: [48.8566, 2.3522], size: 0.05 },
      { location: [35.6762, 139.6503], size: 0.05 },
      { location: [37.5665, 126.978], size: 0.05 },
      { location: [1.3521, 103.8198], size: 0.05 },
      { location: [22.3193, 114.1694], size: 0.05 },
      { location: [31.2304, 121.4737], size: 0.05 },
      { location: [39.9042, 116.4074], size: 0.05 },
      { location: [28.6139, 77.209], size: 0.05 },
      { location: [19.076, 72.8777], size: 0.05 },
      { location: [13.7563, 100.5018], size: 0.05 },
      { location: [-6.2088, 106.8456], size: 0.05 },
      { location: [14.5995, 120.9842], size: 0.05 },
      { location: [-33.8688, 151.2093], size: 0.05 },
      { location: [-37.8136, 144.9631], size: 0.05 },
      { location: [-41.2865, 174.7762], size: 0.05 },
      { location: [37.7749, -122.4194], size: 0.05 },
      { location: [34.0522, -118.2437], size: 0.05 },
      { location: [41.8781, -87.6298], size: 0.05 },
      { location: [29.7604, -95.3698], size: 0.05 },
      { location: [25.7617, -80.1918], size: 0.05 },
      { location: [43.6532, -79.3832], size: 0.05 },
      { location: [45.5017, -73.5673], size: 0.05 },
      { location: [49.2827, -123.1207], size: 0.05 },
      { location: [19.4326, -99.1332], size: 0.05 },
      { location: [4.711, -74.0721], size: 0.05 },
      { location: [-23.5505, -46.6333], size: 0.05 },
      { location: [-34.6037, -58.3816], size: 0.05 },
      { location: [-33.4489, -70.6693], size: 0.05 },
      { location: [-12.0464, -77.0428], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.05 },
      { location: [-1.2921, 36.8219], size: 0.05 },
      { location: [-26.2041, 28.0473], size: 0.05 },
      { location: [33.8869, 35.5131], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.05 },
      { location: [55.7558, 37.6173], size: 0.05 },
      { location: [59.9139, 10.7522], size: 0.05 },
      { location: [59.3293, 18.0686], size: 0.05 },
      { location: [60.1699, 24.9384], size: 0.05 },
      { location: [52.52, 13.405], size: 0.05 },
      { location: [52.3676, 4.9041], size: 0.05 },
      { location: [50.8503, 4.3517], size: 0.05 },
      { location: [40.4168, -3.7038], size: 0.05 },
      { location: [41.9028, 12.4964], size: 0.05 },
      { location: [45.4642, 9.19], size: 0.05 },
      { location: [38.7223, 9.1393], size: 0.05 },
      { location: [47.4979, 19.0402], size: 0.05 },
      { location: [50.0755, 14.4378], size: 0.05 },
      { location: [25.2048, 55.2708], size: 0.05 },
    ];

    function pickRandomMarkers(source: GlobeMarker[], count: number) {
      const shuffled = [...source].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    }

    let currentMarkers: GlobeMarker[] = pickRandomMarkers(allMarkers, 12);
    
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.27,
      dark: 1,
      diffuse: 2.4,
      mapSamples: 10000,
      mapBrightness: 7.7,
      baseColor: [0.15, 0.25, 0.51],
      markerColor: [0.235, 0.514, 0.965],
      glowColor: [0.09, 0.1, 0.5],
      markers: currentMarkers,
      scale: 1.12,
      opacity: 0.9,
      onRender: (state) => {
        const now = Date.now();
        if (now >= nextToggle) {
          currentMarkers = pickRandomMarkers(allMarkers, 12);
          // @ts-ignore
          state.markers = currentMarkers;
          nextToggle = now + 1200;
        }
        state.phi = phi
        phi += 0.005

        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = '1'));
    
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={cn("flex items-center justify-center w-[600px] h-[600px]", className)}>
      <canvas
        ref={canvasRef}
        style={{
          width: 600,
          height: 600,
          aspectRatio: 1,
          opacity: 0,
          transition: 'opacity 1s ease'
        }}
      />
    </div>
  );
}
