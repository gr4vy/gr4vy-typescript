import jwt from "jsonwebtoken";
import snakecaseKeys from "snakecase-keys";
import timekeeper from "timekeeper";
import { describe, expect, test } from "vitest";
import { getEmbedToken, getToken, JWTScope, updateToken, SDK_METADATA } from "../src";

const privateKey = `-----BEGIN PRIVATE KEY-----
MIHuAgEAMBAGByqGSM49AgEGBSuBBAAjBIHWMIHTAgEBBEIBABM9jQu+HT87oIik
O6DiJjYeghr3V+VMBVNU2hCM3X/OAS6TUTylMbnjDnwWdmu7anVSnjvEY1a4KxQ9
WZ8E/PKhgYkDgYYABABRdv5VAtOsGb6THxeK/p7RAARPm6Zwb7FF4sZAYkkSB7h0
2jpj3UHSpyl92BQkiF/xakz7hMMD1A0ZTn5SuXWp3AG9qPHO3eB9WrZhPGYixwyo
XNjhnPEDhmkItKXteke9iBOTOOXB7AFQSh7EXRBmhBs4u3ZlTmrl+8VdBc3+jwAY
rw==
-----END PRIVATE KEY-----`;

const thumbprint = "va-SLs5AxJNfqKXD8LI5Y38BflpNvjZjY4RSWz66U1w";

const embedParams = {
  amount: 9000,
  currency: "USD",
  buyerExternalIdentifier: "user-123",
  connectionOptions: {
    "stripe-card": {
      stripe_connect: {
        key: "value",
      },
    },
  },
  metadata: {
    camelCaseKey: "value1",
    snake_case_key: "value2",
  },
  cartItems: [
    {
      name: "Joust Duffle Bag",
      quantity: 1,
      unitAmount: 9000,
      taxAmount: 0,
      categories: ["Gear", "Bags", "Test"],
    },
  ],
};

const checkoutSessionId = "0ebde6a1-f66c-43ea-bb8b-73751864c604";

const rsaPrivateKey = `-----BEGIN PRIVATE KEY-----
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
03sq0emH9VKBYIgM6Bgiprh8Z3ab5w==
-----END PRIVATE KEY-----`;

