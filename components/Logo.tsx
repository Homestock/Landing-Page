/**
 * Logo — single source of truth for the HomeStock wordmark.
 * Wraps the public-folder SVG so we can prepend NEXT_PUBLIC_BASE_PATH
 * (needed when the site is hosted at https://<org>.github.io/Landing-Page/).
 */
export function Logo({ className = '' }: { className?: string }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`${base}/homestock-logo.svg`} alt="HomeStock" className={className} />
  );
}
