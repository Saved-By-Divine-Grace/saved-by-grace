"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import ScriptureQuote from "../shared/scripture-quote";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export default function MissionStrip() {
  return (
    <div className="bg-white w-full">

    <section className="bg-white max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
      <div className="flex flex-col  justify-center px-5 py-20 md:px-10 md:py-24 overflow-hidden">
        {/* eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-7"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
         
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-red-600">
            Who We Are
          </span>
        </motion.div>

        {/* headline */}
        <motion.h2
          className="text-[clamp(36px,5vw,62px)] font-bold text-neutral-900 leading-[1.05] mb-7"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Welcome to <span className="text-red-600 ">Saved by </span>
          
          <span className="text-red-600 ">Divine Grace!</span>
        </motion.h2>

        {/* first paragraph */}
        <motion.p
          className="text-[15px] text-black leading-[1.85] mb-5 font-normal max-w-md"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          We are more than a church. We are a family rooted in faith, driven by
          the power of God&lsquo;s word and sustained by His unending grace. Our
          mission is to win souls through evangelism and raise a strong prayer
          and word-driven community.
        </motion.p>

        {/* second paragraph */}
        <motion.p
          className="text-[15px] text-black leading-[1.85] mb-8 font-normal max-w-md"
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          We are sent to encourage the discouraged, give hope to the hopeless,
          rescue the ex-champion, and bring sinners out of the pit of sin
          through the power of His word and prophetic vision.
        </motion.p>

        {/* scripture */}

        <ScriptureQuote
          quote="Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God."
          reference="Ephesians 2:19"
          />

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            href="/join-us"
            className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[1px] uppercase px-7 py-3.5 rounded-full border border-neutral-300 hover:border-red-600 hover:text-red-600 text-neutral-700 transition-colors duration-200"
            >
            Join Our Family
         
          </Link>
        </motion.div>
      </div>

      {/* Right — Image */}
      <motion.div
        className="relative min-h-[400px] lg:min-h-full overflow-hidden"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        >
        <Image
          src="/sbg-hero.jpg"
          alt="SBDG congregation in worship"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />

        {/* Floating scripture card */}
        <motion.div
          className="absolute bottom-8 left-8 right-8 lg:right-auto lg:max-w-xs bg-white/90 backdrop-blur-sm px-6 py-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="text-[9px] tracking-[2.5px] uppercase text-red-600 font-medium">
              Our Mission
            </span>
          </div>
          <p className="text-[13px] text-neutral-700 leading-[1.7] font-light">
            Winning souls through evangelism and building a strong prayer and
            word-driven church.
          </p>
        </motion.div>
      </motion.div>
    </section>
          </div>
  );
}
