import { Badge } from '@/components/ui/badge';
import { NeoText } from '@/components/atoms/neo-text';

export default function BadgesDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Badges</NeoText>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Variants</NeoText>
        <div className="flex flex-wrap gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <Badge variant="default">Level 1</Badge>
          <Badge variant="secondary">Baru</Badge>
          <Badge variant="accent">Premium</Badge>
          <Badge variant="success">Selesai</Badge>
          <Badge variant="destructive">Gagal</Badge>
          <Badge variant="outline">Guest</Badge>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Usage Examples</NeoText>
        <div className="flex flex-wrap gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 p-2 border-2 rounded-xl bg-card">
            <span>Matematika Dasar</span>
            <Badge variant="success">Selesai</Badge>
          </div>
          <div className="flex items-center gap-2 p-2 border-2 rounded-xl bg-card">
            <span>Membaca</span>
            <Badge variant="accent">3/5</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
