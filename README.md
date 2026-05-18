# Portfolio Tara Adilah Fathin

Portfolio website UI/UX Designer & Frontend Developer — dibangun dengan Next.js 14 App Router + Tailwind CSS.

---

## 🎨 Color Palette

| Token | Hex | Kegunaan |
|---|---|---|
| `--bg-primary` | `#1A2B1A` | Background utama (dark forest green) |
| `--bg-surface` | `#243324` | Card & surface |
| `--accent` | `#E8A020` | Orange amber — highlight, CTA |
| `--accent-light` | `#F5C842` | Kuning — hover accent |
| `--cream` | `#F0EAD6` | Teks utama on dark bg |
| `--cream-muted` | `#B8AA90` | Teks sekunder |

---

## 📁 Struktur Folder

```
portfolio-tara/
├── app/
│   ├── globals.css      ← Design tokens & global styles
│   ├── layout.tsx       ← Root layout + metadata SEO
│   └── page.tsx         ← Root page (assembly semua sections)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── MarqueeSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       └── ContactSection.tsx
├── lib/
│   └── data.ts          ← ⬅ UPDATE CV DATA DI SINI
├── public/              ← Taruh foto & gambar di sini
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## ⚙️ Setup & Run (VS Code Workflow)

### 1. Buka terminal di VS Code (`Ctrl + `` ` ``)

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan development server
```bash
npm run dev
```

### 4. Buka di browser
```
http://localhost:3000
```

---

## ✏️ Update Data CV

Semua data konten ada di **satu file**: `lib/data.ts`

```typescript
// Ganti data diri
export const PROFILE = {
  name: "Tara Adilah Fathin",
  email: "taraadilahfathin@gmail.com",
  // ...
};

// Tambah/edit skills
export const SKILLS = [...];

// Tambah/edit projects (case study)
export const PROJECTS = [...];
```

---

## 🖼️ Menambahkan Foto / Screenshot

1. Taruh file gambar di folder `public/` (contoh: `public/tara-photo.jpg`)
2. Di komponen, gunakan Next.js `Image`:

```tsx
import Image from "next/image";

<Image
  src="/tara-photo.jpg"
  alt="Tara Adilah Fathin"
  width={400}
  height={500}
  className="rounded-2xl object-cover"
/>
```

3. Untuk screenshot project, taruh di `public/projects/nutrify.png` dll, lalu ganti bagian placeholder di `ProjectsSection.tsx`.

---

## 🚀 Deploy ke Vercel

### Step 1 — Push ke GitHub

```bash
# Inisialisasi git (kalau belum)
git init
git add .
git commit -m "initial: portfolio tara"

# Buat repo baru di github.com, lalu:
git remote add origin https://github.com/tarafathin/portfolio.git
git push -u origin main
```

### Step 2 — Connect ke Vercel

1. Buka [vercel.com](https://vercel.com) → Login dengan GitHub
2. Klik **"Add New Project"**
3. Pilih repo `portfolio` yang baru di-push
4. Vercel auto-detect Next.js → langsung klik **Deploy**
5. Tunggu ~1 menit → website live! 🎉

### Step 3 — Custom Domain (opsional)

Di Vercel Dashboard → Settings → Domains → tambahkan domain kamu.

---

## 🔄 Update setelah deploy

```bash
git add .
git commit -m "update: tambah project baru"
git push
```
Vercel otomatis re-deploy dalam ~30 detik.

---

## 🤖 Tips untuk Antigravity AI (VS Code)

- Data CV terpusat di `lib/data.ts` — minta AI untuk edit file ini saja
- Setiap section terisolasi di file sendiri — mudah di-refactor
- CSS custom pakai CSS variables — konsisten dan mudah di-theme

---

Dibuat dengan ♡ untuk portfolio profesional Tara Adilah Fathin.
"# Portofolio" 