describe(".getToken", () => {
  test("should create a valid signed JWT token", async () => {
    const token = await getToken({
      privateKey,
      scopes: [JWTScope.ReadAll, JWTScope.WriteAll],
      expiresIn: "1m",
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    expect(decoded.header.alg).toBe("ES512");
    expect(decoded.header.typ).toBe("JWT");
    expect(decoded.header.kid).toBe(thumbprint);
    expect(decoded.payload.scopes).toEqual(["*.read", "*.write"]);
    expect(typeof decoded.payload.iat).toBe("number");
    expect(typeof decoded.payload.nbf).toBe("number");
    expect(typeof decoded.payload.exp).toBe("number");
    expect(decoded.payload.iss).toMatch(SDK_METADATA.userAgent);
  });

  test("should accept optional embed data", async () => {
    const token = await getToken({
      privateKey,
      scopes: [JWTScope.Embed],
      embedParams,
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    const connOptions =
      embedParams.connectionOptions || embedParams["connection_options"];
    const expected = snakecaseKeys(embedParams, { exclude: ["metadata"] });
    expected["connection_options"] = connOptions;

    expect(decoded.payload.scopes).toEqual(["embed"]);
    expect(decoded.payload.embed).toEqual(expected);
  });

  test("should ignore embed data if the embed scope was not set", async () => {
    const token = await getToken({
      privateKey,
      scopes: [JWTScope.ReadAll],
      embedParams,
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    expect(decoded.payload.scopes).toEqual(["*.read"]);
    expect(decoded.payload.embed).toBeUndefined();
  });
});

describe(".getToken with RSA", () => {
  test("should create a valid signed JWT token with RS512", async () => {
    const token = await getToken({
      privateKey: rsaPrivateKey,
      scopes: [JWTScope.ReadAll, JWTScope.WriteAll],
      expiresIn: "1m",
    });

    const decoded = jwt.verify(token, rsaPrivateKey, {
      algorithms: ["RS512"],
      complete: true,
    });

    expect(decoded.header.alg).toBe("RS512");
    expect(decoded.header.typ).toBe("JWT");
    expect(typeof decoded.header.kid).toBe("string");
    expect(typeof decoded.payload.iat).toBe("number");
    expect(decoded.payload.scopes).toEqual(["*.read", "*.write"]);
  });
});

describe(".getEmbedToken", () => {
  test("should create a JWT token for use with Embed", async () => {
    const token = await getEmbedToken({
      privateKey,
      embedParams,
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    const connOptions =
      embedParams.connectionOptions || embedParams["connection_options"];
    const expected = snakecaseKeys(embedParams, { exclude: ["metadata"] });
    expected["connection_options"] = connOptions;

    expect(decoded.payload.scopes).toEqual(["embed"]);
    expect(decoded.payload.embed).toEqual(expected);
  });

  test("should take an optional checkout session ID", async () => {
    const token = await getEmbedToken({
      privateKey,
      embedParams,
      checkoutSessionId,
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    expect(decoded.payload.checkout_session_id).toEqual(checkoutSessionId);
  });
});

describe(".updateToken", () => {
  test("should resign a token with a new signature and expiration", async () => {
    timekeeper.freeze(Date.now());

    const originalToken = await getToken({ privateKey, expiresIn: "1m" });

    timekeeper.travel(Date.now() + 1000 * 90);

    const newToken = await updateToken({
      privateKey,
      token: originalToken,
      expiresIn: "1m",
    });

    const originalDecoded = jwt.decode(originalToken, { complete: true });
    const newDecoded = jwt.decode(newToken, { complete: true });

    expect(newDecoded.header).toEqual(originalDecoded.header);
    expect(newDecoded.payload.scopes).toEqual(originalDecoded.payload.scopes);
    expect(newDecoded.payload.embed).toEqual(originalDecoded.payload.embed);
    expect(newDecoded.payload.checkout_session_id).toEqual(
      originalDecoded.payload.checkout_session_id
    );
    expect(newDecoded.payload.iat).toBeGreaterThan(originalDecoded.payload.iat);
    expect(newDecoded.payload.exp).toBeGreaterThan(originalDecoded.payload.exp);
    expect(newDecoded.payload.nbf).toBeGreaterThan(originalDecoded.payload.nbf);
  });

  test("should allow an Embed token to be updated with new Embed params", async () => {
    timekeeper.freeze(Date.now());

    const originalToken = await getEmbedToken({
      privateKey,
      embedParams,
      checkoutSessionId,
      expiresIn: "1m",
    });

    timekeeper.travel(Date.now() + 1000 * 90);

    const newEmbedParams = {
      amount: 1299,
      currency: "USD",
    };

    const newToken = await updateToken({
      token: originalToken,
      expiresIn: "1m",
      embedParams: newEmbedParams,
      privateKey,
    });

    const originalDecoded = jwt.decode(originalToken, { complete: true });
    const newDecoded = jwt.decode(newToken, { complete: true });

    expect(newDecoded.payload.embed).toEqual(newEmbedParams);
    expect(newDecoded.payload.checkout_session_id).toEqual(
      originalDecoded.payload.checkout_session_id
    );
  });

  test("should resign an RSA token with RS512", async () => {
    timekeeper.freeze(Date.now());

    const originalToken = await getToken({ privateKey: rsaPrivateKey, expiresIn: "1m" });

    timekeeper.travel(Date.now() + 1000 * 90);

    const newToken = await updateToken({
      token: originalToken,
      expiresIn: "1m",
      privateKey: rsaPrivateKey,
    });

    const originalDecoded = jwt.decode(originalToken, { complete: true });
    const newDecoded = jwt.verify(newToken, rsaPrivateKey, {
      algorithms: ["RS512"],
      complete: true,
    });

    expect(newDecoded.header.alg).toBe("RS512");
    expect(newDecoded.payload.iat).toBeGreaterThan(originalDecoded.payload.iat);
    expect(newDecoded.payload.exp).toBeGreaterThan(originalDecoded.payload.exp);
  });
});
