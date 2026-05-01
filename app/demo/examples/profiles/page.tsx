"use client";

import { useState } from 'react';
import { NeoText } from '@/components/atoms/neo-text';
import { Button } from '@/components/ui/button';
import { Plus, Settings2, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProfilesPage() {
  const [profiles] = useState([
    { id: 1, name: 'Budi', age: '7 Thn', avatar: 'https://api.dicebear.com/9.x/bottts/svg?seed=Budi&backgroundColor=c0aede' },
    { id: 2, name: 'Siti', age: '5 Thn', avatar: 'https://api.dicebear.com/9.x/bottts/svg?seed=Siti&backgroundColor=ffd5dc' },
    { id: 3, name: 'Tono', age: '6 Thn', avatar: 'https://api.dicebear.com/9.x/bottts/svg?seed=Tono&backgroundColor=b6e3f4' },
  ]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <NeoText variant="title" className="text-4xl sm:text-6xl text-primary">Siapa yang Belajar?</NeoText>
        <p className="font-bold text-xl text-muted-foreground">Pilih profil untuk mulai berpetualang!</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
        {profiles.map((profile, idx) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <button className="flex flex-col items-center gap-5 transition-transform active:scale-95 outline-none rounded-3xl focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background">
              <div className="relative">
                <div className="size-32 sm:size-44 rounded-[40px] border-4 border-border bg-card shadow-neo group-hover:shadow-neo-lg group-hover:-translate-y-2 transition-all overflow-hidden flex items-center justify-center">
                   <img src={profile.avatar} alt={`Avatar ${profile.name}`} className="size-full object-cover" />
                </div>
                {/* Visual Flair: Badges */}
                <div className="absolute -top-4 -right-4 bg-warning text-warning-foreground size-12 sm:size-14 rounded-2xl border-4 border-border shadow-neo flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="font-black text-lg sm:text-xl">Lvl 4</span>
                </div>
              </div>
              <div className="text-center bg-card px-6 py-2 rounded-2xl border-4 border-border shadow-neo-sm group-hover:shadow-neo transition-all group-hover:-translate-y-1 w-full max-w-[160px]">
                <NeoText variant="h3" className="mb-0 group-hover:text-primary transition-colors text-xl sm:text-2xl">{profile.name}</NeoText>
                <span className="font-bold text-muted-foreground uppercase text-xs sm:text-sm tracking-widest">{profile.age}</span>
              </div>
            </button>
          </motion.div>
        ))}

        {/* Add Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="flex flex-col items-center gap-5 group active:scale-95 outline-none rounded-3xl focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background">
            <div className="size-32 sm:size-44 rounded-[40px] border-4 border-muted-foreground border-dashed bg-muted/50 shadow-neo-sm group-hover:shadow-neo group-hover:bg-card group-hover:-translate-y-2 group-hover:border-solid group-hover:border-primary transition-all flex items-center justify-center">
              <Plus className="size-16 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={3} />
            </div>
            <div className="text-center bg-muted/50 group-hover:bg-card px-6 py-2 rounded-2xl border-4 border-transparent group-hover:border-border shadow-none group-hover:shadow-neo transition-all group-hover:-translate-y-1 w-full max-w-[160px]">
              <NeoText variant="h3" className="mb-0 group-hover:text-primary transition-colors text-xl sm:text-2xl">Tambah</NeoText>
              <span className="font-bold text-muted-foreground uppercase text-xs sm:text-sm tracking-widest">Baru</span>
            </div>
          </button>
        </motion.div>
      </div>

      <div className="pt-12">
        <Button variant="outline" size="lg" className="h-[72px] px-8 rounded-[36px] bg-card text-foreground border-4 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 gap-4 transition-all">
          <Lock className="size-6 text-muted-foreground" />
          <span className="font-black text-xl uppercase tracking-wider">Area Orang Tua</span>
          <Settings2 className="size-6 text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
}
