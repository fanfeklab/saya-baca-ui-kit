'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NeoText } from '@/components/atoms/neo-text';
import { AudioButton } from '@/components/atoms/audio-button';
import { IllustrationHolder } from '@/components/atoms/illustration-holder';
import { ConfettiBurst } from '@/components/atoms/confetti-burst';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface MissionCardProps {
  title: string;
  description?: string;
  progress: number;
  total: number;
  onAction?: () => void;
  className?: string;
}

export function MissionCard({ title, description, progress, total, onAction, className }: MissionCardProps) {
  const percentage = Math.round((progress / total) * 100);
  
  return (
    <Card className={cn("bg-primary/10 border-primary shadow-[4px_4px_0_0_var(--color-primary)]", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription className="text-foreground/80">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-bold">
            <span>Progress</span>
            <span>{progress}/{total} Selesai</span>
          </div>
          <Progress value={percentage} className="h-4 border-2 border-primary" />
        </div>
        <ConfettiBurst>
          <Button variant="default" className="w-full text-lg h-14" onClick={onAction}>Lanjutkan Belajar</Button>
        </ConfettiBurst>
      </CardContent>
    </Card>
  );
}

export interface StoryCardProps {
  title: string;
  description: string;
  emoji?: string;
  onRead?: () => void;
  onListen?: () => void;
  className?: string;
}

export function StoryCard({ title, description, emoji, onRead, onListen, className }: StoryCardProps) {
  return (
    <Card 
      onClick={onRead}
      className={cn("bg-background flex flex-row items-center cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000000] p-3 gap-4 transition-all w-full", className)}
    >
      <IllustrationHolder variant="secondary" size="lg" emoji={emoji || "📚"} />
      <div className="flex-1 min-w-0">
        <NeoText variant="body" className="font-bold block mb-1 leading-tight truncate">{title}</NeoText>
        <p className="text-xs text-muted-foreground mb-3 truncate">{description}</p>
        <div className="flex gap-2">
          {onListen && (
            <AudioButton 
              variant="secondary" 
              size="sm" 
              className="w-fit text-xs h-8 px-3"
              onClick={(e) => {
                e.stopPropagation();
                onListen();
              }}
            >
              Dengar Cerita
            </AudioButton>
          )}
        </div>
      </div>
    </Card>
  );
}

// Tambahan: StatCard
export interface StatCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
  trend?: { value: number; label: string; positive?: boolean };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn("p-4", className)}>
      <div className="flex items-center justify-between mb-4">
        <NeoText variant="body" className="text-sm font-bold text-muted-foreground">{title}</NeoText>
        {Icon && <Icon className="w-5 h-5 opacity-70" />}
      </div>
      <div className="flex flex-col gap-1">
        <NeoText variant="subtitle" className="text-3xl">{value}</NeoText>
        {trend && (
          <div className="flex items-center gap-2 mt-2">
            <Badge variant={trend.positive ? "success" : "destructive"} className="px-1 py-0 h-5 text-[10px]">
              {trend.positive ? '+' : ''}{trend.value}%
            </Badge>
            <span className="text-xs text-muted-foreground">{trend.label}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
