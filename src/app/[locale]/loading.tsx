export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-6 py-24 lg:px-8">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <div className="size-4 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground/80" />
        <span>Loading…</span>
      </div>
    </div>
  );
}

