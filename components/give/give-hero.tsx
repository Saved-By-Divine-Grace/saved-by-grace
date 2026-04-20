"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function GiveHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[380px] overflow-hidden bg-neutral-950">
      <Image
        src="/sbg-hero.jpg"
        alt="Give"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        <motion.h1
          className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-tight uppercase mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          Give to the <span className="text-red-600">Kingdom</span>
        </motion.h1>

        <motion.p
          className="text-[13px]  text-white leading-[1.9] max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          "Honour the Lord with your wealth and with the first fruits of all your produce."
        </motion.p>
        <motion.span
          className="text-[12px] font-medium tracking-[2.5px] uppercase text-red-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Proverbs 3:9
        </motion.span>
      </div>
    </section>
  )
}