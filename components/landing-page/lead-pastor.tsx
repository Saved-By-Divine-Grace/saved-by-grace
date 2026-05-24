"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FaAngleRight } from "react-icons/fa6"

const stats = [
  { value: "5", label: "Family Units" },
  { value: "12", label: "Church Pillars" },
  { value: "1", label: "Vision, One Church" },
]

export default function LeadPastor() {
  return (
    <section className="bg-neutral-950 overflow-hidden">

      {/* mobile */}
      <div className="lg:hidden flex flex-col">

        {/* Image — full width, no text over it */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src="/lead-pastor.jpg"
            alt="Apostle Solomon Opeyemi"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        {/* fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
         
        </div>

        {/* Content — clean dark block, no image behind */}
        <div className="px-6 pt-8 pb-16 flex flex-col">

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-[3.5px] uppercase text-red-500">
              Leadership
            </span>
          </div>

          <h2 className="text-[42px] font-extrabold text-white leading-[1.0] mb-5 uppercase tracking-tight">
            Our Lead<br />
            <span className="text-red-600">Pastor</span>
          </h2>

          <div className="mb-6">
            <p className="text-white font-semibold text-[14px] tracking-wide">
              Apostle Solomon Opeyemi
            </p>
            <p className="text-red-500 text-[10px] font-semibold tracking-[2.5px] uppercase mt-0.5">
              General Overseer
            </p>
          </div>

          <p className="text-[14px] text-white leading-[1.9] font-normal mb-4">
            Apostle Solomon Opeyemi is the General Overseer of Saved by Divine
            Grace of God Ministry, a ministry built on the unshakeable
            foundation of God&lsquo;s word, prayer, and evangelism. Under his
            leadership, the church is growing into a national force for the
            kingdom of God.
          </p>

          <p className="text-[14px] text-white leading-[1.9] font-normal mb-8">
            Sent to encourage the discouraged, give hope to the hopeless, and
            rescue the ex-champion, his message is one of grace, restoration,
            and the transforming power of God&lsquo;s word.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mb-8 flex-wrap">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[32px] font-extrabold text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] text-white font-normal tracking-wide mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-white/10 mb-8" />

          {/* cta's - stacked on mobile */}
          <div className="flex flex-col gap-3">
            <Link
              href="/sermons"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium tracking-[1.5px] uppercase px-8 py-4 transition-colors duration-200 w-full"
            >
              Watch Sermons
              <FaAngleRight className="w-4 h-4" />
            </Link>
            
          </div>

        </div>
      </div>

      {/* ── desktop ── */}
      <div className="hidden lg:flex relative min-h-[90vh] w-full items-center">

        <div className="absolute inset-0 z-0">
          <Image
            src="/lead-pastor.jpg"
            alt="Apostle Solomon Opeyemi"
            fill
            className="object-cover object-center lg:object-[30%_center]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="flex flex-col lg:items-start lg:ml-auto lg:w-[52%]">

            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-semibold tracking-[3.5px] uppercase text-red-500">
                Leadership
              </span>
            </motion.div>

            <motion.h2
              className="text-[clamp(36px,6vw,72px)] font-extrabold text-white leading-[1.0] mb-6 uppercase tracking-tight"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Our Lead<br />
              <span className="text-red-600">Pastor</span>
            </motion.h2>

            <motion.div
              className="mb-7 flex items-center gap-4"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-white font-semibold text-[15px] tracking-wide">
                  Apostle Solomon Opeyemi
                </p>
                <p className="text-red-500 text-[10px] font-semibold tracking-[2.5px] uppercase mt-0.5">
                  General Overseer
                </p>
              </div>
            </motion.div>

            <motion.p
              className="text-[15px] text-white leading-[1.9] font-normal mb-5 max-w-lg"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Apostle Solomon Opeyemi is the General Overseer of Saved by Divine
              Grace of God Ministry, a ministry built on the unshakeable
              foundation of God&lsquo;s word, prayer, and evangelism. Under his
              leadership, the church is growing into a national force for the
              kingdom of God.
            </motion.p>

            <motion.p
              className="text-[15px] text-white leading-[1.9] font-normal mb-10 max-w-lg"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Sent to encourage the discouraged, give hope to the hopeless, and
              rescue the ex-champion, his message is one of grace, restoration,
              and the transforming power of God&lsquo;s word.
            </motion.p>

            <motion.div
              className="flex items-center gap-8 mb-10 flex-wrap"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-[36px] font-extrabold text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-white font-normal tracking-wide mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="w-full max-w-lg h-px bg-white/10 mb-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              style={{ originX: 0 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="/sermons"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium tracking-[1.5px] uppercase px-8 py-4 transition-colors duration-200"
              >
                Watch Sermons
                <FaAngleRight className="w-4 h-4" />
              </Link>

              
            </motion.div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-[5]" />
      </div>

    </section>
  )
}