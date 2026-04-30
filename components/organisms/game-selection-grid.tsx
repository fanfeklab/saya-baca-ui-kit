import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { NeoText } from "@/components/atoms/neo-text";
import { BookOpen, Shapes, Music, Paintbrush } from "lucide-react";
import { cn } from "@/lib/utils";

const GAMES = [
  {
    id: "membaca",
    title: "Membaca",
    href: "/game/membaca",
    icon: BookOpen,
    variant: "accent",
    styles: "bg-accent/10 border-accent shadow-[4px_4px_0_0_var(--color-accent)] hover:shadow-[6px_6px_0_0_var(--color-accent)] text-accent-foreground",
    iconWrapper: "bg-accent",
  },
  {
    id: "berhitung",
    title: "Berhitung",
    href: "/game/berhitung",
    icon: Shapes,
    variant: "success",
    styles: "bg-success/10 border-success shadow-[4px_4px_0_0_var(--color-success)] hover:shadow-[6px_6px_0_0_var(--color-success)] text-success-foreground",
    iconWrapper: "bg-success",
  },
  {
    id: "menyanyi",
    title: "Menyanyi",
    href: "/game/menyanyi",
    icon: Music,
    variant: "secondary",
    styles: "bg-secondary/10 border-secondary shadow-[4px_4px_0_0_var(--color-secondary)] hover:shadow-[6px_6px_0_0_var(--color-secondary)] text-secondary-foreground",
    iconWrapper: "bg-secondary",
  },
  {
    id: "mewarnai",
    title: "Mewarnai",
    href: "/game/mewarnai",
    icon: Paintbrush,
    variant: "primary",
    styles: "bg-primary/10 border-primary shadow-[4px_4px_0_0_var(--color-primary)] hover:shadow-[6px_6px_0_0_var(--color-primary)] text-primary-foreground",
    iconWrapper: "bg-primary",
  },
];

export function GameSelectionGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {GAMES.map((game) => {
        const Icon = game.icon;
        return (
          <Link 
            key={game.id} 
            href={game.href} 
            className="block outline-none focus-visible:ring-4 ring-ring rounded-xl rounded-b-[10px]"
          >
            <Card className={cn(
               "h-full transition-all cursor-pointer hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none",
               game.styles
            )}>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center text-center gap-3">
                <div className={cn("p-4 rounded-full border-2 border-border shadow-[2px_2px_0_0_#000000]", game.iconWrapper)}>
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <NeoText variant="body" className="font-bold">{game.title}</NeoText>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
