"use client"

import { motion } from "motion/react"
import Image from "next/image"

export default function EventsHero() {
  return (
    <section className="relative w-full h-[50vh] min-h-[360px] overflow-hidden bg-neutral-950">
      <Image
        src="/sbg-hero.jpg"
        alt="SBDG Events"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        <motion.h1
          className="text-[clamp(2rem,5vw,4rem)] font-extrabold text-white leading-[1.05] tracking-tight uppercase"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          Upcoming <span className="text-red-600">Events</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-[14px] text-white font-normal max-w-md leading-[1.8]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          Join us for worship, fellowship, and encounters with God.
          Something is always happening at SBDG.
        </motion.p>
      </div>
    </section>
  )
}