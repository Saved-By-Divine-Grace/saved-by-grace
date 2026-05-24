import HeroSlider from './hero-slider';

const heroSlides = [
  { image: '/sbg-hero.jpg', alt: 'Church gathering' },
  { image: '/sbg-hero-4.jpg', alt: 'church gathering' },
  { image: '/sbg-hero-2.jpg', alt: 'Church service' },
  { image: '/sbg-img-ii.jpg', alt: 'Church gathering' },
  // { image: '/sbg-hero-5.jpg', alt: 'church gathering' },
];

export default function HomePage() {
  return (
    <main>
      <HeroSlider className='pt-15 '
        slides={heroSlides}
        title="Raising a Generation Saved by Grace, Living in Purpose."
        subtitle="We are a Christ-centered movement committed to spreading the Gospel, transforming lives, and building a community grounded in faith, love, and truth."
        primaryCta={{ label: 'Join Us', href: '/join-us' }}
        secondaryCta={{ label: 'Contact Us', href: '#contact' }}
      />
    </main>
  );
}