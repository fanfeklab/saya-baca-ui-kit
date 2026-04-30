import { DemoSidebar } from '@/components/organisms/demo-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Search } from 'lucide-react';
import { ThemeToggle } from '@/components/atoms/theme-toggle';
import { Input } from '@/components/ui/input';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#fafafa]">
      {/* Decorative Neo-Brutal Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r-4 border-black bg-white z-10 shrink-0 h-full relative">
        <DemoSidebar />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative z-10 bg-transparent">
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-4 border-b-4 border-black bg-white shadow-sm z-20">
           <div className="flex items-center gap-4 flex-1">
             <div className="md:hidden">
               <Sheet>
                  <SheetTrigger 
                    render={
                      <Button variant="outline" size="icon" className="shrink-0 border-2">
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
             <div className="font-heading font-black text-xl tracking-tight hidden sm:block md:hidden">UI Kit Docs</div>
             
             {/* Search */}
             <div className="hidden sm:flex relative w-full max-w-sm ml-auto md:ml-0">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
               <Input placeholder="Search components..." className="pl-9 bg-muted border-2 shadow-none focus-visible:shadow-neo transition-all" />
             </div>
           </div>

           <div className="flex items-center gap-2 ml-4">
             <ThemeToggle />
           </div>
        </header>

        <ScrollArea className="flex-1 min-h-0 bg-[#fafafa]/50">
          <div className="container mx-auto max-w-5xl p-6 md:p-10 lg:p-12 relative z-10">
            {children}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
