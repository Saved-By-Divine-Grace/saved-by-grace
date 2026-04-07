import HeroSlider from './hero-slider';

const heroSlides = [
  { image: '/sbg-hero.jpg', alt: 'Church gathering' },
  { image: '/sbg-hero-2.jpg', alt: 'Church service' },
  { image: '/sbg-hero-3.jpg', alt: 'Heritage exploration' },
  { image: '/sbg-hero-4.jpg', alt: 'Luxury resort' },
  { image: '/sbg-hero-5.jpg', alt: 'Nigerian fashion' },
];

export default function HomePage() {
  return (
    <main>
      <HeroSlider
        slides={heroSlides}
        title="Raising a Generation Saved by Grace, Living in Purpose"
        subtitle="We are a Christ-centered movement committed to spreading the Gospel, transforming lives, and building a community grounded in faith, love, and truth."
        primaryCta={{ label: 'Join Us', href: '/join' }}
        secondaryCta={{ label: 'Learn More', href: '/about' }}
      />
    </main>
  );
}