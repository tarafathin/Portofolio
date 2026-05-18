// ============================================================
// 📁 lib/data.ts
// Sumber data tunggal untuk seluruh konten portfolio.
// Ubah file ini saja kalau ingin update data CV atau konten.
// ============================================================

export const PROFILE = {
  name: "Tara Adilah Fathin",
  role: "UI/UX Designer & Frontend Developer",
  tagline: "Crafting digital experiences that feel human.",
  bio: "Saya adalah mahasiswa D3 Teknik Informatika di PENS yang passionate di dunia UI/UX Design dan Frontend Development. Saya percaya bahwa desain yang baik bukan hanya soal tampilan — tapi tentang bagaimana pengguna merasakannya.",
  bioLong:
    "Dengan IPK 3.41 dan pengalaman nyata dalam mengembangkan aplikasi yang sudah live di Google Play Store, saya memadukan pola pikir analitis seorang engineer dengan sensitivitas estetik seorang designer. Setiap project adalah kesempatan untuk memecahkan masalah nyata dengan solusi yang elegan.",
  location: "Surabaya, Jawa Timur",
  email: "taraadilahfathin@gmail.com",
  phone: "+62 823 3583 7805",
  linkedin: "https://linkedin.com/in/tara-adilah-fathin-698241401",
  github: "https://github.com/tarafathin",
  instagram: "https://www.instagram.com/taradilahf_?igsh=MWhrbjI1dHF6ZHY1Yw==",
  availableForWork: true,
};

export const SKILLS = [
  {
    category: "UI Design",
    icon: "✦",
    items: ["Figma", "Prototyping", "Wireframing", "Design System", "Canva"],
  },
  {
    category: "UX Design",
    icon: "◈",
    items: [
      "User Research",
      "UX Thinking",
      "Information Architecture",
      "Scrum / Agile",
      "User Flow",
    ],
  },
  {
    category: "Frontend Dev",
    icon: "⬡",
    items: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Flutter"],
  },
  {
    category: "Backend & Tools",
    icon: "◆",
    items: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST API",
      "GitHub",
      "VS Code",
      "Laragon",
    ],
  },
];

export const SOFT_SKILLS = [
  "Analytical Thinking",
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
];

