export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
      <div className="h-6 w-24 rounded-md bg-muted/60" />
      <div className="mt-5 h-10 w-2/3 rounded-lg bg-muted/60" />
      <div className="mt-4 h-5 w-full max-w-2xl rounded-lg bg-muted/50" />
      <div className="mt-2 h-5 w-full max-w-xl rounded-lg bg-muted/50" />

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        <div className="h-24 rounded-2xl border border-border/60 bg-card/40" />
        <div className="h-24 rounded-2xl border border-border/60 bg-card/40" />
        <div className="h-24 rounded-2xl border border-border/60 bg-card/40" />
      </div>
    </div>
  );
}

