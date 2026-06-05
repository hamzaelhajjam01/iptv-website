'use client';

import { useEffect, useRef } from 'react';

// Replace these with actual image paths in your project
const COVER_IMAGES = [
  '/images/movies/efc10d_58769540c3af46e4b1b8373d25053dce_mv2-1.webp',
  '/images/movies/efc10d_82f6ea18c2494be98c46c59b9e55cf71_mv2-1.webp',
  '/images/movies/efc10d_c4763bc9523c4fc89ba4e9f22e5ce52d_mv2-1.webp',
  '/images/movies/efc10d_cf5918f2dcf64cf39fcefe135495cc43_mv2-1.webp',
  '/images/movies/efc10d_d0631c9b9c3f4be9bd6caef12c4d0694_mv2-1.webp',
  '/images/movies/efc10d_e83995fe1b33435a982de93f05c82c29_mv2-1.webp',
  '/images/movies/efc10d_58769540c3af46e4b1b8373d25053dce_mv2-1.webp',
  '/images/movies/efc10d_c4763bc9523c4fc89ba4e9f22e5ce52d_mv2-1.webp',
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
