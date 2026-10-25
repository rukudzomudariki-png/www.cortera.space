import { describe, it, expect } from "vitest";
import { buildMailto, CONTACT_EMAIL } from "./contact";

describe("buildMailto", () => {
  it("encodes subject and body", () => {
    expect(buildMailto({ subject: "Hello Cortera", body: "Hi Cortera team,\n\n" })).toBe(
      "mailto:team@cortera.space?subject=Hello%20Cortera&body=Hi%20Cortera%20team%2C%0D%0A%0D%0A"
    );
  });
  it("converts line breaks to %0D%0A", () => {
    expect(buildMailto({ subject: "s", body: "a\nb" })).toContain("a%0D%0Ab");
  });
  it("encodes special characters and ampersands", () => {
    const out = buildMailto({ subject: "A&B", body: "x=y&z" });
    expect(out).toContain("A%26B");
    expect(out).toContain("x%3Dy%26z");
  });
  it("uses contact email", () => {
    expect(CONTACT_EMAIL).toBe("team@cortera.space");
  });
});
