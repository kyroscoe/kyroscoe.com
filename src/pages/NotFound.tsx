export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-semibold text-gray-100 md:text-5xl">404</h1>
      <h2 className="mt-6 text-2xl font-semibold md:text-3xl">Page not found</h2>
      <p className="mt-4 max-w-xl text-xl text-gray-500 md:text-2xl">
        The page you requested is not available. Head back to the homepage or contact Kyroscoe for help.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Return home
      </a>
    </div>
  );
}