export const PROJECTS = [
  {
    id: "nutrify",
    title: "Nutrify",
    subtitle: "Mobile Calorie Tracking App",
    period: "Feb 2026 – Present",
    badge: "Live on Play Store 🚀",
    color: "#E8A020",
    image: "/projects/nutrify.jpeg",
    problem:
      "Pengguna kesulitan memantau asupan kalori harian secara akurat dan konsisten. Aplikasi yang ada terlalu kompleks atau tidak relevan dengan makanan lokal Indonesia.",
    solution:
      "Aplikasi mobile tracking kalori dengan UI yang intuitif, database makanan lokal, dan sistem autentikasi yang aman — sehingga pengguna bisa fokus pada kesehatannya.",
    uxThinking:
      "Dimulai dari riset pengguna untuk memahami pain point, dilanjutkan dengan wire-framing di Figma, prototyping interaktif, hingga user testing sebelum handoff ke tim developer.",
    tools: ["Flutter", "Dart", "Laravel 12", "PostgreSQL", "Figma", "JWT", "Supabase"],
    highlight: "Published on Google Play Store",
    role: "UI/UX Designer + Scrum Master",
  },
  {
    id: "pulmocare",
    title: "PulmoCare",
    subtitle: "TB Treatment Companion",
    period: "April 2026 - Present",
    badge: "Mobile Health Application",
    color: "#1B4D3E",
    image: "/projects/pulmocare.png",
    problem:
      "Pasien TB sulit memantau jadwal minum obat dan progress pengobatan secara konsisten.",
    solution:
      "Aplikasi mobile berbasis Flutter dengan backend Supabase. Fitur utama: Reminder Obat (Rifampicin, Isoniazid, dll), Tracking Progress (Hari ke-122/128), dan Screening Mandiri untuk deteksi risiko TB.",
    uxThinking:
      "Fokus pada kepatuhan pengobatan dengan desain yang bersih, progres visual yang memotivasi, dan hasil screening yang jelas (Risiko Rendah vs Tinggi).",
    tools: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    highlight: "Health Tech App",
    role: "Mobile Developer & UI/UX Designer",
  },
  {
    id: "food-order",
    title: "Food Order System",
    subtitle: "Restaurant Management CRUD",
    period: "May 2025 – Jun 2025",
    badge: "Web App",
    color: "#5B4FCF",
    problem:
      "Restoran kecil membutuhkan sistem pemesanan digital yang aman, mudah digunakan, dan bisa dikelola tanpa keahlian teknis tinggi.",
    solution:
      "Sistem CRUD lengkap untuk pengelolaan menu, pemesanan, dan transaksi restoran — dilengkapi auth sistem dan proteksi SQL injection.",
    uxThinking:
      "Desain alur user yang simpel: login → pilih menu → konfirmasi order → lihat transaksi. Setiap langkah jelas dan tidak membingungkan.",
    tools: ["PHP", "MySQL", "PDO", "JavaScript", "HTML5", "CSS3"],
    highlight: "Secure with PDO prepared statements",
    role: "Full Stack Developer",
  },
  {
    id: "goduls",
    title: "GODuls",
    subtitle: "Platform Pemesanan Tiket Digital & Manajemen Transaksi",
    period: "Feb 2026 - Present",
    badge: "Web Application",
    color: "#D9534F", // A nice red/accent color, can be changed if needed
    problem:
      "Pengguna kesulitan mencari dan memesan tiket secara cepat karena sistem yang lambat dan tidak terintegrasi.",
    solution:
      "Aplikasi web modern berbasis Laravel dengan performa tinggi. Menyediakan fitur pencarian tiket yang efisien, sistem booking terstruktur, dan manajemen transaksi yang aman.",
    uxThinking:
      "Fokus pada kelancaran transaksi dengan alur pemesanan yang minim langkah, feedback sistem yang jelas, dan dashboard yang intuitif.",
    tools: ["Laravel", "PHP", "MySQL", "Vite.js", "Composer"],
    highlight: "Fast transaction & booking system",
    role: "UI/UX Designer",
  },
];

export const EXPERIENCE = [
  {
    type: "work",
    title: "UI/UX Designer & Scrum Master",
    org: "Project PDBL – PENS",
    period: "Feb 2026 – Present",
    desc: "Mendesain antarmuka aplikasi di Figma dan memimpin pembagian tugas tim menggunakan metode Scrum agar project berjalan sesuai timeline.",
  },
  {
    type: "work",
    title: "Liaison Officer (LO)",
    org: "PKKMB PENS",
    period: "Aug 2025 – Sep 2025",
    desc: "Mendampingi peserta PKKMB dan berkoordinasi antar divisi panitia untuk memastikan kelancaran seluruh rangkaian acara.",
    image: "/certificates/pkkmb.jpg",
  },
  {
    type: "org",
    title: "Anggota OSIS",
    org: "MAS Amanatul Ummah Surabaya",
    period: "2022 – 2023",
    desc: "Berpartisipasi aktif dalam koordinasi kegiatan sekolah, melatih kemampuan kerja sama tim dan komunikasi organisasi.",
  },
];

export const EDUCATION = [
  {
    degree: "D3 Teknik Informatika",
    school: "Politeknik Elektronika Negeri Surabaya (PENS)",
    period: "Aug 2024 – May 2027",
    gpa: "3.41 / 4.00",
    courses: ["UI/UX Design", "Quality Assurance", "Pemrograman Web", "Basis Data"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Medali Perak – Festival Taekwondo",
    year: "2024",
    desc: "Kompetisi taekwondo regional — membuktikan disiplin, konsistensi, dan mental kompetitif.",
    image: "/certificates/taekwondo.jpg",
  },
  {
    title: "Peserta LKMM Pra-TD & LKMM TD",
    year: "2025",
    desc: "Pelatihan kepemimpinan manajemen mahasiswa tingkat PENS.",
    image: "/certificates/lkmm.jpg",
  },
];
