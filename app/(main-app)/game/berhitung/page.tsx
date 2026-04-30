"use client";

import React from "react";
import { NeoText } from "@/components/atoms/neo-text";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, X, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { IllustrationHolder } from "@/components/atoms/illustration-holder";
import { ConfettiBurst } from "@/components/atoms/confetti-burst";

const LEVELS = [
  { question: "1 + 1 = ?", answer: 2, options: [1, 2, 3, 4] },
  { question: "2 + 3 = ?", answer: 5, options: [3, 4, 5, 6] },
  { question: "4 - 2 = ?", answer: 2, options: [1, 2, 3, 4] },
];

export default function BerhitungGamePage() {
  const router = useRouter();
  const [levelIndex, setLevelIndex] = React.useState(0);
  const [isWon, setIsWon] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);

  const currentLevel = LEVELS[levelIndex];

  const handleAnswer = (option: number) => {
    setSelectedAnswer(option);
    setTimeout(() => {
      if (option === currentLevel.answer) {
        if (levelIndex < LEVELS.length - 1) {
          setLevelIndex(prev => prev + 1);
          setSelectedAnswer(null);
        } else {
          setIsWon(true);
        }
      } else {
        setSelectedAnswer(null);
      }
    }, 1000);
  };

  const handleReset = () => {
    setLevelIndex(0);
    setIsWon(false);
    setSelectedAnswer(null);
  };

  if (isWon) {
    return (
      <div className="flex flex-col p-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-28 min-h-[70vh] items-center justify-center text-center">
        <ConfettiBurst>
          <IllustrationHolder variant="success" size="xl" emoji="🎉" className="mx-auto mb-6" />
        </ConfettiBurst>
        <NeoText variant="title" className="text-3xl text-success">Hebat!</NeoText>
        <NeoText variant="body" className="mb-6">Kamu jago sekali berhitung!</NeoText>
        
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
          <NeoText variant="title">Mari Berhitung</NeoText>
        </div>
        <div className="font-bold text-sm bg-success/20 text-success font-mono px-3 py-1 rounded-full border-2 border-success">
          {levelIndex + 1} / {LEVELS.length}
        </div>
      </div>

      {/* Main Game Area */}
      <Card className="mt-4 bg-background border-4 text-center overflow-hidden">
        <CardContent className="p-8 pb-12 flex flex-col items-center gap-8">
          
          <NeoText variant="title" className="text-6xl md:text-8xl tracking-widest text-primary font-mono mb-4">
            {currentLevel.question}
          </NeoText>
          
        </CardContent>
      </Card>

      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-4 mt-2">
        {currentLevel.options.map((option, idx) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentLevel.answer;
          let variant: "default" | "outline" | "success" | "destructive" = "outline";
          
          if (isSelected) {
            variant = isCorrect ? "success" : "destructive";
          }
          
          return (
            <Button
              key={idx}
              variant={variant}
              className={`h-24 text-4xl font-bold font-mono border-4 shadow-[4px_4px_0_0_#000000] ${
                isSelected && isCorrect ? "bg-success hover:bg-success text-success-foreground" : 
                isSelected && !isCorrect ? "bg-destructive hover:bg-destructive text-destructive-foreground" : ""
              }`}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
              {isSelected && isCorrect && <Check className="ml-2 w-8 h-8" />}
              {isSelected && !isCorrect && <X className="ml-2 w-8 h-8" />}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
