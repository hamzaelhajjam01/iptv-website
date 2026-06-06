"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from './HeroCarousel';

export default function HeroTrustSection() {
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative w-full py-[20px] z-20 overflow-hidden flex flex-col items-center bg-[#02050B]">
            {/* Carousel container */}
            <div className="w-full relative px-4 z-20">
                <HeroCarousel />
            </div>
        </section>
    );
}
