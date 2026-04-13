"use client";
import Image from "next/image";



interface AboutHeroProps {
  height?: string;
  overlayOpacity?: number;
  className?: string;
  navbarHeight?: string; 
}

const AboutHero: React.FC<AboutHeroProps> = ({
 
  overlayOpacity = 0.55,
  className = "",
  navbarHeight = "0px",
}) => {
 

  
  
  return (
    <div
      className={`relative w-full  overflow-hidden ${className}`}
      style={{ height: `calc(100svh - ${navbarHeight})` }}
    >
     
      {/* {slides.map((slide, index) => ( */}
        <div
          
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: 1 }}
        >
          <Image
            src="/sbg-hero.jpg"
            alt="Church gathering"
            fill
            // priority={index === 0}
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Base overlay */}
          <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
          {/* Bottom-up gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
     

      {/* Content — vertically centered with slight downward offset */}
      <div
       
        className="relative max-w-7xl mx-auto z-10 h-full flex flex-col justify-center px-6 md:px-12 pt-4"
      >
        <div className="max-w-4xl mx-auto">
          

          <h1
            
            className="text-[2rem] text-center sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-[1.1] tracking-tight"
          >
            WE ARE A PEOPLE OF GREAT FAITH, STRONG VISION, AND EXCELLENT SPIRIT.
          </h1>

         

          


        </div>
      </div>

    </div>
  );
};

export default AboutHero;