import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
const source = walk("src").filter(
  (path) =>
    /\.(ts|tsx|css)$/.test(path) &&
    !path.includes(join("src", "test")) &&
    !path.includes(join("components", "ui") + "\\") &&
    !path.includes("components/ui/sidebar"),
);
const read = (path: string) => readFileSync(path, "utf8");

describe("Privacy promises in the legal pages", () => {
  it("loads no third-party fonts, scripts or stylesheets", () => {
    for (const path of source) {
      const text = read(path);
      expect(text, path).not.toMatch(
        /fonts\.(googleapis|gstatic)\.com|googletagmanager|google-analytics|plausible\.io|hotjar|cdn\.gpteng/,
      );
      expect(text, path).not.toMatch(/__lovableEvents|reportLovableError/);
    }
  });
  it("has only the one documented browser storage key", () => {
    const uses = source.flatMap((path) =>
      [
        ...read(path).matchAll(
          /(localStorage|sessionStorage|document\.cookie)\S*/g,
        ),
      ].map((match) => match[0]),
    );
    expect(new Set(uses)).toEqual(
      new Set([
        "localStorage.setItem('lang',",
        "localStorage.getItem('lang');",
      ]),
    );
  });
  it("keeps router scroll restoration off, because it writes to sessionStorage", () => {
    expect(read("src/router.tsx")).toContain("scrollRestoration: false");
  });
  it("ships the self-hosted font files that styles.css names", () => {
    const fonts = [
      ...read("src/styles.css").matchAll(/url\("\/fonts\/([^"]+)"\)/g),
    ].map((match) => match[1]);
    expect(fonts).toHaveLength(6);
    for (const font of fonts)
      expect(
        statSync(join("public", "fonts", font ?? "")).size,
      ).toBeGreaterThan(1000);
  });
  it("contains no placeholder contact address", () => {
    for (const path of source)
      expect(read(path), path).not.toContain("example.com");
  });
});
