import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/atoms/icon-button';
import { ConfettiBurst } from '@/components/atoms/confetti-burst';
import { AudioButton } from '@/components/atoms/audio-button';
import { Home, Settings, Play } from 'lucide-react';
import { NeoText } from '@/components/atoms/neo-text';

export default function ButtonsDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Buttons & Icons</NeoText>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Standard Buttons</NeoText>
        <div className="flex flex-wrap gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="accent">Accent Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Sizes</NeoText>
        <div className="flex flex-wrap items-end gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Home className="w-4 h-4" /></Button>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Icon Buttons (Custom Atom)</NeoText>
        <div className="flex flex-wrap gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <IconButton variant="default"><Home className="w-6 h-6"/></IconButton>
          <IconButton variant="secondary"><Settings className="w-6 h-6"/></IconButton>
        </div>
      </section>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Interactive Buttons</NeoText>
        <div className="flex flex-wrap gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <ConfettiBurst>
            <Button variant="accent">🎉 Confetti Burst</Button>
          </ConfettiBurst>
          
          <AudioButton variant="success" className="gap-2">
            <Play className="w-5 h-5 fill-current" />
            Pop Sound
          </AudioButton>
        </div>
      </section>
    </div>
  );
}
