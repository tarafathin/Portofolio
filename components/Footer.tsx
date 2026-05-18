"use client";

import { PROFILE } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--bg-primary)",
        borderColor: "rgba(232,160,32,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm"
          style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
        >
          © {year}{" "}
          <span style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}>
            {PROFILE.name}
          </span>{" "}
          — Designed & Built with ♡
        </p>
        <div className="flex items-center gap-6">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs transition-colors"
            style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--cream-muted)")
            }
          >
            GitHub ↗
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs transition-colors"
            style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--cream-muted)")
            }
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-xs transition-colors"
            style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--cream-muted)")
            }
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
