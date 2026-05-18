"use client";

import { SKILLS, SOFT_SKILLS } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <SectionLabel label="Skills & Tools" />

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          {/* Left heading */}
          <div>
            <h2
              className="font-display font-black leading-tight mb-6 text-left"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                color: "var(--cream)",
              }}
            >
              What I bring
              <br />
              to the{" "}
              <span style={{ color: "var(--accent)" }}>table.</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-8 max-w-sm text-left"
              style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
            >
              Saya mengkombinasikan design thinking dan technical skills untuk
              membangun produk digital yang bukan hanya indah — tapi juga
              berfungsi dengan baik.
            </p>

            {/* Soft skills as tags */}
            <div className="text-left">
              <p
                className="text-xs tracking-widest uppercase mb-3 text-left"
                style={{ color: "var(--cream-muted)", fontFamily: "Syne, sans-serif" }}
              >
                Soft Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: "rgba(240,234,214,0.2)",
                      color: "var(--cream-muted)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — skill cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((group) => (
              <SkillCard key={group.category} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
}: {
  group: { category: string; icon: string; items: string[] };
}) {
  return (
    <div
      className="card-lift p-5 rounded-2xl border relative overflow-hidden group hover:border-[#E8A020]/50 transition-colors"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Icon + category */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xl group-hover:scale-125 transition-transform duration-300"
          style={{ color: "var(--accent)" }}
        >
          {group.icon}
        </span>
        <span
          className="text-sm font-bold tracking-wide"
          style={{ color: "var(--cream)", fontFamily: "Syne, sans-serif" }}
        >
          {group.category}
        </span>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: "rgba(232,160,32,0.12)",
              color: "var(--accent-light, #F5C842)",
              fontFamily: "Inter, sans-serif",
              border: "1px solid rgba(232,160,32,0.2)",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Decorative corner */}
      <div
        className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"
        style={{ background: "var(--accent)" }}
      />
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
