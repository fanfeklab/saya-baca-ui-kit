import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/atoms/theme-toggle";

interface TopAppBarProps {
  userName?: string;
  level?: number;
  stars?: number;
  avatarSeed?: string;
}

export function TopAppBar({ 
  userName = "Budi", 
  level = 3, 
  stars = 1250, 
  avatarSeed = "Felix" 
}: TopAppBarProps) {
  return (
    <header className="sticky top-0 w-full z-40 px-6 py-3 backdrop-blur-md bg-background/60 flex items-center justify-between border-b border-border/50">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 border-2 border-border shadow-neo-sm">
          <AvatarImage src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed}`} alt="Avatar Anak" />
          <AvatarFallback>KID</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-black text-sm leading-tight uppercase tracking-tight">Halo, {userName}!</span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Badge variant="accent" className="text-[10px] px-1.5 py-0 h-4 shadow-none border-border font-black uppercase">
              Lv {level}
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-400 rounded-lg border-2 border-border shadow-neo-sm">
          <Star className="w-4 h-4 fill-black text-black stroke-black stroke-[3px]" />
          <span className="font-black text-xs text-black">{stars.toLocaleString('id-ID')}</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
