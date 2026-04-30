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
    <header className="sticky top-0 w-full z-40 px-4 py-4 backdrop-blur-md bg-background/80 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12 border-2 border-border shadow-[2px_2px_0_0_#000000]">
          <AvatarImage src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed}`} alt="Avatar Anak" />
          <AvatarFallback>KID</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-bold text-lg leading-tight">Halo, {userName}!</span>
          <Badge variant="accent" className="w-fit text-xs px-2 py-0 h-5 mt-0.5 shadow-none border-border">
            Level {level}
          </Badge>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-300 dark:bg-yellow-500 rounded-full border-2 border-border shadow-[2px_2px_0_0_#000000]">
          <Star className="w-5 h-5 fill-current text-white stroke-black stroke-2" />
          <span className="font-bold text-black">{stars.toLocaleString('id-ID')}</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
