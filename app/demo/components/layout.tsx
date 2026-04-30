import { DemoSidebar } from '@/components/organisms/demo-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Search } from 'lucide-react';
import { ThemeToggle } from '@/components/atoms/theme-toggle';
import { Input } from '@/components/ui/input';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r-2 border-border bg-card z-10 shrink-0 h-full">
        <DemoSidebar />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-4 border-b-2 border-border bg-card">
           <div className="flex items-center gap-4 flex-1">
             <div className="md:hidden">
               <Sheet>
                  <SheetTrigger 
                    render={
                      <Button variant="outline" size="icon" className="shrink-0">
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
             </div>
             <div className="font-bold md:hidden">UI Kit Docs</div>
             
             {/* Search */}
             <div className="hidden sm:flex relative w-full max-w-sm ml-auto md:ml-0">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
               <Input placeholder="Cari komponen..." className="pl-9 bg-background" />
             </div>
           </div>

           <div className="flex items-center gap-2 ml-4">
             <ThemeToggle />
           </div>
        </header>

        <ScrollArea className="flex-1 min-h-0">
          <div className="container mx-auto p-4 md:p-8 relative">
            {children}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
