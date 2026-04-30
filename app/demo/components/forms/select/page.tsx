import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { NeoText } from '@/components/atoms/neo-text';

export default function SelectDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Select & Dropdowns</NeoText>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Basic Select</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm max-w-md">
          <div className="space-y-2">
            <Label>Pilih Avatar</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilihan avatar..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adventurer">Adventurer</SelectItem>
                <SelectItem value="fun-emoji">Fun Emoji</SelectItem>
                <SelectItem value="pixel-art">Pixel Art</SelectItem>
                <SelectItem value="lorelei">Lorelei</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </div>
  );
}
