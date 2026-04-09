import Image from "next/image"
import Link from "next/link"
// import { cn } from "@/lib/utils"

const vision = [
  "Sent to encourage the discouraged",
  "Giving hope to the hopeless",
  "Rescuing the ex-champion",
  "Bringing sinners from the pit of sin through the power of His word and prophetic vision",
]

export default function About() {
  return (
    <section className="bg-neutral-50 py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image side */}
        <div className="relative">
          {/* Red accent block */}
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-red-600 z-0" />

          {/* Pastor image */}
          <div className="relative z-10 aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden">
            <Image
              src="/sbg-hero.jpg"
              alt="Apostle Solomon Opeyemi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Fallback placeholder if no image yet */}
          </div>

          {/* Name card */}
          <div className="absolute z-20 bottom-0 right-0 lg:-right-8 bg-white px-6 py-4 border-l-4 border-red-600 shadow-sm">
            <p className="font-serif text-[17px] font-bold text-neutral-900">
              Apostle Solomon Opeyemi
            </p>
            <p className="text-[11px] tracking-[2px] uppercase text-red-600 font-medium mt-0.5">
              General Overseer
            </p>
          </div>

          {/* Bottom red accent */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/10 z-0" />
        </div>

        {/* Content side */}
        <div className="flex flex-col gap-0">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1.5px] bg-red-600" />
            <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-red-600">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 leading-[1.2] mb-6">
            Saved by Divine Grace{" "}
            <em className="italic text-red-600">of God Ministry</em>
          </h2>

          {/* Mission */}
          <p className="text-[15px] text-neutral-600 leading-[1.8] mb-8 font-light">
            Saved by Divine Grace of God Ministry is committed to winning souls
            through evangelism and building a strong prayer and word-driven
            church — a community where every member is a fellowcitizen with the
            saints and of the household of God.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-black/06 mb-8" />

          {/* Vision */}
          <div className="mb-10">
            <p className="text-[10px] font-medium tracking-[3px] uppercase text-neutral-400 mb-5">
              Our Vision
            </p>
            <ul className="flex flex-col gap-3">
              {vision.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span className="text-[14px] text-neutral-700 leading-[1.7]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium tracking-[1.5px] uppercase px-8 py-3.5 transition-colors duration-200"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="text-[11px] font-medium tracking-[1.5px] uppercase text-neutral-700 hover:text-red-600 transition-colors duration-200 border-b border-neutral-300 hover:border-red-600 pb-0.5"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}