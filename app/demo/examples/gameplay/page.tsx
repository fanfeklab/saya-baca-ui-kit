"use client";

import { useState } from 'react';
import { NeoText } from '@/components/atoms/neo-text';
import { Button } from '@/components/ui/button';
import { Volume2, HelpCircle, CheckCircle2, RotateCcw, XCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GameplayUIExample() {
  const [answer, setAnswer] = useState<string[]>(['A', 'P', '', 'L']);
  const [activeSlot, setActiveSlot] = useState(2);
  const [status, setStatus] = useState<'playing' | 'success' | 'fail'>('playing');

  const options = ['E', 'I', 'U', 'O', 'K', 'L', 'B', 'M'];

  const handlePick = (char: string) => {
    if (status !== 'playing') return;
    const newAnswer = [...answer];
    newAnswer[2] = char;
    setAnswer(newAnswer);
    if (char === 'E') {
      setStatus('success');
    } else {
      setStatus('fail');
    }
  };

  const reset = () => {
    setAnswer(['A', 'P', '', 'L']);
    setStatus('playing');
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col p-6 lg:p-10 space-y-10">
      {/* Game Header */}
      <div className="flex items-center justify-between">
        <Button variant="outline" className="h-14 px-6 rounded-2xl border-4 shadow-neo bg-white font-black text-lg">
          KEMBALI
        </Button>
        
        <div className="flex-1 flex justify-center">
          <div className="bg-white px-8 py-3 rounded-full border-4 border-border shadow-neo flex items-center gap-4">
             <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className={`size-4 rounded-full border-2 border-border ${s <= 3 ? 'bg-warning' : 'bg-muted'}`} />
                ))}
             </div>
             <span className="font-black text-sm uppercase tracking-widest">Level 2-4</span>
          </div>
        </div>

        <div className="flex gap-4">
           <Button variant="warning" size="icon" className="size-14 rounded-2xl border-4 shadow-neo">
              <HelpCircle className="size-7" />
           </Button>
        </div>
      </div>

      {/* Game Stage */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full gap-12">
        <div className="text-center space-y-6">
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="relative"
           >
              <div className="size-48 sm:size-64 bg-white rounded-[50px] border-8 border-border shadow-neo flex items-center justify-center text-9xl">
                 🍎
              </div>
              <Button size="icon" className="absolute -bottom-4 -right-4 size-16 rounded-full border-4 shadow-neo bg-accent">
                 <Volume2 className="size-10" />
              </Button>
           </motion.div>
           <NeoText variant="h2" className="text-4xl sm:text-5xl uppercase tracking-[0.2em]">{`A - P - _ - L`}</NeoText>
        </div>

        {/* Word Input Area */}
        <div className="flex gap-4">
          {answer.map((char, i) => (
            <motion.div
              key={i}
              whileHover={i === 2 ? { y: -5 } : {}}
              className={`size-16 sm:size-24 rounded-3xl border-4 flex items-center justify-center text-4xl sm:text-5xl font-black transition-all duration-300 ${
                i === 2 && char === '' ? 'bg-card border-dashed border-muted-foreground animate-pulse' : 
                i === 2 && status === 'success' ? 'bg-success text-white border-success shadow-neo' :
                i === 2 && status === 'fail' ? 'bg-destructive text-white border-destructive shadow-neo' :
                'bg-white border-border shadow-neo-sm'
              }`}
            >
              {char}
            </motion.div>
          ))}
        </div>

        {/* Options Area */}
        <div className="bg-white/50 p-8 rounded-[40px] border-4 border-white border-dashed w-full">
           <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {options.map((opt, i) => (
                <Button 
                  key={i}
                  disabled={status !== 'playing'}
                  variant="outline"
                  className="h-16 sm:h-20 text-3xl font-black rounded-2xl border-4 shadow-neo hover:shadow-neo-lg bg-white"
                  onClick={() => handlePick(opt)}
                >
                  {opt}
                </Button>
              ))}
           </div>
        </div>
      </div>

      {/* Overlay Modals */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-success/20 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white p-10 rounded-[50px] border-8 border-border shadow-neo-lg text-center max-w-sm w-full space-y-8"
            >
              <div className="bg-success size-32 rounded-full border-8 border-border shadow-neo mx-auto flex items-center justify-center text-white">
                <CheckCircle2 className="size-20" strokeWidth={3} />
              </div>
              <div>
                <NeoText variant="title">LUAR BIASA!</NeoText>
                <p className="font-bold text-xl text-muted-foreground italic">Kamu berhasil mengeja kata &apos;APEL&apos;</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button className="h-16 rounded-2xl border-4 shadow-neo text-xl font-black gap-3 w-full">
                  LANJUTKAN <ArrowRight className="size-6" />
                </Button>
                <Button variant="outline" className="h-14 font-bold rounded-2xl" onClick={reset}>
                  Ulangi
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {status === 'fail' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-destructive/20 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white p-10 rounded-[50px] border-8 border-border shadow-neo-lg text-center max-w-sm w-full space-y-8"
            >
              <div className="bg-destructive size-32 rounded-full border-8 border-border shadow-neo mx-auto flex items-center justify-center text-white">
                <XCircle className="size-20" strokeWidth={3} />
              </div>
              <div>
                <NeoText variant="title" className="text-destructive">UPS!</NeoText>
                <p className="font-bold text-xl text-muted-foreground italic">Coba lagi cari huruf yang pas ya.</p>
              </div>
              <Button size="lg" variant="accent" className="h-16 rounded-2xl border-4 shadow-neo text-xl font-black gap-3 w-full" onClick={reset}>
                <RotateCcw className="size-6" /> COBA LAGI
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
