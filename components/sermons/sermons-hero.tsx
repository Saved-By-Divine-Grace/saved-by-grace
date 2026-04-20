"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Sermon } from "@/types/sermon"
import { urlFor } from "@/sanity/lib/image"
import { format } from "date-fns"

interface SermonsHeroProps {
  featured: Sermon | null
}

export default function SermonsHero({ featured }: SermonsHeroProps) {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-neutral-950 flex items-end">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        {featured?.thumbnail ? (
          <Image
            src={urlFor(featured.thumbnail).width(1600).url()}
            alt={featured.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <Image
            src="/sbg-hero.jpg"
            alt="Sermons"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 pt-32">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-red-500">
              {featured ? "Featured Sermon" : "Sermons"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(28px,5vw,56px)] font-extrabold text-white leading-[1.05] tracking-tight uppercase mb-4">
            {featured
              ? featured.title
              : "The Word. Preached. With Power."}
          </h1>

          {/* Meta */}
          {featured && (
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <span className="text-[13px] text-white/60 font-normal">
                {featured.preacher}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-[13px] text-white/60 font-normal">
                {format(new Date(featured.date), "MMMM d, yyyy")}
              </span>
              {featured.series && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-[13px] text-white/60 font-normal">
                    {featured.series.title}
                  </span>
                </>
              )}
              {featured.duration && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-[13px] text-white/60 font-normal">
                    {featured.duration}
                  </span>
                </>
              )}
              {/* Platform badge */}
              <span
                className={`text-[10px] font-medium tracking-[1.5px] uppercase px-3 py-1 ${
                  featured.platform === "youtube"
                    ? "bg-red-600 text-white"
                    : "bg-blue-600 text-white"
                }`}
              >
                {featured.platform}
              </span>
            </div>
          )}

          {/* CTA */}
          {featured && (
            <Link
              href={featured.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium tracking-[1.5px] uppercase px-8 py-4 transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Now
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}