"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Sermon } from "@/types/sermon"
import SermonCard from "./sermon-card"

interface SermonGridProps {
  sermons: Sermon[]
}

export default function SermonGrid({ sermons }: SermonGridProps) {
  const [activeSeries, setActiveSeries] = useState<string>("all")
  const [activePlatform, setActivePlatform] = useState<string>("all")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    return sermons.filter(() => {
      // const matchesPlatform =
      //   activePlatform === "all" || s.platform === activePlatform
      // const matchesSearch =
      //   search === "" ||
      //   s.title.toLowerCase().includes(search.toLowerCase()) ||
      //   s.preacher?.toLowerCase().includes(search.toLowerCase())
    
    })
  }, [sermons])

  return (
    <section className="bg-neutral-50 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* filter bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-12">

          {/* series filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveSeries("all")}
              className={`text-[11px] font-medium tracking-[1px] uppercase px-4 py-2 transition-colors duration-200 ${
                activeSeries === "all"
                  ? "bg-red-600 text-white"
                  : "bg-white text-neutral-600 hover:text-red-600 border border-neutral-200"
              }`}
            >
              All
            </button>
            
          </div>

          {/* right — platform + search */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* platform */}
            {["all", "youtube", "facebook"].map((p) => (
              <button
                key={p}
                onClick={() => setActivePlatform(p)}
                className={`text-[11px] font-medium tracking-[1px] uppercase px-4 py-2 transition-colors duration-200 ${
                  activePlatform === p
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200"
                }`}
              >
                {p === "all" ? "All Platforms" : p}
              </button>
            ))}

            {/* search */}
            <input
              type="text"
              placeholder="Search sermons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-[13px] font-normal text-neutral-700 placeholder:text-neutral-400 border border-neutral-200 bg-white px-4 py-2 outline-none focus:border-red-600 transition-colors duration-200 w-[200px]"
            />
          </div>
        </div>

        {/* results count */}
        <p className="text-[12px] text-neutral-400 font-normal mb-8 tracking-wide">
          {filtered.length} sermon{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((sermon, i) => (
                <motion.div
                  key={sermon._id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                >
                  <SermonCard sermon={sermon} />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-[15px] text-neutral-400 font-normal">
                  No sermons found.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}