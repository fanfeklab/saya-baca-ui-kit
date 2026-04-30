"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Gamepad2, Award } from "lucide-react";
import { IconButton } from "@/components/atoms/icon-button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Beranda", path: "/home", icon: Home },
  { name: "Game", path: "/game/membaca", icon: Gamepad2 },
  { name: "Prestasi", path: "/prestasi", icon: Award },
  { name: "Orang Tua", path: "/parent", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-around w-full max-w-md bg-white dark:bg-card border-2 border-border rounded-2xl shadow-[4px_4px_0_0_#000000] p-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path || pathname?.startsWith(item.path + '/');
          
          return (
            <Link key={item.path} href={item.path} passHref>
              <IconButton 
                variant="ghost" 
                className={cn(
                  "flex flex-col h-14 w-16 gap-1 !shadow-none hover:bg-transparent transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className={cn("w-6 h-6 stroke-2", isActive && "fill-primary/20")} />
                <span className="text-[10px] font-bold">{item.name}</span>
              </IconButton>
            </Link>
          )
        })}
      </nav>
    </div>
  );
}
