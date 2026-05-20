"use client";

import { useEffect, useRef } from "react";
import { PROFILE } from "@/lib/data";
import Image from "next/image";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-32 lg:py-24"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-8">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start" style={{ animation: "fadeUp 0.7s ease 0.2s both" }}>

          {/* Main Title */}
          <h1 className="font-black leading-tight text-gray-900 mb-2 font-display tracking-tight text-[clamp(2.25rem,4vw,3rem)]" style={{ fontFamily: "Syne, sans-serif" }}>
            Hello, I&apos;m{' '}
            {/* Desktop (lg and up): single line */}
            <span className="hidden lg:inline-block whitespace-nowrap" style={{ color: "#E8A020", position: "relative" }}>
              {PROFILE.name}
              <span className="absolute bottom-1.5 left-0 w-full h-[4px] bg-[#E8A020] opacity-50"></span>
            </span>
            {/* Mobile/Tablet (below lg): split lines */}
            <span className="block lg:hidden mt-1 sm:mt-0" style={{ color: "#E8A020" }}>
              <span className="relative block sm:inline-block w-fit whitespace-nowrap">
                {PROFILE.name.split(" ").slice(0, -1).join(" ")}
                <span className="absolute bottom-1.5 left-0 w-full h-[4px] bg-[#E8A020] opacity-50"></span>
              </span>
              <span className="hidden sm:inline">&nbsp;</span>
              <span className="relative block sm:inline-block w-fit whitespace-nowrap">
                {PROFILE.name.split(" ").slice(-1)[0]}
                <span className="absolute bottom-1.5 left-0 w-full h-[4px] bg-[#E8A020] opacity-50"></span>
              </span>
            </span>
          </h1>

          {/* Sub Title */}
          <h2 className="font-bold text-gray-800 mb-4 font-display tracking-tight text-[clamp(1.5rem,3vw,2.25rem)]" style={{ fontFamily: "Syne, sans-serif" }}>
            Product Designer Based in {PROFILE.location.split(",")[0]}.
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-lg mb-6 leading-relaxed font-sans text-[clamp(0.875rem,1.5vw,1rem)]">
            Creative UI/UX Designer with a strong interest in crafting clean, engaging, and easy-to-use digital interfaces that enhance user experience across web and mobile platforms.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center justify-between gap-3 bg-[#2D5A3D] text-white rounded-full pl-6 pr-2 py-2 hover:bg-[#1f402b] transition-colors shadow-lg"
            >
              <span className="font-medium text-sm md:text-base">View My Work</span>
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D5A3D] group-hover:scale-105 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Tara_Adilah_Fathin.pdf"
              className="flex items-center justify-center border-2 border-gray-300 text-gray-700 bg-white rounded-full px-8 py-3 font-medium hover:border-gray-800 hover:text-gray-900 transition-colors text-sm md:text-base h-[56px]"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Content - Photo & Elements */}
        <div className="w-full lg:w-1/2 relative flex justify-center mb-8 lg:mb-0" style={{ animation: "fadeIn 1s ease 0.5s both" }}>

          {/* Circular Photo Frame */}
          <div className="relative z-10 w-[30vh] h-[30vh] sm:w-[35vh] sm:h-[35vh] lg:w-[45vh] lg:h-[45vh] rounded-full overflow-hidden border-[6px] md:border-[8px] border-[#E8A020] shadow-2xl bg-gray-100">
            <Image
              src="/hero-image.jpeg"
              alt={PROFILE.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Floating Badges */}
          <div className="absolute top-10 right-4 lg:-right-4 z-20 animate-bounce-slow scale-75 md:scale-90 lg:scale-100 origin-center">
            <div className="relative w-24 h-24 md:w-28 md:h-28 bg-[#2D5A3D] rounded-full flex items-center justify-center shadow-lg border-[3px] border-white">
              <svg className="w-full h-full p-1 md:p-2 absolute inset-0 text-[#E8A020] origin-center animate-spin-slow" viewBox="0 0 100 100">
                <path id="curve" fill="transparent" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[12px] md:text-[13px] font-bold tracking-[3px] md:tracking-[4px] uppercase fill-current">
                  <textPath href="#curve">HIRE ME • HIRE ME •</textPath>
                </text>
              </svg>
              <div className="w-8 h-8 flex items-center justify-center text-[#E8A020]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute bottom-24 -left-2 lg:-left-12 z-20 animate-bounce-slow scale-90 lg:scale-100 origin-bottom-left" style={{ animationDelay: "1s" }}>
            <div className="bg-[#2D5A3D] text-white px-4 py-2.5 rounded-full shadow-lg font-medium text-xs md:text-sm flex items-center gap-2">
              <span className="w-0 h-0 border-t-[5px] border-t-transparent border-r-[6px] border-r-white border-b-[5px] border-b-transparent absolute -top-1.5 left-5 -rotate-45"></span>
              Product Designer
            </div>
          </div>

          <div className="absolute bottom-10 right-2 lg:right-4 z-20 animate-bounce-slow scale-90 lg:scale-100 origin-bottom-right" style={{ animationDelay: "2s" }}>
            <div className="bg-[#E8A020] text-gray-900 px-5 py-2.5 rounded-full shadow-lg font-bold text-xs md:text-sm relative">
              <span className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#E8A020] border-b-[6px] border-b-transparent absolute -top-2 left-5 -rotate-[60deg]"></span>
              UI/UX Designer
            </div>
          </div>

        </div>

      </div>

      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes blob {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(-50%, -50%) rotate(0deg); }
          100% { border-radius: 60% 40% 30% 70% / 60% 50% 40% 50%; transform: translate(-50%, -50%) rotate(5deg); }
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 4s infinite ease-in-out alternate;
        }
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12px); }
        }
      `}} />
    </section>
  );
}
