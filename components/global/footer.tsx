import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1HHexaa6Cq/",
    svg: "/icons/facebook.svg",
  },

  {
    label: "YouTube",
    href: "https://www.youtube.com/@opeyemisolomon",
    svg: "/icons/youtube.svg",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/sbdg_m",
    svg: "/icons/instagram.svg",
  },
  {
    label: "Telegram",
    href: "https://t.me/sbdgmfamily",
    svg: "/icons/telegram.svg",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2347058733304",
    svg: "/icons/whatsapp.svg",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Give", href: "/give" },
];

const connectLinks = [
  { label: "New Here", href: "/join-us" },
  // { label: "Prayer Wall", href: "/prayer-wall" },
  // { label: "Contact Us", href: "/contact" },
  { label: "Join a Family", href: "/about#families" },
  // { label: "Volunteer", href: "/ministries#volunteer" },
];

// const legalLinks = [
//   { label: "Privacy Policy", href: "/privacy-policy" },
//   { label: "Terms of Use", href: "/terms" },
// ]

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-black">
      {/* Top CTA band */}
      <div className="border-y border-red-600">
        <div className="max-w-7xl mx-auto text-center md:text-left lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium tracking-[3.5px] uppercase text-red-500 mb-2">
              You Belong Here
            </p>
            <h3 className="text-[clamp(22px,3vw,32px)] font-extrabold text-black uppercase leading-tight tracking-tight">
              Join Us This <span className="text-red-600">Sunday</span>
            </h3>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/new-here"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium tracking-[1.5px] uppercase px-7 py-3.5 transition-colors duration-200"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/give"
              className="inline-flex items-center gap-2 border border-red-600 hover:border-red-600 text-black text-[11px] font-medium tracking-[1.5px] uppercase px-7 py-3.5 transition-colors duration-200"
            >
              Give Online
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* logo */}
            <div className="mb-1 bg-white w-fit rounded-full">
              <Image
                src="/sbdg-logo.png"
                alt="Saved By Divine Grace of God Ministry"
                width={90}
                height={48}
              />
            </div>

            <p className="text-[13px] text-black font-normal leading-[1.85] max-w-xs">
              Committed to winning souls through evangelism and building a
              strong prayer and word-driven church.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-black hover:border-red-600 hover:bg-red-600/10 transition-all duration-200"
                >
                  <Image
                    src={social.svg as string}
                    alt={social.label}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>

          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <p className="text-[13px] font-semibold tracking-[3px] uppercase text-black">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-black hover:text-red-500 font-normal transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-[1px] bg-black group-hover:bg-red-600 group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div className="flex flex-col gap-5">
            <p className="text-[13px] font-semibold tracking-[3px] uppercase text-black">
              Connect
            </p>
            <ul className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-black hover:text-red-500 font-normal transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-[1px] bg-black group-hover:bg-red-600 group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div id="contact" className="flex flex-col gap-5">
            <p className="text-[13px] font-semibold tracking-[3px] uppercase text-black">
              Contact
            </p>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex flex-col gap-1">
                <p className="text-[9px] font-medium tracking-[2px] uppercase text-red-500">
                  Headquarters
                </p>
                <p className="text-[13px] text-black font-normal leading-[1.75]">
                  Behind Kamadec Filling Station,
                  <br />
                  Omi-Ayo, Ore,
                  <br />
                  Ondo State, Nigeria.
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <p className="text-[9px] font-medium tracking-[2px] uppercase text-red-500">
                  Phone
                </p>
                {["08068900228", "09075791331", "07058733304"].map((num) => (
                  <Link
                    key={num}
                    href={`tel:+234${num.slice(1)}`}
                    className="text-[13px] text-black hover:text-red-500 font-normal transition-colors duration-200"
                  >
                    {num}
                  </Link>
                ))}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <p className="text-[9px] font-semibold tracking-[2px] uppercase text-red-500">
                  Email
                </p>
                <Link
                  href="mailto:sbdgm01@gmail.com"
                  className="text-[13px] text-black hover:text-red-500 font-normal transition-colors duration-200"
                >
                  sbdgm01@gmail.com
                </Link>
              </div>

              {/* WhatsApp CTA */}
              <Link
                href="https://wa.me/2347058733304"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-green-500 hover:text-green-400 text-black text-[11px] font-medium tracking-[1px] uppercase px-5 py-3 transition-colors duration-200 w-fit"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-y border-red-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-black font-normal">
            © {year} Saved By Divine Grace of God Ministry. All rights reserved.
          </p>

          {/* <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-white hover:text-red-500 font-normal transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div> */}

          <p className="text-[11px] text-black font-normal">
            Designed &amp; built by{" "}
            <Link
              href="https://aremuolami.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-red-500 transition-colors underline duration-200"
            >
              Olamilekan Aremu
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}


