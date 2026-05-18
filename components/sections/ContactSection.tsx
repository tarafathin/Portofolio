"use client";

import { PROFILE } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Big CTA card */}
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 border"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)",
            borderColor: "rgba(232,160,32,0.2)",
          }}
        >
          {/* Decorative big text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <span
              className="font-display font-black text-[18vw] leading-none"
              style={{
                fontFamily: "Syne, sans-serif",
                color: "transparent",
                WebkitTextStroke: "1px rgba(232,160,32,0.05)",
              }}
            >
              CONTACT
            </span>
          </div>

          {/* Stars */}
          <div className="absolute top-8 right-8 text-2xl" style={{ color: "var(--accent)", opacity: 0.5 }}>✦</div>
          <div className="absolute bottom-8 left-8 text-base" style={{ color: "var(--accent)", opacity: 0.3 }}>✦</div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
            >
              Let&apos;s Work Together
            </p>
            <h2
              className="font-display font-black leading-tight mb-6"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "var(--cream)",
              }}
            >
              Got a project
              <br />
              in{" "}
              <span style={{ color: "var(--accent)" }}>mind?</span>
            </h2>
            <p
              className="text-base mb-10 max-w-md mx-auto"
              style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
            >
              Saya selalu terbuka untuk kolaborasi, proyek freelance, atau
              sekadar ngobrol soal design dan teknologi.
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4 mx-auto w-fit"
            >
              Hubungi Saya
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-12">
              <ContactLink
                href={`mailto:${PROFILE.email}`}
                label="Email"
                sub={PROFILE.email}
                icon={Mail}
              />
              <Divider />
              <ContactLink
                href={PROFILE.linkedin}
                label="LinkedIn"
                sub="tara-adilah-fathin"
                icon={Linkedin}
              />
              <Divider />
              <ContactLink
                href={PROFILE.github}
                label="GitHub"
                sub="tarafathin"
                icon={Github}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  sub,
  icon: Icon,
}: {
  href: string;
  label: string;
  sub: string;
  icon: any;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className="text-xs font-bold tracking-widest uppercase"
        style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
      >
        {label}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-[#E8A020] hover:scale-110 hover:text-amber-400 transition-all p-1"
        aria-label={label}
      >
        <Icon size={24} />
      </a>
      <span
        className="text-xs"
        style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
      >
        {sub}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="hidden sm:block h-8 w-px"
      style={{ background: "rgba(240,234,214,0.15)" }}
    />
  );
}
