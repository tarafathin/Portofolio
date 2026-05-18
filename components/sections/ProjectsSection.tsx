"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import Image from "next/image";

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: "#F8F2E4" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <SectionLabel label="Featured Projects" />

        <div className="mt-12 flex flex-col gap-4">
          <h2
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
          </h2>
          <p
            className="text-sm max-w-md"
            style={{ color: "#6A7A6A", fontFamily: "Inter, sans-serif" }}
          >
            Setiap project dikerjakan dengan pendekatan UX thinking — dari
            riset masalah hingga solusi final yang terukur.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap gap-2 mt-10 mb-8">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className="text-sm px-4 py-2 rounded-full font-semibold transition-all duration-200"
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
        </div>

        {/* Case study card */}
        <div
          key={project.id}
          className="rounded-3xl overflow-hidden border"
          style={{
            background: "var(--bg-primary)",
            borderColor: "rgba(232,160,32,0.15)",
            animation: "fadeIn 0.35s ease",
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
                <CaseBlock icon="🔍" title="Problem" text={project.problem} />
                <CaseBlock icon="💡" title="Solution" text={project.solution} />
                <CaseBlock icon="🧠" title="UX Thinking" text={project.uxThinking} />
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
                <div 
                  className="relative flex-1 min-h-[400px] md:min-h-[500px] w-full rounded-2xl overflow-hidden border flex items-center justify-center" 
                  style={{ borderColor: "rgba(232,160,32,0.2)", background: "rgba(0,0,0,0.2)" }}
                >
                  <div className="relative w-full h-full p-4">
                    <Image
                      src={(project as any).image}
                      alt={`Mockup ${project.title}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </div>
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
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-4 mt-6 justify-end">
          <button
            onClick={() => setActive((p) => Math.max(0, p - 1))}
            disabled={active === 0}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
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
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
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
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base">{icon}</span>
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
