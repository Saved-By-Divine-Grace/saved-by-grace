// HeroSlider.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

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
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  title,
  subtitle,
  primaryCta = { label: 'Get Started', href: '#' },
  secondaryCta = { label: 'Learn More', href: '#' },
  autoPlayInterval = 7000,
  showDots = true,
  height = 'h-screen',
  overlayOpacity = 0.5,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Animate content in once on mount
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.inOut' }
    )
    .fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    );
  }, []); // runs once on mount only

  // Auto-rotate background images
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  if (slides.length === 0) {
    return (
      <div className={`relative w-full ${height} flex items-center justify-center bg-gray-900`}>
        <p className="text-white text-xl">No slides available</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-full rounded-br-4xl rounded-bl-4xl ${height} overflow-hidden ${className}`}>
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: currentIndex === index ? 1 : 0 }}
        >
          {slide.image.startsWith('http') ? (
            <Image
              src={slide.image}
              alt={slide.alt || `Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          ) : (
            <Image
              src={slide.image}
              alt={slide.alt || `Slide ${index + 1}`}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover"
            />
          )}
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        </div>
      ))}

      {/* Static Content */}
      <div
        ref={overlayRef}
        className="relative z-10 flex flex-col justify-center h-full md:px-10 px-5"
      >
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight"
        >
          {title}
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10"
        >
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <Link href={primaryCta.href} className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold text-base rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
            {primaryCta.label}
          </Link>
          
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold text-base rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
          >
            {secondaryCta.label}
          </Link>
        </div>

        {/* Navigation Dots */}
        {showDots && slides.length > 1 && (
          <div className="absolute text-center -ml-5 w-full mx-auto justify-center bottom-10 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-white w-8'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSlider;