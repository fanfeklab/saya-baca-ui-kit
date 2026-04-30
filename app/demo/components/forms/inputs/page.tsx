import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { NeoText } from '@/components/atoms/neo-text';

export default function InputsDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Text Inputs</NeoText>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Standard Inputs</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm max-w-md">
          <div className="space-y-2">
            <Label htmlFor="default">Default Input</Label>
            <Input id="default" placeholder="Masukkan nama..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled Input</Label>
            <Input id="disabled" disabled placeholder="Tidak bisa diakses" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="error" className="text-destructive">Error Input</Label>
            <Input id="error" placeholder="Email salah" className="border-destructive focus-visible:ring-destructive" />
            <p className="text-sm font-medium text-destructive">Email tidak valid.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Textarea</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm max-w-xl">
          <div className="space-y-2">
            <Label htmlFor="message">Pesan Anda</Label>
            <Textarea id="message" placeholder="Tuliskan pesan..." rows={4} />
          </div>
        </div>
      </section>
    </div>
  );
}
