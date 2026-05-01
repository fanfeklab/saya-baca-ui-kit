"use client";

import { useState } from 'react';
import { NeoText } from '@/components/atoms/neo-text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthSocial } from '@/components/organisms/auth-social';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-card border-4 border-border shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] rounded-[40px] overflow-hidden">
        <div className="bg-primary p-8 text-primary-foreground flex flex-col items-center text-center border-b-4 border-border">
          <div className="size-20 bg-card rounded-3xl border-4 border-border shadow-neo-sm flex items-center justify-center mb-6 transform -rotate-6">
            <BookOpen className="size-10 text-primary" strokeWidth={3} />
          </div>
          <NeoText variant="h2" className="text-white font-black tracking-wide text-3xl sm:text-4xl mb-2">SAYA BACA</NeoText>
          <p className="font-bold opacity-90 text-sm sm:text-base bg-black/20 px-4 py-2 rounded-xl">Belajar membaca jadi petualangan seru!</p>
        </div>

        <div className="p-8 space-y-8">
          <AuthSocial />

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest px-2 text-muted-foreground">Atau Masuk dengan Email</label>
              <Input 
                type="email" 
                placeholder="anak_pandai@email.com" 
                className="h-14 bg-background font-bold rounded-2xl border-4 border-border shadow-neo-sm focus-visible:ring-0 focus-visible:shadow-neo transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <Button className="w-full h-16 text-xl font-black rounded-2xl border-4 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all" disabled={!email}>
              Masuk Sekarang
            </Button>
          </div>

          <p className="text-center font-bold text-sm text-muted-foreground pt-2">
            Belum punya akun? <Link href="#" className="flex-inline items-center justify-center font-black text-primary hover:underline underline-offset-4 ml-1 px-3 py-1 bg-primary/10 rounded-lg">Daftar Gratis</Link>
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex gap-8 font-bold text-sm text-muted-foreground">
        <Link href="#" className="hover:text-foreground hover:underline underline-offset-4">Kebijakan Privasi</Link>
        <Link href="#" className="hover:text-foreground hover:underline underline-offset-4">Syarat & Ketentuan</Link>
      </div>
    </div>
  );
}
