"use client";

import React from "react";
import { NeoText } from "@/components/atoms/neo-text";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { IllustrationHolder } from "@/components/atoms/illustration-holder";
import { AudioButton } from "@/components/atoms/audio-button";
import { ConfettiBurst } from "@/components/atoms/confetti-burst";

const LEVELS = [
  { word: "B - U - K - U", image: "📚", audio: "Buku!" },
  { word: "A - P - E - L", image: "🍎", audio: "Apel!" },
  { word: "M - E - J - A", image: "🪑", audio: "Meja!" },
];

export default function MembacaGamePage() {
  const router = useRouter();
  const [levelIndex, setLevelIndex] = React.useState(0);
  const [isWon, setIsWon] = React.useState(false);

  const currentLevel = LEVELS[levelIndex];

  const handleNext = () => {
    if (levelIndex < LEVELS.length - 1) {
      setLevelIndex(prev => prev + 1);
    } else {
      setIsWon(true);
    }
  };

  const handleReset = () => {
    setLevelIndex(0);
    setIsWon(false);
  };

  if (isWon) {
    return (
      <div className="flex flex-col p-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-28 min-h-[70vh] items-center justify-center text-center">
        <ConfettiBurst>
          <IllustrationHolder variant="success" size="xl" emoji="🏆" className="mx-auto mb-6" />
        </ConfettiBurst>
        <NeoText variant="title" className="text-3xl text-success">Hore! Selesai!</NeoText>
        <NeoText variant="body" className="mb-6">Kamu pintar sekali membaca hari ini.</NeoText>
        
        <div className="flex gap-4 w-full">
          <Button variant="outline" className="flex-1" onClick={handleReset}>
            <RotateCcw className="w-5 h-5 mr-2" />
            Main Lagi
          </Button>
          <Button variant="default" className="flex-1" onClick={() => router.push("/home")}>
            Selesai
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-28">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => router.back()}
          className="rounded-full shadow-[2px_2px_0_0_#000000]"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <NeoText variant="title">Mari Membaca</NeoText>
        </div>
        <div className="font-bold text-sm bg-accent/20 text-accent font-mono px-3 py-1 rounded-full border-2 border-accent">
          {levelIndex + 1} / {LEVELS.length}
        </div>
      </div>

      {/* Main Game Area */}
      <Card className="mt-8 bg-background border-4 text-center overflow-hidden">
        <CardContent className="p-8 pb-12 flex flex-col items-center gap-8">
          
          <IllustrationHolder variant="primary" size="xl" emoji={currentLevel.image} className="w-40 h-40 text-8xl shadow-[4px_4px_0_0_#000000]" />
          
          <div className="space-y-4 w-full">
            <NeoText variant="title" className="text-4xl md:text-5xl tracking-widest text-primary">
              {currentLevel.word}
            </NeoText>
            
            <AudioButton variant="secondary" className="w-full max-w-[200px] mx-auto mt-4 h-14 text-lg">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Dengarkan
            </AudioButton>
          </div>

        </CardContent>
      </Card>

      {/* Controls */}
      <div className="fixed bottom-24 left-0 right-0 px-4 max-w-lg mx-auto z-40">
         <Button 
            variant="default" 
            className="w-full text-xl h-16 rounded-2xl border-4" 
            onClick={handleNext}
          >
            Selanjutnya
          </Button>
      </div>

    </div>
  );
}
