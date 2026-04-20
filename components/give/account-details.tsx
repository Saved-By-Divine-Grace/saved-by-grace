"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";


const account = {
  name: "Saved By Divine Grace of God Ministry",
  number: "1224266937",
  bank: "Zenith Bank",
}

const fields = [
  { label: "Bank", value: account.bank },
  { label: "Account Name", value: account.name },
]

export default function AccountDetails() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(account.number)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-white py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid  items-center">

      
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          
          <div className="absolute -top-4 -right-4 w-full h-full bg-red-600 z-0" />

          {/* Card */}
          <div className="relative z-10 bg-white border border-red-600 p-10 flex flex-col gap-8">

            {/* Bank + Account Name */}
            {fields.map((field, i) => (
              <motion.div
                key={field.label}
                className="flex flex-col gap-1"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-[9px] font-medium tracking-[3px] uppercase text-red-600">
                  {field.label}
                </span>
                <span className={`font-extrabold text-black tracking-tight leading-snug ${i === 0 ? "text-[20px]" : "text-[16px]"}`}>
                  {field.value}
                </span>
                {i < fields.length - 1 && (
                  <div className="w-full h-px bg-black/06 mt-6" />
                )}
              </motion.div>
            ))}

            <div className="w-full h-px bg-black/06" />

            {/* Account number */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-[9px] font-medium tracking-[3px] uppercase text-red-600">
                Account Number
              </span>

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-[clamp(24px,4vw,36px)] font-extrabold text-black tracking-[6px] leading-none">
                  {account.number}
                </span>

                <motion.button
                  onClick={copy}
                  className="shrink-0 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[10px] font-medium tracking-[1.5px] uppercase px-5 py-3 transition-colors duration-200"
                  whileTap={{ scale: 0.96 }}
                >
                  {copied ? (
                    <>
                      <FaCheck />
                      Copied
                    </>
                  ) : (
                    <>
                      <FaRegCopy />
                      Copy
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}