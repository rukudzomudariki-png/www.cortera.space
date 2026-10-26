export const CSP_MODE: "report-only" | "enforce" = "report-only";

export function cspHeaderName(): "Content-Security-Policy" | "Content-Security-Policy-Report-Only" {
  return CSP_MODE === "enforce" ? "Content-Security-Policy" : "Content-Security-Policy-Report-Only";
}

export const CSP_VALUE =
  process.env.NODE_ENV === "development"
    ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
    : "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests";
