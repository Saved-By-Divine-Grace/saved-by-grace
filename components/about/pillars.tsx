"use client"

import { motion } from "motion/react"
import { useState } from "react"

const pillars = [
  { number: "01", name: "Faith", scriptures: ["1 John 5:4", "Ephesians 6:16"] },
  { number: "02", name: "The Word", scriptures: ["John 1:1", "Hebrews 1:3"] },
  { number: "03", name: "Praise", scriptures: ["2 Chronicles 20:20-22", "Psalm 149:1-9"] },
  { number: "04", name: "Consecration", scriptures: ["Hebrews 12:14", "2 Timothy 2:19"] },
  { number: "05", name: "Vision", scriptures: ["Proverbs 29:18", "Jeremiah 29:11"] },
  { number: "06", name: "Success", scriptures: ["Joshua 1:8"] },
  { number: "07", name: "Wisdom", scriptures: ["Proverbs 24:3-4"] },
  { number: "08", name: "Healing", scriptures: ["Isaiah 53:3-4", "Matthew 8:17"] },
  { number: "09", name: "Prayer", scriptures: ["1 John 5:14"] },
  { number: "10", name: "Prosperity", scriptures: ["3 John 2", "Psalm 35:27"] },
  { number: "11", name: "The Holy Spirit", scriptures: ["Acts 1:8", "Isaiah 10:27"] },
  { number: "12", name: "The Supernatural", scriptures: ["Psalm 82:5-7", "John 3:8"] },
]

export default function TwelvePillars() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="bg-neutral-50 py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold text-neutral-900 leading-[1.05] tracking-tight uppercase">
            Twelve<br />
            <span className="text-red-600">Pillars</span>
          </h2>
          <p className="text-[15px] text-neutral-500 font-normal leading-[1.85] max-w-sm lg:text-right">
            The foundational truths that anchor everything we believe,
            preach, and practise at SBDG.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              className="relative group cursor-default"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: i * 0.055,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number — floats on top edge */}
              <motion.span
                className="absolute -top-6 left-5 text-[56px] font-extrabold leading-none tracking-tight select-none z-20 transition-colors duration-300"
                animate={{
                  color: hovered === i ? "#111111" : "#e5e7eb",
                }}
                transition={{ duration: 0.35 }}
              >
                {pillar.number}
              </motion.span>

              {/* Card */}
              <motion.div
                className="relative overflow-hidden bg-white pt-10 pb-8 px-6 flex flex-col gap-4 h-full"
                animate={{
                  boxShadow:
                    hovered === i
                      ? "0 16px 48px -8px rgba(0,0,0,0.12)"
                      : "0 1px 3px rgba(0,0,0,0.06)",
                  y: hovered === i ? -4 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Pillar name */}
                <h3 className="text-[20px] font-extrabold text-neutral-900 uppercase tracking-tight leading-tight">
                  {pillar.name}
                </h3>

                {/* Thin divider */}
                <motion.div
                  className="h-[1.5px] bg-neutral-100"
                  animate={{
                    width: hovered === i ? "48px" : "24px",
                    backgroundColor: hovered === i ? "#E30000" : "#f3f4f6",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Scriptures */}
                <div className="flex flex-col gap-1 mt-auto">
                  {pillar.scriptures.map((ref) => (
                    <span
                      key={ref}
                      className="text-[12px] font-medium tracking-wide text-neutral-400"
                    >
                      {ref}
                    </span>
                  ))}
                </div>

                {/* ghost number */}
                <span className="absolute -bottom-3 -right-1 text-[72px] font-extrabold leading-none select-none pointer-events-none text-neutral-50">
                  {pillar.number}
                </span>

              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}