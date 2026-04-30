'use client';

import { MissionCard, StoryCard, StatCard } from '@/components/molecules/content-cards';
import { NeoText } from '@/components/atoms/neo-text';
import { Users, Star, Trophy } from 'lucide-react';

export default function ContentCardsDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Content Cards</NeoText>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Mission Card</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm max-w-sm">
          <MissionCard 
            title="Selesaikan 3 Tantangan!"
            description="Dapatkan bintang emas di akhir misi."
            progress={2}
            total={3}
            onAction={() => alert('Misi dilanjutkan!')}
          />
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Story Card</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm max-w-md">
          <StoryCard 
            title="Singa yang Pemberani"
            description="Belajar tentang keberanian hari ini bersama kawan-kawan rimba."
            emoji="🦁"
            onRead={() => alert('Membaca cerita...')}
            onListen={() => alert('Mendengarkan cerita...')}
          />
          <StoryCard 
            title="Kancil dan Buaya"
            description="Dongeng klasik nusantara."
            emoji="🐊"
            onRead={() => alert('Membaca cerita...')}
            // no onListen to test fallback
          />
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Stat Card (Admin/Parent)</NeoText>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <StatCard 
            title="Total XP"
            value="12,500"
            icon={Star}
            trend={{ value: 12, label: "dari minggu lalu", positive: true }}
          />
          <StatCard 
            title="Tingkat Kelulusan"
            value="89%"
            icon={Users}
            trend={{ value: 4, label: "dari minggu lalu", positive: false }}
          />
          <StatCard 
            title="Bintang Terkumpul"
            value="432"
            icon={Trophy}
          />
        </div>
      </section>
    </div>
  );
}
