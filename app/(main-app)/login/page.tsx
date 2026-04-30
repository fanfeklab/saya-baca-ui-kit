import { NeoText } from '@/components/atoms/neo-text';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/molecules/form-field';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col p-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-28 min-h-screen justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Welcome Back!</CardTitle>
          <NeoText variant="body" className="text-muted-foreground">Silakan masuk ke akun Anda</NeoText>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormField 
            label="Email / Username" 
            placeholder="budi@example.com" 
          />
          <FormField 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
          />
          <Link href="/home" passHref className="w-full block">
            <Button variant="default" className="w-full font-bold">Masuk</Button>
          </Link>
          <div className="text-center mt-4">
            <Link href="/" className="text-sm font-bold text-muted-foreground underline">Kembali ke Beranda</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
