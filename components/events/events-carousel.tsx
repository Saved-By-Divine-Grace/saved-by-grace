"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { SBDGEvent } from "@/types/events"
import { urlFor } from "@/sanity/lib/image"
import { format } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface EventsCarouselProps {
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

export default function EventsCarousel({ events }: EventsCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? events.length - 1 : c - 1))
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c === events.length - 1 ? 0 : c + 1))
  }

  if (events.length === 0) {
    return (
      <section className="bg-neutral-50 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-4 py-16">
          <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </div>
          <h3 className="text-[20px] font-extrabold text-neutral-900 uppercase tracking-tight">
            No Upcoming Events
          </h3>
          <p className="text-[14px] text-neutral-500 font-normal max-w-sm leading-[1.8]">
            Check back soon — something is always in the works at SBDG.
          </p>
        </div>
      </section>
    )
  }

  const event = events[current]

  return (
    <section className="bg-neutral-50 py-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-red-600" />
            <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-red-600">
              Upcoming Events
            </span>
          </div>

          {events.length > 1 && (
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-neutral-400 font-normal tabular-nums">
                {String(current + 1).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
              </span>
              <button
                onClick={prev}
                className="w-10 h-10 border border-neutral-200 hover:border-red-600 flex items-center justify-center transition-colors duration-200 group rounded-md bg-white"
              >
                <ChevronLeft size={16} className="text-neutral-400 group-hover:text-red-600 transition-colors" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-neutral-200 hover:border-red-600 flex items-center justify-center transition-colors duration-200 group rounded-md bg-white"
              >
                <ChevronRight size={16} className="text-neutral-400 group-hover:text-red-600 transition-colors" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={event._id}
            custom={direction}
            variants={{
              enter: (d: number) => ({
                x: d > 0 ? 60 : -60,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({
                x: d > 0 ? -60 : 60,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md min-h-[480px]"
          >
            {/* Image side */}
            <div className="relative overflow-hidden bg-neutral-50 min-h-[300px] lg:min-h-full">
              {event.image ? (
                <Image
                  src={urlFor(event.image).width(800).url()}
                  alt={event.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
              )}

              {/* Type badge */}
              <div className="absolute top-5 left-5">
                <span className="bg-red-600 text-white text-[10px] font-medium tracking-[1.5px] uppercase px-3 py-1.5 rounded-sm shadow">
                  {typeLabels[event.type] || event.type}
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center gap-6">

              {/* Date */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold tracking-[3px] uppercase text-red-600">
                  {format(new Date(event.date), "EEEE")}
                </span>
                <span className="text-[30px] font-extrabold text-neutral-900 leading-none tracking-tight">
                  {format(new Date(event.date), "MMMM d, yyyy")}
                </span>
                <span className="text-[14px] text-neutral-500 font-normal mt-1">
                  {format(new Date(event.date), "h:mm a")}
                  {event.endDate && ` — ${format(new Date(event.endDate), "h:mm a")}`}
                </span>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-neutral-200" />

              {/* Title */}
              <h2 className="text-[clamp(22px,3vw,34px)] font-extrabold text-neutral-900 leading-tight uppercase tracking-tight">
                {event.title}
              </h2>

              {/* Description */}
              {event.description && (
                <p className="text-[14px] text-neutral-600 font-normal leading-[1.8] max-w-md">
                  {event.description}
                </p>
              )}

              {/* Location */}
              <div className="flex items-start gap-3 mt-auto pt-4 border-t border-neutral-100">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[13px] text-neutral-600 font-normal leading-[1.7]">
                  {event.location}
                </span>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        {events.length > 1 && (
          <div className="flex items-center gap-2 mt-8 justify-center">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                className={`transition-all duration-300 ${
                  i === current
                    ? "w-8 h-1.5 bg-red-600"
                    : "w-1.5 h-1.5 rounded-full bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}