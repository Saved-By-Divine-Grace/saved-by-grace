"use client"

import Link from "next/link"
import { motion } from "motion/react"


const families = [
  { name: "Blessing Family", image: "/sbg-hero.jpg" },
  { name: "Glory Family", image: "/sbg-hero.jpg" },
  { name: "Peace Family", image: "/sbg-hero.jpg" },
  { name: "Faith Family", image: "/sbg-hero.jpg" },
  { name: "Grace Family", image: "/sbg-hero.jpg" },
]

// duplicating for infinite feel
const marqueeItems = [...families, ...families, ...families]

export default function Families() {
  return (
    <section className="bg-white py-24 overflow-hidden">

      {/* header */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center mb-14">
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* <div className="w-8 h-[1.5px] bg-red-600" /> */}
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-red-600">
            Community
          </span>
          {/* <div className="w-8 h-[1.5px] bg-red-600" /> */}
        </motion.div>

        <motion.h2
          className="text-[clamp(32px,6vw,68px)] font-extrabold text-neutral-900 leading-[1.0] uppercase tracking-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We Don&apos;t Do<br />
          <span className="text-red-600">Life Alone!</span>
        </motion.h2>

        <motion.p
          className="text-[15px] text-black leading-[1.85] font-normal max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We are five families - grounded in the scriptures, centered on Christ,
          and bound together by the grace of God. There is a family for you
          here. Come belong to something greater than yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="/about#families"
            className="inline-flex items-center gap-3 border border-neutral-300 hover:border-red-600 hover:text-red-600 text-black text-[12px] font-medium tracking-[1px] uppercase px-8 py-3.5 rounded-full transition-colors duration-200"
          >
            Find Your Family, Build Together
            
          </Link>
        </motion.div>
      </div>

      {/* marquee */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Left fade */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" /> */}
        {/* Right fade */}
        {/* <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" /> */}

        <div className="flex gap-4 marquee-track">
          {marqueeItems.map((family, i) => (
            <FamilyCard key={`${family.name}-${i}`} family={family} />
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .marquee-track {
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  )
}

function FamilyCard({ family }: { family: { name: string; image: string } }) {
  return (
    <div className="relative flex-shrink-0 rounded-md w-[380px] h-[280px] overflow-hidden group cursor-pointer">

      {/* Image */}
      <div
        className="absolute inset-0 bg-neutral-200 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${family.image})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

      {/* Red top bar — slides in on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

      {/* Family name */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 mb-2">
          
          <span className="text-[9px] font-medium tracking-[2.5px] uppercase text-red-400">
            SBDG Family
          </span>
        </div>
        <p className="text-white font-bold text-[20px] leading-tight tracking-wide uppercase">
          {family.name.replace(" Family", "")}
          <span className="block text-red-500 text-[13px] font-medium tracking-[1.5px] mt-0.5">
            Family
          </span>
        </p>
      </div>

     

    </div>
  )
}