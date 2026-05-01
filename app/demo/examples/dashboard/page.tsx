"use client";

import { NeoText } from '@/components/atoms/neo-text';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Star, BookOpen, Gamepad2, Settings, Users, Gift, Map as MapIcon, Home } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function KidDashboardPage() {
  const categories = [
    { id: 'read', label: 'Belajar Huruf', icon: <BookOpen className="size-12" />, color: 'bg-rose-400', count: '12/24' },
    { id: 'math', label: 'Eja Kata', icon: <Gamepad2 className="size-12" />, color: 'bg-sky-400', count: '8/20' },
    { id: 'play', label: 'Main Game', icon: <Trophy className="size-12" />, color: 'bg-amber-400', count: '3 Games' },
    { id: 'friends', label: 'Teman', icon: <Users className="size-12" />, color: 'bg-lime-400', count: '2 Online' },
  ];

  return (
    <div className="min-h-screen bg-[#fcf5e5] p-6 lg:p-10 space-y-8 pb-32">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-5">
           <div className="relative group cursor-pointer">
              <Avatar className="size-20 sm:size-24 border-4 border-border shadow-neo bg-white">
                <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Budi&backgroundColor=c0aede" />
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-success text-white size-10 rounded-full border-4 border-border shadow-neo-sm flex items-center justify-center font-black text-xl">
                 !
              </div>
           </div>
           <div>
             <NeoText variant="h2" className="mb-0 text-3xl sm:text-4xl">Halo, Budi!</NeoText>
             <div className="flex items-center gap-2 mt-1">
                <div className="bg-warning px-3 py-1 rounded-full border-2 border-border shadow-neo-sm flex items-center gap-2 font-black text-sm">
                   <Star className="size-4 fill-current" />
                   145 Bintang
                </div>
                <div className="bg-primary px-3 py-1 rounded-full border-2 border-border shadow-neo-sm flex items-center gap-2 font-black text-sm text-white">
                   Lvl 4
                </div>
             </div>
           </div>
        </div>

        <div className="flex gap-4">
           <Button variant="outline" size="icon" className="size-14 rounded-2xl border-4 shadow-neo hover:shadow-neo-lg">
              <Gift className="size-7" />
           </Button>
           <Button variant="outline" size="icon" className="size-14 rounded-2xl border-4 shadow-neo hover:shadow-neo-lg">
              <Settings className="size-7" />
           </Button>
        </div>
      </div>

      {/* Main Content Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Progress Card */}
        <Card className="lg:col-span-1 bg-card border-4 border-border shadow-neo rounded-[40px] overflow-hidden">
          <div className="bg-primary p-6 border-b-4 border-border">
            <NeoText variant="h3" className="text-white mb-0 flex items-center gap-3">
              <Trophy className="size-7" /> Progress Minggu Ini
            </NeoText>
          </div>
          <CardContent className="p-8 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between font-black uppercase text-sm">
                <span>Bab 2: Vokal</span>
                <span>80%</span>
              </div>
              <Progress value={80} className="h-6 border-4 border-border shadow-neo-sm bg-muted" indicatorClassName="bg-success" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-muted p-4 rounded-3xl border-4 border-border text-center">
                  <p className="text-3xl font-black">45</p>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Menit Belajar</p>
               </div>
               <div className="bg-muted p-4 rounded-3xl border-4 border-border text-center">
                  <p className="text-3xl font-black">12</p>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Kata Baru</p>
               </div>
            </div>

            <Button className="w-full h-16 text-lg rounded-2xl border-4 shadow-neo">
              Lanjutkan Belajar
            </Button>
          </CardContent>
        </Card>

        {/* Right Column: Game Categories */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              className={`relative flex flex-col p-8 rounded-[40px] border-4 border-border shadow-neo-sm hover:shadow-neo hover:-translate-y-2 transition-all text-left overflow-hidden ${cat.color} group`}
            >
              <div className="bg-white/20 p-4 rounded-3xl border-4 border-white/30 mb-6 w-fit transition-transform group-hover:scale-110 group-hover:rotate-6">
                {cat.icon}
              </div>
              <NeoText variant="h3" className="text-white mb-1 font-black tracking-wide">{cat.label}</NeoText>
              <p className="text-white/80 font-black text-sm uppercase tracking-wider">{cat.count}</p>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 size-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20" />
            </button>
          ))}
          
          <button className="col-span-2 bg-white flex items-center justify-between p-8 rounded-[40px] border-4 border-border shadow-neo-sm hover:shadow-neo hover:-translate-y-2 transition-all">
             <div className="flex items-center gap-6">
                <div className="bg-secondary p-4 rounded-3xl border-4 border-border shadow-neo-sm">
                   <MapIcon className="size-10 text-secondary-foreground" />
                </div>
                <div>
                   <NeoText variant="h3" className="mb-0">Peta Petualangan</NeoText>
                   <p className="font-bold text-muted-foreground">Lihat semua pulau belajar</p>
                </div>
             </div>
             <div className="bg-muted size-14 rounded-2xl border-4 border-border flex items-center justify-center font-black text-2xl shadow-neo-sm">
                {">"}
             </div>
          </button>
        </div>
      </div>

      {/* Floating Bottom Navigation for Kids */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-50">
         <div className="bg-card px-8 py-4 rounded-full border-4 border-border shadow-neo flex items-center justify-between">
            <button className="flex flex-col items-center gap-1 group">
               <div className="bg-primary p-3 rounded-2xl border-2 border-border shadow-neo-sm group-hover:-translate-y-1 transition-all">
                  <Home className="size-6 text-white" />
               </div>
               <span className="text-[10px] font-black uppercase text-primary">Beranda</span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
               <div className="bg-muted p-3 rounded-2xl border-2 border-border group-hover:bg-accent group-hover:-translate-y-1 transition-all">
                  <MapIcon className="size-6" />
               </div>
               <span className="text-[10px] font-black uppercase text-muted-foreground">Misi</span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
               <div className="bg-muted p-3 rounded-2xl border-2 border-border group-hover:bg-accent group-hover:-translate-y-1 transition-all">
                  <Trophy className="size-6" />
               </div>
               <span className="text-[10px] font-black uppercase text-muted-foreground">Piala</span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
               <div className="bg-muted p-3 rounded-2xl border-2 border-border group-hover:bg-accent group-hover:-translate-y-1 transition-all">
                  <Settings className="size-6" />
               </div>
               <span className="text-[10px] font-black uppercase text-muted-foreground">Opsi</span>
            </button>
         </div>
      </div>
    </div>
  );
}
