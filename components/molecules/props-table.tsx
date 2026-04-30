'use client';

import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface PropsTableItem {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  props: PropsTableItem[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border-4 border-black bg-white shadow-neo">
      <Table>
        <TableHeader className="bg-[#facc15] border-b-4 border-black">
          <TableRow className="hover:bg-[#facc15]">
            <TableHead className="w-[150px] font-black text-black">Prop</TableHead>
            <TableHead className="w-[150px] font-black text-black">Type</TableHead>
            <TableHead className="w-[120px] font-black text-black">Default</TableHead>
            <TableHead className="font-black text-black">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name} className="border-b-2 border-dashed border-black/20 hover:bg-muted/50 transition-colors">
              <TableCell className="font-mono text-xs font-bold text-black bg-muted/50 border-r-2 border-dashed border-black/20">
                {prop.name}
              </TableCell>
              <TableCell className="font-mono text-xs text-blue-600 font-semibold">{prop.type}</TableCell>
              <TableCell className="font-mono text-xs text-muted-foreground">{prop.default || '-'}</TableCell>
              <TableCell className="text-sm font-medium">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
