"use client"

import { motion } from "motion/react"

export default function MissionVision() {
  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* mission */}
        <motion.div
          className="flex flex-col justify-center px-0 py-12 lg:py-0 lg:pr-16 border-b lg:border-b-0 lg:border-r border-neutral-100"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-[14px] font-medium tracking-[3.5px] uppercase text-red-600 mb-5 block">
            Mission
          </span>

          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-neutral-900 leading-[1.1] tracking-tight mb-7">
            Winning Souls.<br />
            <span className="text-red-600">Building</span> the Church.
          </h2>

          <p className="text-[15px] text-black font-normal leading-[1.9] mb-6">
            Saved by Divine Grace of God Ministry is committed to winning souls
            through evangelism and building a strong prayer and word-driven
            church — a community where every member is rooted in faith and
            equipped for purpose.
          </p>

          <p className="text-[15px] text-black font-normal leading-[1.9]">
            We believe the church is not a building but a people — a family of
            fellowcitizens with the saints and of the household of God,
            called to reflect His grace in every sphere of life.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="flex flex-col justify-center px-0 py-12 lg:py-0 lg:pl-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-[14px] font-medium tracking-[3.5px] uppercase text-red-600 mb-5 block">
            Vision
          </span>

          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-neutral-900 leading-[1.1] tracking-tight mb-7">
            Sent to<br />
            <span className="text-red-600">Restore</span> and Raise.
          </h2>

          <ul className="flex flex-col gap-4">
            {[
              "Sent to encourage the discouraged",
              "Giving hope to the hopeless",
              "Rescuing the ex-champion",
              "Bringing sinners from the pit of sin through the power of His word and prophetic vision",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <span className="mt-[6px] text-[10px] font-bold text-red-600 shrink-0">
                  0{i + 1}
                </span>
                <span className="text-[15px] text-black font-normal leading-[1.8]">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}