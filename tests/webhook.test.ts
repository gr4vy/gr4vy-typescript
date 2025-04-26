import { describe, expect, test } from 'vitest';
import { verifyWebhook } from "../src";

describe(".verifyWebook()", () => {
  test("should verify a webhook signature", async () => {
    const secret =
      "Ik4L-8FH0ihWczctcIPXZRR_8F0fPNgmhEfVBbZ3zNwqQVa1Or4tBz4Pgw2eNaVDod7H56Y268h_wohEUaWbUg";
    const signatureHeader =
      "78aca0c78005107a654a957b8566fa6e0e5e06aea92d7da72a6da9e5a690d013,other";
    const timestampHeader = "1744018920";
    const payload = "payload";
    const timestampTolerance = 0; // no timestamp validation

    verifyWebhook(
      payload,
      secret,
      signatureHeader,
      timestampHeader,
      timestampTolerance
    );
  });

  test("should raise an error for an old timestamp", async () => {
    const secret =
      "Ik4L-8FH0ihWczctcIPXZRR_8F0fPNgmhEfVBbZ3zNwqQVa1Or4tBz4Pgw2eNaVDod7H56Y268h_wohEUaWbUg";
    const signatureHeader =
      "78aca0c78005107a654a957b8566fa6e0e5e06aea92d7da72a6da9e5a690d013,other";
    const timestampHeader = "1744018920";
    const payload = "payload";
    const timestampTolerance = 60; // 1 minute tolerance

    expect(() => {
      verifyWebhook(
        payload,
        secret,
        signatureHeader,
        timestampHeader,
        timestampTolerance
      );
    }).toThrow("Timestamp too old");
  });

  test("should raise an error for a wrong signature", async () => {
    const secret =
      "Ik4L-8FH0ihWczctcIPXZRR_8F0fPNgmhEfVBbZ3zNwqQVa1Or4tBz4Pgw2eNaVDod7H56Y268h_wohEUaWbUg";
    const signatureHeader = "other";
    const timestampHeader = "1744018920";
    const payload = "payload";
    const timestampTolerance = 0; // no timestamp validation

    expect(() => {
      verifyWebhook(
        payload,
        secret,
        signatureHeader,
        timestampHeader,
        timestampTolerance
      );
    }).toThrow("No matching signature found");
  });

  test("should raise an error for an invalid timestamp", async () => {
    const secret =
      "Ik4L-8FH0ihWczctcIPXZRR_8F0fPNgmhEfVBbZ3zNwqQVa1Or4tBz4Pgw2eNaVDod7H56Y268h_wohEUaWbUg";
    const signatureHeader =
      "78aca0c78005107a654a957b8566fa6e0e5e06aea92d7da72a6da9e5a690d013,other";
    const timestampHeader = "wrong";
    const payload = "payload";
    const timestampTolerance = 0; // no timestamp validation

    expect(() => {
      verifyWebhook(
        payload,
        secret,
        signatureHeader,
        timestampHeader,
        timestampTolerance
      );
    }).toThrow("Invalid header timestamp");
  });

  test("should raise an error for a missing signature header", async () => {
    const secret =
      "Ik4L-8FH0ihWczctcIPXZRR_8F0fPNgmhEfVBbZ3zNwqQVa1Or4tBz4Pgw2eNaVDod7H56Y268h_wohEUaWbUg";
    const signatureHeader = null;
    const timestampHeader = "wrong";
    const payload = "payload";
    const timestampTolerance = 0; // no timestamp validation

    expect(() => {
      verifyWebhook(
        payload,
        secret,
        signatureHeader,
        timestampHeader,
        timestampTolerance
      );
    }).toThrow("Missing header values");
  });

  test("should raise an error for a missing timestamp header", async () => {
    const secret =
      "Ik4L-8FH0ihWczctcIPXZRR_8F0fPNgmhEfVBbZ3zNwqQVa1Or4tBz4Pgw2eNaVDod7H56Y268h_wohEUaWbUg";
    const signatureHeader =
      "78aca0c78005107a654a957b8566fa6e0e5e06aea92d7da72a6da9e5a690d013,other";
    const timestampHeader = null;
    const payload = "payload";
    const timestampTolerance = 0; // no timestamp validation

    expect(() => {
      verifyWebhook(
        payload,
        secret,
        signatureHeader,
        timestampHeader,
        timestampTolerance
      );
    }).toThrow("Missing header values");
  });
});
