import { GameSelectionGrid } from '@/components/organisms/game-selection-grid';
import { NeoText } from '@/components/atoms/neo-text';

export default function GameGridsDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Game Grids (Organism)</NeoText>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Game Selection Grid</NeoText>
        <NeoText variant="body" className="text-muted-foreground mb-4 block">
          Komponen ini menggabungkan beberapa Card interaktif dengan struktur Grid untuk bagian utama aplikasi edukasi.
        </NeoText>
        
        <div className="p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
           <GameSelectionGrid />
        </div>
      </section>
    </div>
  );
}
