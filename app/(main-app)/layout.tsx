import { BottomNav } from '@/components/molecules/bottom-nav';
import { TopAppBar } from '@/components/molecules/top-app-bar';

export default function MainAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative pb-24 overflow-x-hidden">
      {/* Top Header */}
      <TopAppBar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-lg mx-auto">
        {children}
      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
