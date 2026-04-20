"use client"

import Image from "next/image"
import Link from "next/link"
import { Sermon } from "@/types/sermon"
import { urlFor } from "@/sanity/lib/image"
import { format } from "date-fns"

interface SermonCardProps {
  sermon: Sermon
}

export default function SermonCard({ sermon }: SermonCardProps) {
  return (
    <Link
      href={sermon.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
        {sermon.thumbnail ? (
          <Image
            src={urlFor(sermon.thumbnail).width(600).url()}
            alt={sermon.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#aaa"
              strokeWidth="1.5"
            >
              <path d="M15 10l4.553-2.07A1 1 0 0121 8.82v6.362a1 1 0 01-1.447.892L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
        )}

        {/* play overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 transform">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* platform badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-[9px] font-medium tracking-[1.5px] uppercase px-2.5 py-1 ${
              sermon.platform === "youtube"
                ? "bg-red-600 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {sermon.platform}
          </span>
        </div>

        {/* duration */}
        {sermon.duration && (
          <div className="absolute bottom-3 right-3">
            <span className="text-[10px] font-medium text-white bg-black/60 px-2 py-0.5">
              {sermon.duration}
            </span>
          </div>
        )}
      </div>

      {/* content */}
      <div className="flex flex-col gap-2 p-5 flex-1">

       

        {/* title */}
        <h3 className="text-[16px] font-extrabold text-neutral-900 leading-snug tracking-tight group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
          {sermon.title}
        </h3>

        {/* meta */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-neutral-100 flex-wrap">
          <span className="text-[12px] text-neutral-500 font-normal">
            {sermon.preacher}
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span className="text-[12px] text-neutral-400 font-normal">
            {format(new Date(sermon.date), "MMM d, yyyy")}
          </span>
        </div>

      </div>
    </Link>
  )
}