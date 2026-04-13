"use client"

import Image from "next/image"
import { motion } from "motion/react"

interface AboutHeroProps {
  overlayOpacity?: number
  className?: string
  navbarHeight?: string
}

const AboutHero: React.FC<AboutHeroProps> = ({
  overlayOpacity = 0.55,
  className = "",
  navbarHeight = "0px",
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `calc(100svh - ${navbarHeight})` }}
    >
   
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src="/sbg-hero.jpg"
          alt="Church gathering"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Base overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        {/* Bottom-up gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

     

      {/* Content */}
      <div className="relative max-w-7xl pt-10 mx-auto z-10 h-full flex flex-col justify-center px-6 md:px-12 pt-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

         
          {/* Headline */}
          <motion.h1
            className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-tight mb-6 uppercase"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          >
            Saved by Grace.{" "}
            <span className="text-red-600">Sent</span>{" "}
            with Purpose.{" "}
            <span className="text-red-600">Built</span>{" "}
            for Eternity.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-[15px] text-white font-normal leading-[1.85] max-w-xl mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            We are Saved by Divine Grace of God Ministry, a people of great
            faith, strong vision, and excellent spirit. Committed to winning
            souls, building families, and raising a generation grounded in
            God's word.
          </motion.p>

          {/* Scripture */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
          >
            <p className="text-[13px] italic text-white leading-[1.9] max-w-md">
              "For by grace you have been saved through faith — and this is not
              your own doing; it is the gift of God."
            </p>
            <span className="text-[10px] font-medium tracking-[2.5px] uppercase text-red-500">
              Ephesians 2:8
            </span>
          </motion.div>

          
        </div>
      </div>
    </div>
  )
}

export default AboutHero