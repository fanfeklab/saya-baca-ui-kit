import { NeoText } from '@/components/atoms/neo-text';

export default function TypographyDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Typography (NeoText)</NeoText>
      <NeoText variant="body" className="text-muted-foreground">
        Komponen atom <code>NeoText</code> adalah komponen pembungkus sentral untuk semua typography. 
        Mendukung berbagai semantic tags dan variasi style out-of-the-box.
      </NeoText>

      <section className="space-y-6">
        <NeoText variant="subtitle">Headings</NeoText>
        <div className="flex flex-col gap-8 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm overflow-hidden">
          <div>
            <NeoText variant="title" className="text-5xl sm:text-7xl">Display Hero</NeoText>
            <p className="text-sm text-muted-foreground mt-2">.text-5xl .sm:text-7xl (Custom Class)</p>
          </div>
          <div>
            <NeoText variant="title">Title / H1</NeoText>
            <p className="text-sm text-muted-foreground mt-2">variant="title"</p>
          </div>
          <div>
            <NeoText variant="subtitle">Subtitle / H2</NeoText>
            <p className="text-sm text-muted-foreground mt-2">variant="subtitle"</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Body Text</NeoText>
        <div className="flex flex-col gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <div>
            <NeoText variant="body">
              Ini adalah contoh penggunaan font standar untuk paragraf atau deskripsi panjang. 
              Cocok digunakan untuk konten instruksi, cerita dalam aplikasi, atau teks penjelas.
            </NeoText>
            <p className="text-sm text-muted-foreground mt-2">variant="body"</p>
          </div>
          
          <div className="mt-4">
            <NeoText variant="body" className="font-bold">
              Ini adalah contoh body text dengan ketebalan (bold).
            </NeoText>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Special Styles</NeoText>
        <div className="flex flex-col gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <div>
            <NeoText variant="title" stroke className="text-yellow-400">Title with Outline Stroke</NeoText>
            <p className="text-sm text-muted-foreground mt-2">variant="title" stroke (Berguna untuk judul game)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
