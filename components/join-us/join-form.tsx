"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Check } from "lucide-react"

const departments = [
  "Choir / Worship Team",
  "Ushering",
  "Media & Technical",
  "Youth Ministry",
  "Children's Ministry",
  // "Women's Fellowship",
  // "Men's Fellowship",
  // "Evangelism & Outreach",
  "Prayer Team",
  "Protocol",
  "General Membership",
]

const branches = [
  "Ore, Ondo State (Headquarters)",
  // "Other Branch",
]

type Status = "idle" | "loading" | "success" | "error"

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    branch: "",
  })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()

    if (!form.name || !form.phone || !form.email || !form.department) {
      setErrorMsg("Please fill in all required fields.")
      return
    }

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setForm({ name: "", phone: "", email: "", department: "", branch: "" })
    } catch {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="bg-neutral-50 py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left — context */}
        <motion.div
          className="flex flex-col gap-6 lg:sticky lg:top-32"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center gap-3">
            
            <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-red-600">
              Get Connected
            </span>
          </div>

          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-neutral-900 uppercase tracking-tight leading-[1.1]">
            Take the <br />
            <span className="text-red-600">First Step</span>
          </h2>

          <p className="text-[15px] text-neutral-500 font-normal leading-[1.9] max-w-md">
            Fill in the form and a member of our team will reach out to
            welcome you personally and connect you to the right department
            or branch. No pressure — just a warm hello.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-5 mt-4">
            {[
              { step: "01", text: "Fill in your details below" },
              { step: "02", text: "We reach out within 24–48 hours" },
              { step: "03", text: "Get connected to your department or branch" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-[11px] font-extrabold text-red-600 tracking-[2px] w-8 shrink-0">
                  {item.step}
                </span>
                <span className="text-[14px] text-neutral-600 font-normal">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {status === "success" ? (
            <motion.div
              className="bg-white p-12 flex flex-col items-center text-center gap-5"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">

                <Check className="text-red-600" size={24} />

              </div>
              <h3 className="text-[22px] font-extrabold text-neutral-900 uppercase tracking-tight">
                Welcome to the Family
              </h3>
              <p className="text-[14px] text-neutral-500 font-normal leading-[1.85] max-w-sm">
                We have received your details and will be in touch within
                24–48 hours. We are excited to have you.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-[11px] font-medium tracking-[1.5px] uppercase text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                Submit Another
              </button>
            </motion.div>
          ) : (
            <div className="bg-white p-10 flex flex-col gap-7">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[2.5px] uppercase text-black">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-neutral-200 focus:border-red-600 outline-none px-4 py-3.5 text-[14px] text-neutral-900 font-normal placeholder:text-neutral-300 transition-colors duration-200 bg-transparent"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[2.5px] uppercase text-black">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="08012345678"
                  className="w-full border border-neutral-200 focus:border-red-600 outline-none px-4 py-3.5 text-[14px] text-neutral-900 font-normal placeholder:text-neutral-300 transition-colors duration-200 bg-transparent"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[2.5px] uppercase text-black">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-neutral-200 focus:border-red-600 outline-none px-4 py-3.5 text-[14px] text-neutral-900 font-normal placeholder:text-neutral-300 transition-colors duration-200 bg-transparent"
                />
              </div>

              {/* Department */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[2.5px] uppercase text-black">
                  Department of Interest <span className="text-red-600">*</span>
                </label>
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  className="w-full border border-neutral-200 focus:border-red-600 outline-none px-4 py-3.5 text-[14px] text-neutral-900 font-normal transition-colors duration-200 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a department</option>
                  {departments.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Branch */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[2.5px] uppercase text-black">
                  Branch (optional)
                </label>
                <select
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                  className="w-full border border-neutral-200 focus:border-red-600 outline-none px-4 py-3.5 text-[14px] text-neutral-900 font-normal transition-colors duration-200 bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select a branch</option>
                  {branches.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Error */}
              {errorMsg && (
                <p className="text-[12px] text-red-600 font-normal">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <motion.button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white text-[11px] font-medium tracking-[2px] uppercase py-4 transition-colors duration-200 flex items-center justify-center gap-3"
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Join the Family
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </motion.button>

              <p className="text-[11px] text-neutral-400 font-normal text-center leading-[1.7]">
                By submitting this form you agree to be contacted by
                a member of the SBDG team.
              </p>

            </div>
          )}
        </motion.div>

      </div>
    </section>
  )
}