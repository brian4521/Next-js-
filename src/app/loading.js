export default function Loading() {
  return (
    <main className="flex min-h-[60vh] flex-1 items-center justify-center bg-slate-50 px-6 py-16">
      <div className="flex flex-col items-center gap-4 text-center" role="status">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
        <p className="text-sm font-medium text-slate-600">Loading...</p>
        <span className="sr-only">Loading page content</span>
      </div>
    </main>
  );
}
