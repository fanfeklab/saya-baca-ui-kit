'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  centered?: boolean;
}

export function ComponentPreview({ title, description, code, children, centered = true }: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4 my-10">
      {(title || description) && (
        <div className="space-y-1 mb-4">
          {title && <h3 className="font-heading mt-8 scroll-m-20 text-2xl font-black tracking-tight">{title}</h3>}
          {description && <p className="text-muted-foreground text-base max-w-[85%]">{description}</p>}
        </div>
      )}
      <Tabs defaultValue="preview" className="relative w-full">
        <TabsList className="w-full justify-start rounded-none border-b-4 border-black bg-transparent p-0 mb-4 h-12">
          <TabsTrigger 
            value="preview" 
            className="relative h-12 rounded-t-md border-x-4 border-t-4 border-transparent bg-transparent px-6 pb-3 pt-3 font-bold text-muted-foreground shadow-none transition-all data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:-mb-1 z-10"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger 
            value="code" 
            className="relative h-12 rounded-t-md border-x-4 border-t-4 border-transparent bg-transparent px-6 pb-3 pt-3 font-bold text-muted-foreground shadow-none transition-all data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:-mb-1 z-10"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="pt-2 outline-none">
          <div className={`min-h-[350px] w-full rounded-xl border-4 border-black bg-white shadow-neo p-10 flex ${centered ? 'items-center justify-center' : 'items-start justify-start'} overflow-hidden relative`}>
             <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px]" />
             <div className="w-full h-full flex flex-col gap-6 items-center justify-center relative z-10">
                {children}
             </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="pt-2 outline-none relative">
          <div className="rounded-xl overflow-hidden border-4 border-black bg-[#1f2937] shadow-neo flex flex-col">
            {/* Mac OS Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-gray-800">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                 <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                 <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
               </div>
               <div className="text-xs text-gray-400 font-mono">example.tsx</div>
               <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-6 w-6 text-gray-400 hover:text-white hover:bg-white/10"
                  onClick={copyToClipboard}
               >
                  {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
               </Button>
            </div>
            
            <SyntaxHighlighter 
              language="tsx" 
              style={atomDark}
              customStyle={{ 
                margin: 0, 
                padding: '1.5rem', 
                fontSize: '0.875rem', 
                background: 'transparent',
                lineHeight: '1.6'
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
