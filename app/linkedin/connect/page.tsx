export default function LinkedInConnectPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6">
      <h1 className="text-3xl font-semibold">Connect LinkedIn</h1>
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
          className="w-full rounded-md border bg-background px-3 py-2"
        />
        <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground" type="submit">
          Continue to LinkedIn
        </button>
      </form>
    </main>
  );
}
