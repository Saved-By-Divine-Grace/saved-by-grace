"use client"

import Image from "next/image"
import { motion } from "motion/react"

interface AboutHeroProps {
  overlayOpacity?: number
  className?: string
  navbarHeight?: string
}

const AboutHero: React.FC<AboutHeroProps> = ({
  overlayOpacity = 0.45,
  className = "",
  navbarHeight = "0px",
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `calc(100svh - ${navbarHeight})` }}
    >
      <div className="absolute inset-0">
        <Image
          src="/sbg-hero.jpg"
          alt="Church gathering"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col gap-6 items-center justify-center px-6 md:px-12">
        <motion.h1
          className="text-[clamp(3rem,4.5vw,4rem)] font-extrabold text-white leading-[1.1] tracking-tight text-center uppercase max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          Welcome To Saved By Divine Grace.
        </motion.h1>

        <motion.p
          className="text-[clamp(2rem,4.5vw,3rem)] font-semibold text-red-600 leading-[1.1] tracking-tight text-center max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          Who We Are
        </motion.p>
      </div>
    </div>
  )
}

export default AboutHero