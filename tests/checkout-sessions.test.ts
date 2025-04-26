import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { cleanupEnvironment, setupEnvironment } from './utils/setup';

let gr4vy;

beforeAll(async () => {
  gr4vy = await setupEnvironment()
});

afterAll(async () => {
  await cleanupEnvironment()
});

describe("gr4vy.checkoutSessions.create", () => {
  test("should create a checkout session", async () => {
    const response = await gr4vy.checkoutSessions.create()
    expect(response.id).toBeDefined();
  });
});