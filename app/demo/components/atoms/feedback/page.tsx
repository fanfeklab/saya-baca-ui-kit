import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { NeoText } from '@/components/atoms/neo-text';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function FeedbackLoadersPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Feedback & Loaders</NeoText>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Progress Indicators</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold">
              <span>Misi Harian: Bintang Terkumpul</span>
              <span>3 / 5</span>
            </div>
            {/* The progress bar relies on the shadcn component. Note: Need to make sure progress bar supports custom colors or border. */}
            <Progress value={60} className="h-6 border-2 border-border" />
          </div>

          <div className="space-y-2 mt-4">
             <div className="flex justify-between text-sm font-bold">
              <span>Experience XP</span>
              <span>85%</span>
            </div>
            <Progress value={85} className="h-4 border-2 border-border" />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Skeletons (Loading State)</NeoText>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm">
          <Card>
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-32" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-24 w-full rounded-xl" />
            </CardContent>
          </Card>

          <Card>
             <CardContent className="p-6 flex items-center justify-center h-full min-h-[200px]">
                <div className="flex flex-col items-center gap-4 w-full">
                  <Skeleton className="h-20 w-20 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
