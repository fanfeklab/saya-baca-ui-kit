import { DemoSidebar } from '@/components/organisms/demo-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r-2 border-border bg-card z-10 shrink-0 h-full">
        <DemoSidebar />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        <div className="md:hidden flex items-center p-4 border-b-2 border-border bg-card">
           <Sheet>
              <SheetTrigger 
                render={
                  <Button variant="outline" size="icon" className="shrink-0 mr-4">
                     <Menu className="w-5 h-5" />
                     <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                } 
              />
              <SheetContent side="left" className="p-0 w-72">
                 <SheetTitle className="sr-only">Navigasi Dokumentasi</SheetTitle>
                 <DemoSidebar />
              </SheetContent>
           </Sheet>
           <div className="font-bold">UI Kit Docs</div>
        </div>

        <ScrollArea className="flex-1 min-h-0">
          <div className="container mx-auto p-4 md:p-8 relative">
            {children}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
