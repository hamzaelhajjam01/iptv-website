'use client';



// Replace these with actual image paths in your project
const COVER_IMAGES = [
  '/images/flyers/480x720-2026-02-02T020038.368-1.webp',
  '/images/flyers/images.jpeg',
  '/images/flyers/images (1).jpeg',
  '/images/flyers/images (2).jpeg',
  '/images/flyers/images (3).jpeg',
  '/images/flyers/images (4).jpeg',
  '/images/flyers/images (5).jpeg',
];

export default function HeroCarousel() {
  // Duplicate the images to create an infinite scroll effect
  const repeatedImages = [...COVER_IMAGES, ...COVER_IMAGES, ...COVER_IMAGES];

  return (
    <div className="w-full relative overflow-hidden group marquee">
      <div className="track flex items-center">
        {repeatedImages.map((src, i) => (
          <div key={i} className="flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={src} 
              alt={`Featured ${i}`} 
              loading="lazy" 
              className="h-56 sm:h-64 md:h-[300px] lg:h-[360px] xl:h-[420px] w-auto object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-gray-700/50"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
