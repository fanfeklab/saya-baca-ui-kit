import { NeoText } from '@/components/atoms/neo-text';
import { Card, CardContent } from '@/components/ui/card';

export default function DemoIntroductionPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <div>
        <NeoText variant="title">UI Kit Showcase</NeoText>
        <NeoText variant="body" className="text-muted-foreground mt-2">
          Selamat datang di galeri komponen aplikasi Belajar Anak TK. Gunakan sidebar di sebelah kiri untuk melihat daftar koleksi komponen yang dibagi berdasarkan struktur Atomic Design.
        </NeoText>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <NeoText variant="subtitle">Tentang UI Kit Ini</NeoText>
          <NeoText variant="body">
            Komponen dalam UI ini dirancang dengan gaya Neobrutalism (border tebal, bayangan tajam warna hitam tebal dengan border-radius responsif).
            Mendukung mode terang dan gelap dan difokuskan pada mobile-first experience.
          </NeoText>
        </CardContent>
      </Card>
    </div>
  );
}
