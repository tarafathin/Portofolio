"use client";

import { useState } from "react";
import { EDUCATION, ACHIEVEMENTS } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EducationSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imgSrc?: string) => {
    if (imgSrc) setModalImage(imgSrc);
  };

  const closeModal = () => setModalImage(null);

  return (
    <section
      id="education"
      className="section-padding"
      style={{ background: "#F8F2E4", color: "var(--text-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Education & Achievements Original Layout */}
        <SectionLabel label="EDUCATION & ACHIEVEMENTS" />

        <div className="grid md:grid-cols-2 gap-10 mt-12 items-start mb-24">
          
          {/* Left — education */}
          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="p-6 rounded-2xl border bg-white"
                style={{
                  borderColor: "rgba(10,18,10,0.08)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
                  >
                    Education
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "#8A9A8A", fontFamily: "Inter, sans-serif" }}
                  >
                    {edu.period}
                  </span>
                </div>
                <h3
                  className="font-display font-bold text-lg mb-1"
                  style={{ fontFamily: "Syne, sans-serif", color: "#0A120A" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: "#3A4A3A", fontFamily: "Inter, sans-serif" }}
                >
                  {edu.school}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "var(--accent)",
                      color: "#0A120A",
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    GPA {edu.gpa}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.courses.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: "rgba(10,18,10,0.15)",
                        color: "#4A5A4A",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — achievements */}
          <div className="flex flex-col gap-4">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                onClick={() => openModal(a.image)}
                className="group flex items-start justify-between gap-4 p-5 rounded-2xl border bg-white cursor-pointer hover:border-[#E8A020] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                style={{
                  borderColor: "rgba(10,18,10,0.08)",
                }}
              >
                <div className="flex gap-4">
                  <span
                    className="mt-0.5 text-lg group-hover:scale-110 transition-transform"
                    style={{ color: "var(--accent)" }}
                  >
                    ★
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p
                        className="text-sm font-bold group-hover:text-[#E8A020] transition-colors"
                        style={{ color: "#0A120A", fontFamily: "Syne, sans-serif" }}
                      >
                        {a.title}
                      </p>
                    </div>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#6A7A6A", fontFamily: "Inter, sans-serif" }}
                    >
                      {a.desc} · {a.year}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon on the far right */}
                <div className="w-8 h-8 shrink-0 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-[#E8A020] group-hover:border-[#E8A020] transition-colors mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-white transition-colors">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            ))}
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
              {/* Fallback text if image doesn't load/exist yet */}
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