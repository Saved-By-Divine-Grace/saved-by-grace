"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface HeroSlide {
  image: string;
  alt?: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  autoPlayInterval?: number;
  showDots?: boolean;
  height?: string;
  overlayOpacity?: number;
  className?: string;
  navbarHeight?: string; // e.g. "64px", "80px"
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  title,
  subtitle,
  primaryCta = { label: "Get Started", href: "#" },
  secondaryCta = { label: "Learn More", href: "#" },
  autoPlayInterval = 7000,
  overlayOpacity = 0.55,
  className = "",
  navbarHeight = "0px",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.inOut" })
      .fromTo(titleRef.current, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" }, "-=0.2")
      .fromTo(subtitleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }, "-=0.6")
      .fromTo(ctaRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }, "-=0.55");
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  if (slides.length === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `calc(100svh - ${navbarHeight})` }}
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: currentIndex === index ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.alt || `Slide ${index + 1}`}
            fill
            priority={index === 0}
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Base overlay */}
          <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
          {/* Bottom-up gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content — vertically centered with slight downward offset */}
      <div
        ref={overlayRef}
        className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 pt-4"
      >
        <div className="max-w-lg">
          

          <h1
            ref={titleRef}
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-[1.1] tracking-tight"
          >
            {title}
          </h1>

          <p
            ref={subtitleRef}
            className="text-sm sm:text-base text-white/75 mb-8 leading-relaxed max-w-sm"
          >
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* Primary */}
            <Link
              href={primaryCta.href}
              className="group relative flex items-center justify-between gap-4 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-lg overflow-hidden transition-all duration-300 active:scale-[0.98] w-full sm:w-auto"
            >
              {/* Shine sweep on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out" />
              <span className="relative">{primaryCta.label}</span>
              <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </Link>

            {/* Secondary */}
            <Link
              href={secondaryCta.href}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 hover:border-white/50 text-white font-semibold text-sm rounded-lg transition-all duration-300 active:scale-[0.98] w-full sm:w-auto"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicator dots — bottom center */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === index
                  ? "w-6 bg-red-500"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;