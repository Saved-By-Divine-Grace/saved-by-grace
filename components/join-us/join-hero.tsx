"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function JoinHero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[420px] overflow-hidden bg-neutral-950">
      <Image
        src="/sbg-hero.jpg"
        alt="Join SBDG"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">


        <motion.h1
          className="text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-tight uppercase mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          Find Your Place in the{" "}
          <span className="text-red-600">Family</span>
        </motion.h1>

        <motion.p
          className="text-[15px] text-white font-normal leading-[1.85] max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          We are not just a church, we are a family. There is a place
          for you here, a department where your gifts can thrive, and a
          community that will walk with you. Take the first step.
        </motion.p>

      </div>
    </section>
  )
}