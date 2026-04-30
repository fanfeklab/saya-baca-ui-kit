'use client';

import Link from 'next/link';
import { NeoText } from '@/components/atoms/neo-text';
import { MissionCard, StoryCard } from '@/components/molecules/content-cards';
import { GameSelectionGrid } from '@/components/organisms/game-selection-grid';

export default function HomeAppPage() {
  return (
    <div className="flex flex-col p-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-28">
      {/* Hero / Daily Mission */}
      <section className="mt-4">
        <NeoText variant="subtitle" className="mb-4 inline-block">Misi Hari Ini 🚀</NeoText>
        <MissionCard 
          title="Selesaikan 3 Tantangan!"
          progress={1}
          total={3}
        />
      </section>

      {/* Categories / Games */}
      <section>
        <NeoText variant="subtitle" className="mb-4 inline-block">Pilih Permainan 🎲</NeoText>
        <GameSelectionGrid />
      </section>

      {/* Cerita Hari Ini */}
      <section>
         <NeoText variant="subtitle" className="mb-4 inline-block">Cerita Baru 📖</NeoText>
         <StoryCard 
            title="Singa yang Pemberani"
            description="Belajar tentang keberanian hari ini."
            emoji="🦁"
            onListen={() => {}}
         />
      </section>
    </div>
  );
}
