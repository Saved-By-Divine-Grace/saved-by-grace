"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  // { label: "Prayer Wall", href: "/prayer-wall" },
  { label: "Giving", href: "/give" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all  mx-auto duration-400",
          scrolled
            ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)] py-4"
            : "bg-transparent py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">

            <div
              className={cn(
                "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-400",
                scrolled ? "border-black/15" : "border-white/30",
              )}
              >
              <div className="bg-white w-fit rounded-full">
              <Image
                src="/sbdg-logo.png"
                alt="SBDG Logo"
                width={40}
                height={40}
                />
                </div>
            </div>

            <div>
              <p
                className={cn(
                  "text-[15px] font-bold leading-tight transition-colors duration-400",
                  menuOpen || scrolled ? "text-neutral-900" : "text-white",
                )}
              >
                Saved By Divine Grace
              </p>
              <span className="block text-[9px] font-semibold tracking-[2.5px] uppercase text-red-600 mt-0.5">
                Of God Ministry
              </span>
            </div>
                
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-[12px] font-semibold tracking-widest uppercase px-3.5 py-2 transition-colors duration-250",
                    "after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-[1.5px] after:bg-red-600",
                    "after:scale-x-0 after:origin-left after:transition-transform after:duration-250",
                    "hover:after:scale-x-100 hover:text-red-600",
                    scrolled ? "text-neutral-800" : "text-white/85",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/join-us"
                className="ml-2 bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium tracking-[1.5px] uppercase px-5 py-2.5 transition-colors duration-200"
              >
                Join Us
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X
                size={22}
                className={cn(
                  "transition-colors duration-400",
                  scrolled ? "text-neutral-900" : "text-black/80",
                )}
              />
            ) : (
              <Menu
                size={22}
                className={cn(
                  "transition-colors duration-400",
                  scrolled ? "text-neutral-900" : "text-white",
                )}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white flex flex-col items-center justify-center px-8 pt-20 pb-12",
          "transition-transform duration-[450ms] ease-[cubic-bezier(0.77,0,0.175,1)]",
          menuOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <nav className="flex flex-col items-center w-full gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className=" text-[28px] font-bold text-neutral-900 hover:text-red-600 transition-colors duration-200 py-3 w-full text-center "
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/join-us"
            onClick={closeMenu}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-sans text-[13px] font-medium tracking-[1.5px] uppercase px-12 py-4 transition-colors duration-200"
          >
            Join Us
          </Link>
        </nav>

        {/* <div className="mt-10 text-center">
          <p className="text-[11px] tracking-[2px] uppercase text-neutral-400 mb-1">
            Sunday Service
          </p>
          <p className="text-[13px] font-medium text-neutral-900">
            8:00 AM &amp; 10:30 AM
          </p>
        </div> */}
      </div>
    </>
  );
}
