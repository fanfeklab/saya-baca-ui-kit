import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import { Home, Gamepad2, Award, User, Star } from 'lucide-react';
import { IconButton } from '@/components/atoms/icon-button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/atoms/theme-toggle';

export default function MainAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative pb-24 overflow-x-hidden">
      {/* Top Header */}
      <header className="sticky top-0 w-full z-40 px-4 py-4 backdrop-blur-md bg-background/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border-2 border-border shadow-[2px_2px_0_0_#000000]">
            <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" alt="Avatar Anak" />
            <AvatarFallback>KID</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight">Halo, Budi!</span>
            <Badge variant="accent" className="w-fit text-xs px-2 py-0 h-5 mt-0.5 shadow-none border-border">
              Level 3
            </Badge>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-300 dark:bg-yellow-500 rounded-full border-2 border-border shadow-[2px_2px_0_0_#000000]">
            <Star className="w-5 h-5 fill-current text-white stroke-black stroke-2" />
            <span className="font-bold text-black">1.250</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-lg mx-auto">
        {children}
      </main>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center justify-around w-full max-w-md bg-white dark:bg-card border-2 border-border rounded-2xl shadow-[4px_4px_0_0_#000000] p-2">
          
          <Link href="/home" passHref>
            <IconButton variant="ghost" className="flex flex-col h-14 w-16 gap-1 !shadow-none hover:bg-transparent">
              <Home className="w-6 h-6 stroke-2" />
              <span className="text-[10px] font-bold">Beranda</span>
            </IconButton>
          </Link>
          
          <Link href="/parent" passHref>
            <IconButton variant="ghost" className="flex flex-col h-14 w-16 gap-1 !shadow-none hover:bg-transparent">
              <User className="w-6 h-6 stroke-2 text-primary" />
              <span className="text-[10px] font-bold text-primary">Orang Tua</span>
            </IconButton>
          </Link>
          
        </nav>
      </div>
    </div>
  );
}
