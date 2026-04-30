export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar placehoder */}
      <aside className="w-64 border-r-2 border-border hidden md:block bg-card">
        <div className="p-6 font-bold text-xl border-b-2 border-border">
          Admin ERP
        </div>
        <nav className="p-4 flex flex-col gap-2">
          {/* Menu items */}
          <div className="px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg cursor-pointer">Dashboard</div>
          <div className="px-4 py-2 hover:bg-muted font-bold rounded-lg cursor-pointer">Users</div>
          <div className="px-4 py-2 hover:bg-muted font-bold rounded-lg cursor-pointer">Content</div>
        </nav>
      </aside>
      
      <div className="flex-1 flex flex-col">
        {/* Topbar placeholder */}
        <header className="h-16 border-b-2 border-border flex items-center px-6 justify-between bg-card">
          <div className="font-bold md:hidden">Admin ERP</div>
          <div className="font-bold hidden md:block">Analytics Overview</div>
          <div>Profile</div>
        </header>

        {/* Main Content Areas */}
        <main className="p-6 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
