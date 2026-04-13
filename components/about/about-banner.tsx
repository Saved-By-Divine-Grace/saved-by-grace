"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function AboutBanner() {
  return (
    <div className="mb-10 bg-white py-10">

    <section className="relative w-full  overflow-hidden h-[360px] lg:h-[450px]">
      <Image
        src="/sbg-hero.jpg"
        alt="SBDG congregation"
        fill
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay — heavier at bottom like the reference */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content — bottom left aligned like the reference */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 max-w-7xl mx-auto">
        <motion.p
          className="text-[clamp(1.5rem,4vw,3rem)] font-extrabold text-white uppercase leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We Are Saved by Grace.
        </motion.p>
        <motion.p
          className="text-[clamp(1.5rem,4vw,3rem)] font-extrabold text-red-600 uppercase leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          Our Moment of Testimony is Now.
        </motion.p>
      </div>
    </section>
        </div>
  )
}