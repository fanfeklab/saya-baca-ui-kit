'use client';

import { NeoText } from '@/components/atoms/neo-text';
import { ComponentPreview } from '@/components/molecules/component-preview';
import { Card, CardContent } from '@/components/ui/card';

export default function GameGridsDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl pb-20">
      <div>
        <NeoText variant="title">Game Grids</NeoText>
        <NeoText variant="body" className="text-muted-foreground mt-2">
          Layout organism untuk daftar game/modul yang menggunakan flex/grid responsif.
        </NeoText>
      </div>

      <ComponentPreview
        title="Responsive Grid"
        description="Grid adaptif (1 kolom di HP, 2 di tablet, 3-4 di dekstop) untuk kartu modul belajar."
        code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>`}
      >
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[1,2,3].map((i) => (
              <Card key={i} className="shadow-none border-2 border-dashed bg-muted flex items-center justify-center h-32">
                 <NeoText variant="subtitle" className="text-muted-foreground opacity-50">Card {i}</NeoText>
              </Card>
            ))}
         </div>
      </ComponentPreview>

    </div>
  );
}
