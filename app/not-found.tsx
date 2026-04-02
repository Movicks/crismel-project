import Link from "next/link";
export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold text-[#36e43e]">404 - Not Found</h1>
      <p className="text-center text-black/80">
        The page you requested does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-xl bg-[#031403] px-4 py-2 text-[#36e43e]"
      >
        Go back home
      </Link>
    </main>
  );
}
