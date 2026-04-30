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
    <div className="my-6 overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[150px]">Prop</TableHead>
            <TableHead className="w-[150px]">Type</TableHead>
            <TableHead className="w-[120px]">Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="font-mono text-xs font-semibold">{prop.name}</TableCell>
              <TableCell className="font-mono text-xs text-blue-500">{prop.type}</TableCell>
              <TableCell className="font-mono text-xs text-muted-foreground">{prop.default || '-'}</TableCell>
              <TableCell className="text-sm">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
