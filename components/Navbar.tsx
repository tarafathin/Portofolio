"use client";

import { useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-6xl rounded-full bg-[#2D5A3D] shadow-xl ${
        scrolled ? "top-4 py-2" : "top-6 py-3"
      }`}
    >
      <div className="px-6 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 font-display font-bold text-lg tracking-tight"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E8A020] flex items-center justify-center text-[#2D5A3D] text-lg font-black">
            T
          </div>
          <span className="text-white">TAF.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "Inter, sans-serif",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#E8A020")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={`mailto:${PROFILE.email}`}
          className="hidden md:inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300 bg-white"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300 bg-white"
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300 bg-white"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-4 rounded-2xl md:hidden px-6 py-6 flex flex-col gap-5 shadow-2xl bg-[#2D5A3D]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white/80 hover:text-[#E8A020]"
              style={{ fontFamily: "Inter, sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="bg-white text-gray-900 w-full text-center rounded-full py-3 font-semibold mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
