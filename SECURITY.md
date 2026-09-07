# Security Policy

## Supported versions

This repository powers the BrandOps marketing site and related product demos. We support the latest deployed production branch (`main`) and the most recent preview deployment. Older commits and preview branches are not covered unless explicitly requested.

## Reporting a vulnerability

We take security issues seriously. If you discover a vulnerability in this repository or the deployed site, please report it privately so we can address it responsibly.

### Private reporting channels

1. **Preferred:** Open a private security advisory on GitHub under the `rajvictor1/personal-brand-content-automation-lp` repository. Use GitHub’s **Security > Advisories** flow.
2. **Alternative:** Email the maintainer directly at `security@brandops.site`. Include a clear description of the issue, steps to reproduce, and the impact you believe it has.

### What to include

- Affected URL, route, or file.
- Steps to reproduce.
- Expected vs actual behavior.
- Severity assessment and any potential impact on visitors or data.
- Whether you would like public attribution after the issue is resolved.

### Response timeline

- Acknowledgment within 2 business days.
- Initial assessment within 5 business days.
- Fix or mitigation plan shared as soon as it is validated.
- Public disclosure coordinated with the reporter after the fix is deployed.

## Security practices

### Secrets and credentials

- No secrets, API keys, or service-account credentials should be committed to the repository.
- `google-service-account.json` is excluded by `.gitignore` and must remain local only.
- `NEXT_PUBLIC_EMAILJS_*` values are public by design (EmailJS public key / service / template IDs). They are allowed in the client bundle but should still be rotated if misuse is suspected.
- Server-side-only values such as `GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL` and `BRANDOPS_LEAD_WEBHOOK_SECRET` are read from environment variables at runtime and are never exposed to the browser.

### Server-side validation

- The `/api/leads` endpoint validates incoming JSON with `zod` and rejects malformed payloads with HTTP 400.
- All fields are trimmed, length-limited, and the email is checked for valid format.
- The webhook secret is compared server-side before any external call is made.

### Client-side form handling

- The contact form (`ContactForm`) performs client-side validation before calling EmailJS.
- EmailJS keys are public client-side values and do not grant server-level access.

### Spam and abuse

- There is currently no CAPTCHA or rate-limiter on the contact form. This is an accepted gap for the current phase and should be added before high-traffic campaigns.
- The `/api/leads` endpoint is lightweight and validates input, but does not yet implement IP-based rate limiting.

### Authorization

- The site is largely static/marketing content. No user accounts, roles, or protected routes are implemented.
- Any future admin or dashboard routes must use explicit authentication and authorization checks.

### Dependencies

- Run `npm audit` regularly.
- Critical and high-severity dependency advisories should be patched or mitigated within one release cycle.
- Breaking major-version upgrades (for example Next.js major bumps) must be tested in a preview deployment before merging to `main`.

### Security headers

- Security headers are handled at the Vercel edge / Next.js level where possible.
- Review the deployment’s response headers for `X-Frame-Options`, `Content-Security-Policy`, `Referrer-Policy`, and `X-Content-Type-Options` on each production deploy.

### Infrastructure details

Specific Vercel project names, database URLs, webhook endpoints, and internal service identifiers are intentionally omitted from this file. Refer to the project’s secure runbook or environment-variable documentation for those details.

## Responsible disclosure

Please do not exploit any vulnerability beyond what is needed to demonstrate the issue, and do not expose visitor data. We appreciate coordinated disclosure and will credit reporters who wish to be named.

## Changes to this policy

Updates to this policy will be committed to the repository and announced via the changelog or release notes. The canonical version is always the file at the repository root.
