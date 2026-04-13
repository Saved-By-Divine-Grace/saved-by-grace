"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

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
    <section className="bg-white py-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold text-neutral-900 leading-[1.05] tracking-tight uppercase">
            Twelve<br />
            <span className="text-red-600">Pillars</span>
          </h2>
          <p className="text-[15px] text-black font-normal leading-[1.85] max-w-sm lg:text-right">
            The foundational truths that anchor everything we believe,
            preach, and practise at SBDG.
          </p>
        </motion.div>

        {/* pillar list */}
        <div className="flex flex-col">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              className="group relative border-t border-neutral-100 last:border-b last:border-neutral-100 cursor-default"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.04,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* background fill on hover */}
              <motion.div
                className="absolute inset-0 bg-red-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ originX: 0 }}
              />

              <div className="relative z-10 flex items-center gap-6 lg:gap-12 py-5 lg:py-6">

                {/* Number */}
                <span
                  className={`text-[clamp(28px,4vw,48px)] font-extrabold leading-none tracking-tight w-16 lg:w-24 shrink-0 transition-colors duration-300 ${
                    hovered === i ? "text-white" : "text-red-600"
                  }`}
                >
                  {pillar.number}
                </span>

                {/* Name */}
                <h3
                  className={`text-[clamp(20px,3vw,36px)] font-extrabold uppercase tracking-tight leading-none flex-1 transition-colors duration-300 ${
                    hovered === i ? "text-white" : "text-black"
                  }`}
                >
                  {pillar.name}
                </h3>

                {/* Scriptures */}
                <div className="hidden lg:flex flex-col items-end gap-1 shrink-0">
                  {pillar.scriptures.map((ref) => (
                    <span
                      key={ref}
                      className={`text-[12px] font-semibold tracking-wide transition-colors duration-300 ${
                        hovered === i ? "text-white" : "text-black"
                      }`}
                    >
                      {ref}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <motion.div
                  className="shrink-0 ml-2"
                  animate={{
                    x: hovered === i ? 0 : -8,
                    opacity: hovered === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ArrowRight size={16} className="text-white" />
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}