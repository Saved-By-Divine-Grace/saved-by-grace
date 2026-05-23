"use client"

import { motion } from "motion/react"
import Image from "next/image"

interface ServiceItem {
  title: string
  day: string
  time: string
  image: string
}

const services: ServiceItem[] = [
  {
    title: "Sunday Service",
    day: "Sunday",
    time: "8:00 AM - 11:00 AM",
    
      image: "/sbg-fam.jpg",
    
  },
  {
    title: "Midweek Service",
    day: "Wednesday",
    time: "8:00AM - 12:00 PM",
    
    image: "/sbg-fam-2.jpg",
  },
  {
    title: "Journey Mercies Service",
    day: "Monday",
    time: "6:00 AM - 7:00 AM",
    
    image: "/sbg-iv.jpg",
  },
]

export default function OrderOfService() {
  return (
    <section className="bg-neutral-50 py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-5">
           
            <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-red-600">
              Join Us
            </span>
            
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 leading-[1.15] max-w-xl">
           Worship With Us!
          </h2>
          <p className="mt-4 text-[15px] text-black font-normal leading-[1.8] max-w-lg">
            We would love to have you worship with us. Here is what to expect
            when you join us at any of our services.
          </p>
        </motion.div>

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-4 items-start">
          {services.map((service, i) => {
            const isCenter = i === 1
            return (
              <motion.div
                key={service.title}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  isCenter
                    ? "md:col-span-5 md:-mt-4"
                    : "md:col-span-3 md:mt-0"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* top bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

                {/* Image */}
                <div
                  className={`relative w-full overflow-hidden bg-neutral-100 ${
                    isCenter ? "aspect-[4/3]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* content */}
                <div className={`p-6 space-y-3 ${isCenter ? "lg:p-8" : "lg:p-6"}`}>

                  {/* day badge */}
                  <span className="inline-flex items-center border border-red-600 text-red-600 group-hover:bg-red-600 group-hover:text-white text-[11px] font-medium tracking-[1px] uppercase px-4 h-[28px] rounded-full transition-colors duration-300">
                    {service.day}
                  </span>

                  {/* Title */}
                  <p className={`font-bold text-neutral-800 leading-snug transition-colors duration-300 ${isCenter ? "text-xl lg:text-2xl" : "text-base lg:text-lg"}`}>
                    {service.title}
                  </p>

                  {/* Time */}
                  <p className="text-[13px] text-red-600 font-medium tracking-wide">
                    {service.time}
                  </p>

                  
                  


                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}