"use client"

import { motion } from "motion/react"
import { FaQuoteRight } from "react-icons/fa"

interface ScriptureQuoteProps {
  quote: string
  reference: string
  className?: string
}

export default function ScriptureQuote({
  quote,
  reference,
  className,
}: ScriptureQuoteProps) {
  return (
    <motion.blockquote
      className={`relative overflow-hidden tracking-tight text-lg my-8 lg:py-6 lg:pl-6 pr-12 p-4 border border-neutral-200 rounded-md ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      
      <FaQuoteRight className="text-8xl absolute -top-7 -right-5 -rotate-12 text-red-200 pointer-events-none select-none" />

      {/* text */}
      <p className="text-[15px] text-black leading-[1.85] font-normal relative z-10">
        {quote}
      </p>

      {/* reference */}
      <div className="mt-5 flex items-center gap-3 relative z-10">
        
        <span className="text-[10px] font-semibold tracking-[2.5px] uppercase text-red-600">
          {reference}
        </span>
      </div>
    </motion.blockquote>
  )
}