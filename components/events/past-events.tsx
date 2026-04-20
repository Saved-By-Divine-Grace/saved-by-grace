"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { SBDGEvent } from "@/types/events"
import { urlFor } from "@/sanity/lib/image"
import { format } from "date-fns"

interface PastEventsProps {
  events: SBDGEvent[]
}

const typeLabels: Record<string, string> = {
  "sunday-service": "Sunday Service",
  "conference": "Conference",
  "prayer-meeting": "Prayer Meeting",
  "special-programme": "Special Programme",
  "midweek-service": "Midweek Service",
  "youth-programme": "Youth Programme",
  "outreach": "Outreach",
}

export default function PastEvents({ events }: PastEventsProps) {
  if (events.length === 0) return null

  return (
    <section className="bg-neutral-50 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-[1.5px] bg-neutral-300" />
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-neutral-400">
            Past Events
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event._id}
              className="group bg-white overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                {event.image ? (
                  <Image
                    src={urlFor(event.image).width(600).url()}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-100" />
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <span className="text-[10px] font-medium tracking-[2px] uppercase text-neutral-400">
                  {typeLabels[event.type] || event.type}
                </span>
                <h3 className="text-[16px] font-extrabold text-neutral-900 uppercase tracking-tight leading-snug">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[12px] text-neutral-400 font-normal">
                    {format(new Date(event.date), "MMM d, yyyy")}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-200" />
                  <span className="text-[12px] text-neutral-400 font-normal">
                    {event.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}