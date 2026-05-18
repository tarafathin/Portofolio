"use client";

import { useState } from "react";
import { EXPERIENCE } from "@/lib/data";
import Image from "next/image";

export default function ExperienceSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imgSrc?: string) => {
    if (imgSrc) setModalImage(imgSrc);
  };

  const closeModal = () => setModalImage(null);

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Experience & Organizations" />

        <div className="mt-12 grid md:grid-cols-2 gap-16">
          {/* Heading */}
          <div>
            <h2
              className="font-display font-black leading-tight"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                color: "var(--cream)",
              }}
            >
              Building{" "}
              <span style={{ color: "var(--accent)" }}>experience</span>
              <br />
              beyond the classroom.
            </h2>
            <p
              className="text-sm leading-relaxed mt-4 max-w-sm"
              style={{ color: "var(--cream-muted)", fontFamily: "Inter, sans-serif" }}
            >
              Setiap pengalaman — baik di organisasi maupun project nyata —
              membentuk cara saya berpikir, bekerja, dan berkolaborasi.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ background: "var(--border)" }}
            />

            <div className="flex flex-col gap-8">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="flex gap-6 relative group">
                  {/* Dot */}
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                    style={{
                      background: "var(--bg-surface)",
                      borderColor: "var(--accent)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontSize: "12px" }}>
                      {exp.type === "work" ? "✦" : "◈"}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    onClick={() => openModal(exp.image)}
                    className={`flex-1 flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 rounded-2xl border card-lift transition-all duration-300 ${exp.image ? 'cursor-pointer hover:-translate-y-1.5' : ''}`}
                    style={{
                      background: "var(--bg-surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <span
                          className="text-xs font-bold tracking-widest uppercase group-hover:text-[#E8A020] transition-colors"
                          style={{
                            color: "var(--accent)",
                            fontFamily: "Syne, sans-serif",
                          }}
                        >
                          {exp.org}
                        </span>
                        <span
                          className="text-xs ml-4 flex-shrink-0"
                          style={{
                            color: "var(--cream-muted)",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <h3
                        className="font-display font-bold text-base mb-2"
                        style={{ color: "var(--cream)", fontFamily: "Syne, sans-serif" }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "var(--cream-muted)",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {exp.desc}
                      </p>
                    </div>

                    {/* Arrow Icon on the far right if image exists */}
                    {exp.image && (
                      <div className="w-8 h-8 shrink-0 rounded-full border flex items-center justify-center transition-colors mt-2 sm:mt-1 self-start sm:self-auto group-hover:bg-[#E8A020] group-hover:border-[#E8A020]" style={{ borderColor: 'var(--border)', background: 'var(--bg-surface)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-white transition-colors">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(10, 18, 10, 0.8)", backdropFilter: "blur(4px)" }}
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl p-2 sm:p-4 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg font-bold text-xl hover:bg-gray-100 transition-colors z-10"
            >
              ×
            </button>
            
            {/* Image Container */}
            <div className="relative w-full aspect-[1.414/1] rounded-lg overflow-hidden bg-gray-50 border flex items-center justify-center">
              <p className="absolute text-gray-400 text-sm z-0">Sertifikat belum diunggah</p>
              <Image 
                src={modalImage} 
                alt="Certificate View"
                fill
                className="object-contain z-10"
                sizes="(max-w-screen-xl) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}

      {/* Add keyframes for modal animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}} />
    </section>
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
