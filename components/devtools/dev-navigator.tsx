"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wrench, Navigation, Palette, Database, LayoutDashboard, Smartphone, Megaphone, TerminalSquare } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useAppStore } from "@/lib/store";

const ROUTES = [
  { group: "Marketing", items: [
    { name: "Landing Page", path: "/", icon: Megaphone }
  ]},
  { group: "Auth Pages", items: [
    { name: "Login Gateway", path: "/login", icon: Smartphone },
  ]},
  { group: "Main App (Anak & Ortu)", items: [
    { name: "Home (Anak)", path: "/home", icon: Smartphone },
    { name: "Parent Dashboard", path: "/parent", icon: Smartphone },
    { name: "Game Belajar (Mock)", path: "/game/membaca", icon: Smartphone },
  ]},
  { group: "Admin ERP", items: [
    { name: "Analytics Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Users Management", path: "/dashboard/users", icon: LayoutDashboard },
  ]},
  { group: "Dev & Design", items: [
    { name: "UI Components", path: "/demo/components", icon: Palette },
  ]}
];

export function DevNavigator() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Sematkan shortcut (misal: Ctrl+K / Cmd+K) untuk dev tools di state lanjutan nanti.

  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_SHOW_DEVTOOLS !== "true") {
    return null; // Sembunyikan di production unless explicitly allowed
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger 
        className="fixed bottom-4 right-4 z-[9999] rounded-full h-14 w-14 shadow-[4px_4px_0_0_#000000] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000000] transition-all bg-indigo-500 hover:bg-indigo-600 text-white border-2 border-black flex items-center justify-center outline-none focus-visible:ring-4 focus-visible:ring-ring"
      >
        <Wrench className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] z-[10000] flex flex-col p-0 border-l-4 border-black">
        <SheetHeader className="p-6 border-b-2 border-border bg-muted/50 shrink-0">
          <SheetTitle className="flex items-center gap-2">
            <TerminalSquare className="w-5 h-5" />
            Developer Tools
          </SheetTitle>
          <p className="text-sm text-muted-foreground text-left">
            Navigasi cepat dan kontrol state untuk mempercepat UI/UX design.
          </p>
        </SheetHeader>
        
        <ScrollArea className="flex-1 min-h-0">
          <div className="p-6 space-y-6">
            
            {/* Quick Navigation */}
            <div>
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <Navigation className="w-4 h-4" /> Route Navigator
              </h3>
              <div className="space-y-4">
                {ROUTES.map((group) => (
                  <div key={group.group}>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      {group.group}
                    </div>
                    <div className="flex flex-col gap-1">
                      {group.items.map((route) => {
                        const Icon = route.icon;
                        const isActive = pathname === route.path;
                        return (
                          <Link 
                            key={route.path} 
                            href={route.path}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between p-2 rounded-md border-2 transition-all ${
                              isActive 
                                ? "bg-primary/20 border-primary shadow-[2px_2px_0_0_var(--color-primary)] font-bold text-primary" 
                                : "bg-card border-transparent hover:border-border hover:shadow-[2px_2px_0_0_#000000]"
                            }`}
                          >
                            <div className="flex items-center gap-2 text-sm">
                              <Icon className="w-4 h-4" />
                              {route.name}
                            </div>
                            {isActive && <Badge variant="default" className="text-[10px] h-4 px-1 py-0 shadow-none">Active</Badge>}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
