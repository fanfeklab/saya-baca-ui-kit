import { DemoSidebar } from '@/components/organisms/demo-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r-2 border-border bg-card z-10 shrink-0">
        <DemoSidebar />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        <ScrollArea className="flex-1">
          <div className="container mx-auto p-4 md:p-8 relative">
            {children}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
