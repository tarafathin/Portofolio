import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tara Adilah Fathin — UI/UX Designer & Frontend Developer",
  description:
    "Portfolio Tara Adilah Fathin — UI/UX Designer, Frontend Developer, dan mahasiswa D3 Teknik Informatika PENS Surabaya.",
  keywords: ["UI/UX Designer", "Frontend Developer", "Figma", "Next.js", "Portfolio"],
  authors: [{ name: "Tara Adilah Fathin" }],
  openGraph: {
    title: "Tara Adilah Fathin — UI/UX Designer",
    description: "Crafting digital experiences that feel human.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
