"use client";

import { PROFILE } from "@/lib/data";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding overflow-hidden"
      style={{ background: "var(--cream-50, #FEFCF7)", color: "var(--text-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label matching Image 2 style */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px" style={{ background: "var(--accent)" }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              color: "var(--accent)",
              fontFamily: "Syne, sans-serif",
            }}
          >
            ABOUT ME
          </span>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-12 md:gap-20 justify-between items-start">
          {/* Left Column: Heading + Underline + Paragraphs */}
          <motion.div 
            className="flex flex-col max-w-3xl w-full text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="font-display font-black leading-tight mb-6 text-left"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#0A120A",
              }}
            >
              Hello, I&apos;m{" "}
              <span style={{ color: "var(--accent)" }}>Tara</span>
            </h2>

            {/* Short line under heading as in Image 2 */}
            <div 
              className="w-16 h-1 mb-8" 
              style={{ background: "var(--accent)" }}
            />

            {/* Vertical stacked paragraphs */}
            <div className="flex flex-col gap-6">
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{
                  color: "#3A4A3A",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {PROFILE.bio}
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{
                  color: "#5A6A5A",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {PROFILE.bioLong}
              </p>
            </div>
          </motion.div>

          {/* Stats stacked vertically on the right */}
          <motion.div 
            className="flex flex-col gap-5 w-full md:w-auto md:min-w-[240px] lg:pr-12 lg:pt-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stat value="3.41" label="GPA / 4.00" />
            <Stat value="4+" label="Projects Built" />
            <Stat value="1" label="App on Play Store" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div 
      className="p-6 rounded-2xl border text-left card-lift transition-all duration-300 hover:border-[#E8A020]"
      style={{
        background: "#FFFFFF",
        borderColor: "rgba(10,18,10,0.06)",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)"
      }}
    >
      <p
        className="font-display font-black text-4xl md:text-5xl leading-none"
        style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
      >
        {value}
      </p>
      <p
        className="text-xs md:text-sm mt-3 font-medium uppercase tracking-wider"
        style={{ color: "#6A7A6A", fontFamily: "Inter, sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}
