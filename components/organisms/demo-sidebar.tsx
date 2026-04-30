'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NeoText } from '@/components/atoms/neo-text';
import { Home } from 'lucide-react';

const DEMO_ROUTES = [
  {
    title: 'Getting Started',
    links: [
      { href: '/demo/components', label: 'Introduction' }
    ]
  },
  {
    title: 'Atoms',
    links: [
      { href: '/demo/components/atoms/buttons', label: 'Buttons & Icons' },
      { href: '/demo/components/atoms/badges', label: 'Badges' },
      { href: '/demo/components/atoms/typography', label: 'Typography' },
      { href: '/demo/components/atoms/feedback', label: 'Feedback & Loaders' }
    ]
  },
  {
    title: 'Forms & Inputs',
    links: [
      { href: '/demo/components/forms/inputs', label: 'Text Inputs' },
      { href: '/demo/components/forms/fields', label: 'Form Field' },
      { href: '/demo/components/forms/select', label: 'Select & Dropdowns' },
      { href: '/demo/components/forms/switches', label: 'Switches & Checkboxes' }
    ]
  },
  {
    title: 'Molecules',
    links: [
      { href: '/demo/components/molecules/cards', label: 'Content Cards' },
      { href: '/demo/components/molecules/data', label: 'Data Display' },
      { href: '/demo/components/molecules/navigation', label: 'Navigation Elements' }
    ]
  },
  {
    title: 'Organisms',
    links: [
      { href: '/demo/components/organisms/game-grids', label: 'Game Grids' },
      { href: '/demo/components/organisms/social', label: 'Social & Profiles' },
      { href: '/demo/components/organisms/admin', label: 'Admin Panels' }
    ]
  }
];

export function DemoSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-card overflow-hidden">
      <div className="p-4 border-b-2 border-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
           <Link href="/" className="hover:opacity-80 transition-opacity">
              <Home className="w-5 h-5" />
           </Link>
           <NeoText variant="subtitle" className="text-xl">UI Docs</NeoText>
        </div>
      </div>
      
      <ScrollArea className="flex-1 min-h-0">
        <div className="p-4 space-y-6">
          {DEMO_ROUTES.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-sm mb-2 text-muted-foreground uppercase tracking-wider">
                {group.title}
              </h4>
              <div className="flex flex-col space-y-1">
                {group.links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-3 py-2 rounded-xl text-sm font-medium border-2 transition-all duration-200",
                        isActive 
                          ? "bg-primary text-primary-foreground border-border shadow-[2px_2px_0_0_#000000]" 
                          : "bg-transparent border-transparent hover:bg-muted hover:border-border"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
