import Link from 'next/link';
import { NeoText } from '@/components/atoms/neo-text';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Shapes, Music, Paintbrush } from 'lucide-react';
import { ConfettiBurst } from '@/components/atoms/confetti-burst';
import { AudioButton } from '@/components/atoms/audio-button';

export default function HomeAppPage() {
  return (
    <div className="flex flex-col p-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-28">
      {/* Hero / Daily Mission */}
      <section className="mt-4">
        <NeoText variant="subtitle" className="mb-4 inline-block">Misi Hari Ini 🚀</NeoText>
        <Card className="bg-primary/10 border-primary shadow-[4px_4px_0_0_var(--color-primary)]">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Selesaikan 3 Tantangan!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span>Progress</span>
                <span>1/3 Selesai</span>
              </div>
              <Progress value={33} className="h-4" />
            </div>
            <ConfettiBurst>
              <Button variant="default" className="w-full text-lg h-14">Lanjutkan Belajar</Button>
            </ConfettiBurst>
          </CardContent>
        </Card>
      </section>

      {/* Categories / Games */}
      <section>
        <NeoText variant="subtitle" className="mb-4 inline-block">Pilih Permainan 🎲</NeoText>
        <div className="grid grid-cols-2 gap-4">
          
          <Link href="/home" className="block outline-none focus-visible:ring-4 ring-ring rounded-xl rounded-b-[10px]">
            <Card className="h-full bg-accent/10 border-accent shadow-[4px_4px_0_0_var(--color-accent)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_0_var(--color-accent)] transition-all cursor-pointer active:translate-y-0 active:translate-x-0 active:shadow-none">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                <div className="p-4 bg-accent rounded-full border-2 border-border shadow-[2px_2px_0_0_#000000]">
                  <BookOpen className="w-8 h-8 text-accent-foreground" />
                </div>
                <NeoText variant="body" className="font-bold">Membaca</NeoText>
              </CardContent>
            </Card>
          </Link>

          <Link href="/home" className="block outline-none focus-visible:ring-4 ring-ring rounded-xl rounded-b-[10px]">
            <Card className="h-full bg-success/10 border-success shadow-[4px_4px_0_0_var(--color-success)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_0_var(--color-success)] transition-all cursor-pointer active:translate-y-0 active:translate-x-0 active:shadow-none">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                <div className="p-4 bg-success rounded-full border-2 border-border shadow-[2px_2px_0_0_#000000]">
                  <Shapes className="w-8 h-8 text-success-foreground" />
                </div>
                <NeoText variant="body" className="font-bold">Berhitung</NeoText>
              </CardContent>
            </Card>
          </Link>

          <Link href="/home" className="block outline-none focus-visible:ring-4 ring-ring rounded-xl rounded-b-[10px]">
            <Card className="h-full bg-secondary/10 border-secondary shadow-[4px_4px_0_0_var(--color-secondary)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_0_var(--color-secondary)] transition-all cursor-pointer active:translate-y-0 active:translate-x-0 active:shadow-none">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                <div className="p-4 bg-secondary rounded-full border-2 border-border shadow-[2px_2px_0_0_#000000]">
                  <Music className="w-8 h-8 text-secondary-foreground" />
                </div>
                <NeoText variant="body" className="font-bold">Menyanyi</NeoText>
              </CardContent>
            </Card>
          </Link>

          <Link href="/home" className="block outline-none focus-visible:ring-4 ring-ring rounded-xl rounded-b-[10px]">
            <Card className="h-full bg-primary/10 border-primary shadow-[4px_4px_0_0_var(--color-primary)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_0_var(--color-primary)] transition-all cursor-pointer active:translate-y-0 active:translate-x-0 active:shadow-none">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                <div className="p-4 bg-primary rounded-full border-2 border-border shadow-[2px_2px_0_0_#000000]">
                  <Paintbrush className="w-8 h-8 text-primary-foreground" />
                </div>
                <NeoText variant="body" className="font-bold">Mewarnai</NeoText>
              </CardContent>
            </Card>
          </Link>

        </div>
      </section>

      {/* Cerita Hari Ini */}
      <section>
         <NeoText variant="subtitle" className="mb-4 inline-block">Cerita Baru 📖</NeoText>
         <Card className="bg-background flex flex-row items-center cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000000] transition-all">
            <div className="w-32 h-32 bg-secondary rounded-l-[10px] border-r-2 border-border flex items-center justify-center shrink-0">
               {/* Illustration Placeholder */}
               <div className="text-4xl text-center">🦁</div>
            </div>
            <CardContent className="p-4 flex-1">
              <NeoText variant="body" className="font-bold block mb-1 leading-tight">Singa yang Pemberani</NeoText>
              <p className="text-xs text-muted-foreground mb-2">Belajar tentang keberanian hari ini.</p>
              <AudioButton variant="secondary" size="sm" className="w-fit text-xs h-8 px-3">Dengar Cerita</AudioButton>
            </CardContent>
         </Card>
      </section>
    </div>
  );
}
