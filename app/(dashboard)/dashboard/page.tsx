import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AdminDashboardContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">45,231</div>
            <p className="text-sm text-success font-bold mt-1">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">12,042</div>
            <p className="text-sm text-success font-bold mt-1">+10.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Session Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">24m 15s</div>
            <p className="text-sm text-destructive font-bold mt-1">-2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="h-96 flex justify-center items-center">
        <div className="text-muted-foreground font-medium">Grafik Aktivitas Pengguna (Recharts placeholder)</div>
      </Card>
    </div>
  );
}
