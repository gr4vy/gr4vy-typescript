import { describe, expect, test } from "vitest";

import { decodeBase64, pemToPkcs8 } from "../src/lib/helpers";

describe("decodeBase64", () => {
  test("decodes valid base64 string", () => {
    const input = Buffer.from([1, 2, 3]).toString("base64");
    const output = decodeBase64(input);
    expect(Array.from(output)).toEqual([1, 2, 3]);
  });

  test("throws on invalid base64", () => {
    expect(() => decodeBase64("!@#$")).toThrow();
  });

});

describe("pemToPkcs8", () => {
  const validPem = `-----BEGIN PRIVATE KEY-----\nAQID\n-----END PRIVATE KEY-----`;

  test("parses valid PEM", () => {
    const output = pemToPkcs8(validPem);
    expect(Array.from(output)).toEqual([1, 2, 3]);
  });

  test("throws on missing BEGIN marker", () => {
    const pem = "AQID\n-----END PRIVATE KEY-----";
    expect(() => pemToPkcs8(pem)).toThrow(/missing 'BEGIN PRIVATE KEY'/);
  });

  test("throws on missing END marker", () => {
    const pem = "-----BEGIN PRIVATE KEY-----\nAQID";
    expect(() => pemToPkcs8(pem)).toThrow(/missing.*END PRIVATE KEY/);
  });

});
