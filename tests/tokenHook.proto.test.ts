import jwt from "jsonwebtoken";
import { describe, expect, test } from "vitest";
import { TokenHook } from "../src/hooks/tokenHook";
import type { BeforeRequestContext } from "../src/hooks/types";

// Same ES512 test key + thumbprint used by tests/auth.test.js.
const privateKey = `-----BEGIN PRIVATE KEY-----
MIHuAgEAMBAGByqGSM49AgEGBSuBBAAjBIHWMIHTAgEBBEIBABM9jQu+HT87oIik
O6DiJjYeghr3V+VMBVNU2hCM3X/OAS6TUTylMbnjDnwWdmu7anVSnjvEY1a4KxQ9
WZ8E/PKhgYkDgYYABABRdv5VAtOsGb6THxeK/p7RAARPm6Zwb7FF4sZAYkkSB7h0
2jpj3UHSpyl92BQkiF/xakz7hMMD1A0ZTn5SuXWp3AG9qPHO3eB9WrZhPGYixwyo
XNjhnPEDhmkItKXteke9iBOTOOXB7AFQSh7EXRBmhBs4u3ZlTmrl+8VdBc3+jwAY
rw==
-----END PRIVATE KEY-----`;

const thumbprint = "va-SLs5AxJNfqKXD8LI5Y38BflpNvjZjY4RSWz66U1w";

function ctx(securitySource: unknown): BeforeRequestContext {
  // Only securitySource matters to the hook; the rest is padding for the type.
  return { securitySource } as unknown as BeforeRequestContext;
}

describe("TokenHook (custom-security-scheme prototype)", () => {
  test("signs a valid ES512 JWT from the { privateKey } security object", async () => {
    const req = new Request("https://api.sandbox.example.gr4vy.app/transactions");

    const out = await new TokenHook().beforeRequest(
      ctx({ privateKey, scopes: ["*.read"] }),
      req,
    );

    const auth = out.headers.get("Authorization");
    expect(auth).toMatch(/^Bearer /);

    const token = auth!.slice("Bearer ".length);
    const decoded = jwt.verify(token, privateKey, { algorithms: ["ES512"] });

    expect(decoded).toMatchObject({ scopes: ["*.read"] });
    // kid is derived from the key thumbprint, matching the existing withToken path.
    const header = jwt.decode(token, { complete: true })!.header;
    expect(header.alg).toBe("ES512");
    expect(header.kid).toBe(thumbprint);
  });

  test("defaults scopes to read+write when none are supplied", async () => {
    const out = await new TokenHook().beforeRequest(
      ctx({ privateKey }),
      new Request("https://api.sandbox.example.gr4vy.app/transactions"),
    );
    const token = out.headers.get("Authorization")!.slice("Bearer ".length);
    const decoded = jwt.verify(token, privateKey, { algorithms: ["ES512"] }) as {
      scopes: string[];
    };
    expect(decoded.scopes).toEqual(["*.read", "*.write"]);
  });

  test("resolves a function security source (backwards compatible)", async () => {
    const out = await new TokenHook().beforeRequest(
      ctx(async () => ({ privateKey })),
      new Request("https://api.sandbox.example.gr4vy.app/transactions"),
    );
    expect(out.headers.get("Authorization")).toMatch(/^Bearer /);
  });

  test("is a no-op when the source is a bare bearer string (current setup)", async () => {
    const out = await new TokenHook().beforeRequest(
      ctx(async () => "some-preexisting-token"),
      new Request("https://api.sandbox.example.gr4vy.app/transactions"),
    );
    // Hook leaves the request untouched; the generated bearer flow handles it.
    expect(out.headers.get("Authorization")).toBeNull();
  });
});
