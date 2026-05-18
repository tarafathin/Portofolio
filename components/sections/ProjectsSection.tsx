"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section id="projects" className="section-padding overflow-hidden" style={{ background: "#F8F2E4" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Featured Projects" />

        <div className="mt-12 flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black leading-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              color: "#0A120A",
            }}
          >
            Work that{" "}
            <span style={{ color: "var(--accent)" }}>solves</span>
            <br />
            real problems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm max-w-md"
            style={{ color: "#6A7A6A", fontFamily: "Inter, sans-serif" }}
          >
            Setiap project dikerjakan dengan pendekatan UX thinking — dari
            riset masalah hingga solusi final yang terukur.
          </motion.p>
        </div>

        {/* Tab pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mt-10 mb-8"
        >
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className="text-sm px-4 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: "Syne, sans-serif",
                background: active === i ? "var(--accent)" : "rgba(10,18,10,0.06)",
                color: active === i ? "#0A120A" : "#4A5A4A",
                border: active === i
                  ? "1.5px solid var(--accent)"
                  : "1.5px solid rgba(10,18,10,0.12)",
              }}
            >
              {p.title}
            </button>
          ))}
        </motion.div>

        {/* Case study card */}
        <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl overflow-hidden border shadow-sm"
          style={{
            background: "var(--bg-primary)",
            borderColor: "rgba(232,160,32,0.15)",
          }}
        >
          {/* Header bar */}
          <div
            className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b"
            style={{ borderColor: "rgba(232,160,32,0.15)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: project.color }}
              />
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-0.5"
                  style={{ color: "var(--cream-muted)", fontFamily: "Syne, sans-serif" }}
                >
                  {project.period}
                </p>
                <h3
                  className="font-display font-black text-2xl"
                  style={{ color: "var(--cream)", fontFamily: "Syne, sans-serif" }}
                >
                  {project.title}
                  <span
                    className="ml-3 text-sm font-normal"
                    style={{ color: "var(--cream-muted)" }}
                  >
                    — {project.subtitle}
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(232,160,32,0.15)",
                  color: "var(--accent)",
                  fontFamily: "Syne, sans-serif",
                }}
              >
                {project.badge}
              </span>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex flex-col md:flex-row">
            {/* Left column: Text & Footer */}
            <div className="flex-1 flex flex-col">
              {/* Case study body */}
              <div className="px-8 py-8 flex flex-col gap-8 flex-1">
                <CaseBlock title="Problem" text={project.problem} />
                <CaseBlock title="Solution" text={project.solution} />
                <CaseBlock title="UX Thinking" text={project.uxThinking} />

                {/* Action Buttons */}
                {(project as any).links && (
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    {(project as any).links.playStore && (
                      <a
                        href={(project as any).links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-md hover:shadow-lg"
                        style={{ background: "#2D5A3D", color: "#FFFFFF", fontFamily: "Syne, sans-serif" }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 2.522v18.956c0 .543.585.86 1.03.543l14.829-10.02a.663.663 0 000-1.085L5.03 1.979C4.585 1.662 4 1.979 4 2.522z" />
                        </svg>
                        Get it on Play Store
                      </a>
                    )}
                    {(project as any).links.github && (
                      <a
                        href={(project as any).links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-md hover:shadow-lg"
                        style={{ background: "#2D5A3D", color: "#FFFFFF", fontFamily: "Syne, sans-serif" }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub Repo
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Footer — tools + role */}
              <div
                className="px-8 py-5 border-t flex flex-col xl:flex-row xl:items-center justify-between gap-4 mt-auto"
                style={{ borderColor: "rgba(232,160,32,0.15)" }}
              >
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: "rgba(240,234,214,0.15)",
                        color: "var(--cream-muted)",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2 xl:mt-0 shrink-0">
                  <span
                    className="text-xs"
                    style={{ color: "var(--cream-muted)", fontFamily: "Syne, sans-serif" }}
                  >
                    Role:
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
                  >
                    {project.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Right column: Portrait Mockup */}
            <div
              className="w-full md:w-80 lg:w-[380px] p-8 border-t md:border-t-0 md:border-l flex flex-col shrink-0"
              style={{ borderColor: "rgba(232,160,32,0.15)" }}
            >
              {/* Jika project memiliki gambar, tampilkan Image. Jika tidak, tampilkan placeholder */}
              {(project as any).image ? (
                <div className="relative w-full flex-1 flex items-center justify-center">
                  <Image
                    src={(project as any).image}
                    alt={`Mockup ${project.title}`}
                    width={500}
                    height={1000}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
              ) : (
                /* Visual placeholder (portrait) */
                <div
                  className="flex-1 min-h-[300px] md:min-h-[400px] rounded-2xl flex items-center justify-center border-2 border-dashed group transition-colors hover:bg-[rgba(232,160,32,0.02)]"
                  style={{ borderColor: "rgba(232,160,32,0.2)" }}
                >
                  <div className="text-center px-4">
                    <p
                      className="text-2xl mb-2"
                      style={{ color: "var(--accent)", opacity: 0.5 }}
                    >
                      ◈
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
                    >
                      Tambahkan mockup portrait <strong>{project.title}</strong> di sini
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="flex items-center gap-4 mt-6 justify-end">
          <button
            onClick={() => setActive((p) => Math.max(0, p - 1))}
            disabled={active === 0}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-[#E8A020] hover:border-[#E8A020] hover:text-white hover:scale-110 disabled:hover:bg-transparent disabled:hover:border-[rgba(10,18,10,0.15)] disabled:hover:text-[#C0C8C0] disabled:hover:scale-100"
            style={{
              borderColor: "rgba(10,18,10,0.15)",
              color: active === 0 ? "#C0C8C0" : "#0A120A",
              cursor: active === 0 ? "not-allowed" : "pointer",
            }}
          >
            ←
          </button>
          <span
            className="text-xs"
            style={{ color: "#8A9A8A", fontFamily: "Inter, sans-serif" }}
          >
            {active + 1} / {PROJECTS.length}
          </span>
          <button
            onClick={() =>
              setActive((p) => Math.min(PROJECTS.length - 1, p + 1))
            }
            disabled={active === PROJECTS.length - 1}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-[#E8A020] hover:border-[#E8A020] hover:text-white hover:scale-110 disabled:hover:bg-transparent disabled:hover:border-[rgba(10,18,10,0.15)] disabled:hover:text-[#C0C8C0] disabled:hover:scale-100"
            style={{
              borderColor: "rgba(10,18,10,0.15)",
              color: active === PROJECTS.length - 1 ? "#C0C8C0" : "#0A120A",
              cursor: active === PROJECTS.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

function CaseBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-bold tracking-widest uppercase"
          style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
        >
          {title}
        </span>
      </div>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
      >
        {text}
      </p>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-px" style={{ background: "var(--accent)" }} />
      <span
        className="text-xs font-bold tracking-widest uppercase"
        style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}
