// app/dashboard/portofolio/page.tsx
export default function PortofolioPage() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50">
        Portofolio Project 1
      </div>
      <div className="aspect-video rounded-xl bg-muted/50">
        Portofolio Project 2
      </div>
      <div className="aspect-video rounded-xl bg-muted/50">
        Portofolio Project 3
      </div>
    </div>
  );
}
