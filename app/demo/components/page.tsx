import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NeoText } from '@/components/atoms/neo-text';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { ConfettiBurst } from '@/components/atoms/confetti-burst';
import { AudioButton } from '@/components/atoms/audio-button';
import { StarRating } from '@/components/atoms/star-rating';
import { IconButton } from '@/components/atoms/icon-button';
import { Home, Settings, Play, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/atoms/theme-toggle';

export default function DemoComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col p-6 relative">
      <nav className="w-full flex justify-between items-center z-20 mb-12">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 border-2 border-border shadow-[2px_2px_0_0_#000000] rounded-xl hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0_0_#000000] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-200 bg-background">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <NeoText variant="subtitle" className="bg-background/80 px-4 py-2 rounded-xl border-2 border-border shadow-[2px_2px_0_0_#000000]">
            UI Components
          </NeoText>
        </div>
        <ThemeToggle />
      </nav>

      <main className="flex-1 w-full max-w-5xl mx-auto space-y-12 pb-24">
        {/* Buttons Section */}
        <section className="space-y-6">
          <NeoText variant="subtitle">Atoms - Buttons</NeoText>
          <div className="flex flex-wrap gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
            <Button variant="default">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="accent">Accent Button</Button>
            <Button variant="success">Success Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
            
            <IconButton variant="default"><Home className="w-6 h-6"/></IconButton>
            <IconButton variant="secondary"><Settings className="w-6 h-6"/></IconButton>
            
            <ConfettiBurst>
              <Button variant="accent">🎉 Confetti Burst</Button>
            </ConfettiBurst>
            
            <AudioButton variant="success" className="gap-2">
              <Play className="w-5 h-5 fill-current" />
              Pop Sound
            </AudioButton>
          </div>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <NeoText variant="subtitle">Atoms - Badges</NeoText>
          <div className="flex flex-wrap gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
            <Badge variant="default">Level 1</Badge>
            <Badge variant="secondary">Baru</Badge>
            <Badge variant="accent">Premium</Badge>
            <Badge variant="success">Selesai</Badge>
            <Badge variant="destructive">Gagal</Badge>
            <Badge variant="outline">Guest</Badge>
          </div>
        </section>

        {/* Ratings Section */}
        <section className="space-y-6">
          <NeoText variant="subtitle">Atoms - Star Rating</NeoText>
          <div className="flex flex-wrap gap-8 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
            <StarRating rating={1} />
            <StarRating rating={2} />
            <StarRating rating={3} />
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-6">
          <NeoText variant="subtitle">Typography (NeoText)</NeoText>
          <div className="flex flex-col gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
            <NeoText variant="title">Heading 1</NeoText>
            <NeoText variant="subtitle">Heading 2</NeoText>
            <NeoText variant="body">Body text. Ini adalah contoh penggunaan font standar untuk paragraf atau deskripsi panjang.</NeoText>
            <NeoText variant="title" stroke>Title with Stroke</NeoText>
          </div>
        </section>

        {/* Cards & Indicators */}
        <section className="space-y-6">
          <NeoText variant="subtitle">Molecules - Cards & Progress</NeoText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
            <Card>
              <CardHeader>
                <CardTitle>Misi Harian</CardTitle>
                <CardDescription>Selesaikan 3 tugas untuk mendapat bintang.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>Progress</span>
                    <span>66%</span>
                  </div>
                  <Progress value={66} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Nanti</Button>
                <Button variant="default">Lanjutkan</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading Data...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-24 w-full rounded-xl" />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
