'use client';

import { NeoText } from '@/components/atoms/neo-text';
import { ComponentPreview } from '@/components/molecules/component-preview';
import { BottomNav } from '@/components/molecules/bottom-nav';
import { AdminTopbar } from '@/components/molecules/admin-topbar';

export default function NavigationDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl pb-20">
      <div>
        <NeoText variant="title">Navigation Elements</NeoText>
        <NeoText variant="body" className="text-muted-foreground mt-2">
          Sistem navigasi aplikasi seperti topbar, bottom bar, dan breadcrumbs.
        </NeoText>
      </div>

      <ComponentPreview
        title="Floating Bottom Navbar (Main App)"
        description="Digunakan di versi mobile (Childrens App) agar mudah dijangkau."
        code={`import { BottomNav } from "@/components/molecules/bottom-nav"

// Penempatan normal di <main> layout paling bawah
<BottomNav />`}
        centered={false}
      >
        <div className="w-full relative h-[150px] bg-muted border-2 flex items-end justify-center pb-4 rounded-xl overflow-hidden">
          {/* Untuk keperluan preview, disimulasikan posisinya statis */}
          <div className="flex gap-2 sm:gap-6 px-6 py-4 bg-primary text-primary-foreground rounded-2xl shadow-[0_8px_0_0_#000000,0_4px_0_0_#000000] border-4 border-black border-b-[6px] translate-y-[-2px]">
             Navigasi statis preview, navigasi aslinya fixed bottom.
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Admin Topbar"
        description="Navigation bar untuk admin dashboard."
        code={`import { AdminTopbar } from "@/components/molecules/admin-topbar"

<header className="border-b-2">
   <AdminTopbar />
</header>`}
        centered={false}
      >
        <div className="w-full border-4 border-dashed rounded-xl overflow-hidden pointer-events-none relative h-[250px]">
           <div className="absolute top-0 w-full left-0">
             <AdminTopbar />
           </div>
           <div className="mt-20 p-8 flex items-center justify-center h-full text-muted-foreground font-bold italic">
             Admin Page Content
           </div>
        </div>
      </ComponentPreview>

    </div>
  );
}
