# Project Blueprint & Task Checklist

## 1. Arsitektur & Infrastruktur
- [x] Next.js App Router Setup
- [x] Tailwind CSS + PostCSS Configuration
- [x] Basic shadcn/ui integration
- [x] Layout grouping (`(marketing)`, `(main-app)`, `(dashboard)`)
- [x] Global Layout Root (`app/layout.tsx`)
- [x] DX Tools: Implement Floating Route Navigator & Dev Panel
- [ ] Context/State Visualizer untuk Dev Tools

## 2. System Design (Atomic Design)

### Atoms (Dasar)
- [x] NeoText (Typography system)
- [x] IconButton
- [x] ThemeToggle
- [x] AudioButton
- [x] ConfettiBurst
- [x] Avatar/Illustration Holder
- [x] Base Icons (Lucide)
- [ ] Base Colors & CSS Variables Mapping
- [ ] Decorative Shapes (Stars, Bubbles, dll)

### Molecules (Gabungan)
- [x] Content Card (Hero Mission, etc)
- [x] Floating Bottom Navigation (Main App) - Extract to molecule
- [x] Sidebar Menu Item (Admin)
- [x] Top App Bar Profile (Main App)
- [x] Form Input Field (Input + Label)

### Organisms (Kompleks)
- [x] Main App Layout Header (Top & Bottom bars)
- [x] Admin Sidebar Panel
- [ ] Game/Module Selection Grid
- [ ] Parent Report Chart Panel
- [ ] Analytics Summary (Admin)

### Templates (Pola Halaman)
- [x] Marketing Layout
- [x] Main App Layout (Edu-App Style)
- [x] Admin Dashboard Layout (ERP Style)

## 3. Pages (Example Pages)

### Marketing
- [x] `/` (Landing Page)

### Main App (Edu-App)
- [x] `/login` (Welcome & Switch Account)
- [x] `/home` (Dashboard Anak / Misi Harian)
- [x] `/game/membaca` (Contoh Modul Belajar)
- [x] `/game/berhitung` (Contoh Modul Belajar)
- [x] `/game/menyanyi` (Contoh Modul Belajar)
- [x] `/game/menggambar` (Contoh Modul Mewarnai)
- [x] `/parent` (Dashboard Orang Tua, Laporan)
- [x] `/prestasi` (Galeri Piala/Badge)
- [x] `/profil` (Ganti Avatar, Pengaturan Dasar)

### Dashboard (Admin ERP)
- [x] `/dashboard` (Analytics Overview)
- [x] `/dashboard/users` (User Management)
- [x] `/dashboard/content` (Content/Curriculum Management)

## 4. State & Interactions
- [x] Pindah halaman animasi (Framer Motion page transitions) / CSS Transitions
- [x] Global Store / Context untuk Mock Data (Misi hari ini, level, badge)
- [x] Sound Effects (onClick/onTrigger)

## 5. UI/UX Final Polish
- [x] Mobile Responsiveness (Responsive padding, touch target 44px)
- [x] Neo-brutalism design style consistency (shadow, border)
- [x] Color Palette Harmonization
- [x] Dark Mode Support Verification
