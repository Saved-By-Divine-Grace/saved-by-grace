"use client"

import { motion } from "motion/react"
import ScriptureQuote from "../shared/scripture-quote"

export default function WhyWeGive() {
  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-neutral-900 leading-[1.1] tracking-tight uppercase mb-6">
            Why We <span className="text-red-600">Give</span>
          </h2>
          
          <p className="text-[15px] text-black font-normal leading-[1.9] mb-5">
            Giving is an act of worship, a tangible expression of our trust
            in God as our provider and source. At Saved By Divine Grace of God
            Ministry, we give not out of compulsion but out of a heart
            surrendered to the purposes of God.
          </p>
          <p className="text-[15px] text-black font-normal leading-[1.9]">
            Every seed sown into this ministry goes directly toward advancing
            the gospel, winning souls, and building a strong, word-driven
            church that impacts lives across Nigeria and beyond.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              reference: "Malachi 3:10",
              quote: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty.",
            },
            {
              reference: "Luke 6:38",
              quote: "Give, and it will be given to you — a good measure, pressed down, shaken together and running over.",
            },
          ].map((item ) => (

            <ScriptureQuote
              key={item.reference}
              reference={item.reference}
              quote={item.quote}
            
              
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}