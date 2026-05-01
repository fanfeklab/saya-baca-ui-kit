'use client';

import { BottomNav } from '@/components/molecules/bottom-nav';
import { TopAppBar } from '@/components/molecules/top-app-bar';
import { usePathname } from 'next/navigation';

export default function MainAppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGamePath = pathname?.includes('/game/');

  return (
    <div className="min-h-screen flex flex-col relative pb-24 overflow-x-hidden">
      {/* Top Header - Hide in game if preferred, but usually good to keep for quick status. 
          Let's hide it in game for total focus as requested. */}
      {!isGamePath && <TopAppBar />}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-lg mx-auto">
        {children}
      </main>

      {/* Floating Bottom Navigation - Hide in game */}
      {!isGamePath && <BottomNav />}
    </div>
  );
}
