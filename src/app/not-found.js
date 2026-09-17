import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-1 items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-600">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
