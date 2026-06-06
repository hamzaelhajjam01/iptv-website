'use client';

import { useEffect, useRef } from 'react';

// Replace these with actual image paths in your project
const COVER_IMAGES = [
  '/images/covers/download 1 (10) 1.png',
  '/images/covers/download 1 (10) 2.png',
  '/images/covers/download 1 (10) 3.png',
  '/images/covers/download 1 (10) 4.png',
  '/images/covers/download 1 (10) 5.png',
  '/images/covers/download 1 (10) 6.png',
  '/images/covers/download 1 (10) 7.png',
];

export default function HeroCarousel() {
  const ringRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const mouseXRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const count = COVER_IMAGES.length;

    function updateRadius() {
      if (!ring) return;
      const isMobile = window.innerWidth <= 768;
      const cardWidth = isMobile ? 130 : 180;
      const padding = isMobile ? 15 : 40;
      // Calculate radius based on the number of cards and width to form a perfect circle
      const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / count)) + padding;

      Array.from(ring.children).forEach((card, i) => {
        const angle = (360 / count) * i;
        (card as HTMLElement).style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
      });
    }

    updateRadius();
    window.addEventListener('resize', updateRadius);

    function onMouseMove(e: MouseEvent) {
      mouseXRef.current = (e.clientX / window.innerWidth - 0.5) * 0.4;
    }
    document.addEventListener('mousemove', onMouseMove);

    function tick() {
      angleRef.current += 0.18 + mouseXRef.current;
      if (ring) {
        ring.style.transform = `translate(-50%, -50%) rotateY(${angleRef.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', updateRadius);
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="ch3d-wrap">
      <div className="ch3d-ring" ref={ringRef}>
        {COVER_IMAGES.map((src, i) => (
          <div key={i} className="ch3d-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
