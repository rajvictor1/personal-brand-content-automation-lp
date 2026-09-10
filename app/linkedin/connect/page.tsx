export default function LinkedInConnectPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-card p-8 shadow-sm">
        <p className="mb-4 text-sm font-medium tracking-wide text-primary">LinkedIn setup</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Connect LinkedIn</h1>
        <p className="mt-3 text-muted-foreground">
          Connect the personal LinkedIn profile that will publish approved BrandOps posts.
        </p>
        <form action="/api/linkedin/oauth/start" method="post" className="mt-8 space-y-4">
          <label className="block text-sm font-medium" htmlFor="setup_token">
            Setup password
          </label>
          <input
            id="setup_token"
            name="setup_token"
            type="password"
            autoComplete="off"
            required
            className="w-full rounded-xl border border-white/10 bg-background px-3 py-2"
          />
          <button
            className="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
            type="submit"
          >
            Continue to LinkedIn
          </button>
        </form>
      </div>
    </main>
  );
}
