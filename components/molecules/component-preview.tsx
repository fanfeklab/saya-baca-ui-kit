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
    <div className="space-y-4 my-8">
      {(title || description) && (
        <div className="space-y-1">
          {title && <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">{title}</h3>}
          {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
      )}
      <Tabs defaultValue="preview" className="relative w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger 
            value="preview" 
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger 
            value="code" 
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="pt-4">
          <div className={`min-h-[350px] w-full rounded-md border p-10 flex ${centered ? 'items-center justify-center' : 'items-start justify-start'}`}>
             <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
                {children}
             </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="pt-4 relative">
          <Button 
            size="icon" 
            variant="ghost" 
            className="absolute top-6 right-2 h-8 w-8 text-white hover:bg-white/20"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </Button>
          <div className="rounded-md overflow-hidden border">
            <SyntaxHighlighter 
              language="tsx" 
              style={atomDark}
              customStyle={{ margin: 0, padding: '1.5rem 1rem', fontSize: '0.875rem' }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
