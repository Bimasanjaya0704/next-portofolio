// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50">Dashboard Home</div>
      <div className="aspect-video rounded-xl bg-muted/50">Dashboard Info</div>
      <div className="aspect-video rounded-xl bg-muted/50">Dashboard Stats</div>
    </div>
  );
}
