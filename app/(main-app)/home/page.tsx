import Link from 'next/link';
import { NeoText } from '@/components/atoms/neo-text';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Shapes, Music, Paintbrush } from 'lucide-react';
import { ConfettiBurst } from '@/components/atoms/confetti-burst';
import { AudioButton } from '@/components/atoms/audio-button';
import { IllustrationHolder } from '@/components/atoms/illustration-holder';
import { GameSelectionGrid } from '@/components/organisms/game-selection-grid';

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
        <GameSelectionGrid />
      </section>

      {/* Cerita Hari Ini */}
      <section>
         <NeoText variant="subtitle" className="mb-4 inline-block">Cerita Baru 📖</NeoText>
         <Card className="bg-background flex flex-row items-center cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000000] p-3 gap-4 transition-all">
            <IllustrationHolder variant="secondary" size="lg" emoji="🦁" />
            <div className="flex-1">
              <NeoText variant="body" className="font-bold block mb-1 leading-tight">Singa yang Pemberani</NeoText>
              <p className="text-xs text-muted-foreground mb-3">Belajar tentang keberanian hari ini.</p>
              <AudioButton variant="secondary" size="sm" className="w-fit text-xs h-8 px-3">Dengar Cerita</AudioButton>
            </div>
         </Card>
      </section>
    </div>
  );
}
