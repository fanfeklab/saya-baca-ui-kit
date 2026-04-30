import Link from 'next/link';
import { ThemeToggle } from '@/components/atoms/theme-toggle';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <nav className="w-full p-6 flex justify-between items-center z-20 relative">
        <div className="font-bold text-xl tracking-tight bg-background/80 px-3 py-1 rounded-lg border-2 border-border shadow-[2px_2px_0_0_#000000] backdrop-blur-sm">
          <span>Saya Baca - UI Kit</span>
        </div>
        <ThemeToggle />
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-6 z-10 w-full max-w-5xl mx-auto space-y-12">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Aplikasi Belajar <br/> <span className="text-primary">Saya Baca</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground bg-background/90 p-4 rounded-xl border-2 border-border shadow-[4px_4px_0_0_#000000] max-w-2xl mx-auto backdrop-blur-sm">
            Aplikasi PWA edukasi anak usia TK dengan fitur gamifikasi, cerita interaktif, sosial, dan sistem monitoring untuk orang tua.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/demo/components" className="w-full sm:w-auto px-6 py-4 border-2 border-border shadow-[4px_4px_0_0_#000000] bg-primary text-primary-foreground font-bold rounded-xl hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200">
              Lihat Komponen UI
            </Link>
            <Link href="/login" className="w-full sm:w-auto px-6 py-4 border-2 border-border shadow-[4px_4px_0_0_#000000] bg-accent text-accent-foreground font-bold rounded-xl hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200">
              Coba Aplikasi Anak
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto px-6 py-4 border-2 border-border shadow-[4px_4px_0_0_#000000] bg-secondary text-secondary-foreground font-bold rounded-xl hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200">
              Dashboard Admin
            </Link>
          </div>
        </div>

        <div className="p-8 border-4 border-dashed border-border rounded-xl bg-background/80 backdrop-blur-sm max-w-lg w-full text-center">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">🚧 Under Construction</h2>
          <p className="text-muted-foreground font-medium">Proyek saat ini sedang dalam pengembangan Fase 1 (Scaffold & Tema Global)</p>
        </div>
      </main>
      
      <footer className="w-full p-6 text-center text-sm font-bold opacity-80 z-10">
        &copy; 2026 Fanfek Tech Lab
      </footer>
    </div>
  );
}
