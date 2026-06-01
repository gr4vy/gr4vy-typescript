import fc from "fast-check";
import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { address, billingDetails, buyer, uniqueId } from "../utils/fixtures";
import { fcParams, name } from "../utils/arbitraries";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Buyers", () => {
  test("create → get → list → delete", async () => {
    const created = await gr4vy.buyers.create(buyer());
    expect(created.id).toBeDefined();

    const fetched = await gr4vy.buyers.get(created.id!);
    expect(fetched.id).toBe(created.id);

    const page = await gr4vy.buyers.list({ search: created.id });
    expect(page).toBeDefined();

    await gr4vy.buyers.delete(created.id!);
    await expect(() => gr4vy.buyers.get(created.id!)).rejects.toThrow();
  });

  test("can be looked up by external identifier", async () => {
    const externalIdentifier = uniqueId("buyer-ext");
    const created = await gr4vy.buyers.create(buyer({ externalIdentifier }));
    expect(created.externalIdentifier).toBe(externalIdentifier);
  });

  // Property: a partial update changes only the fields supplied and leaves every
  // other field untouched. The subset of fields to mutate is itself generated,
  // so we cover many partial-update combinations cheaply against the live API.
  test("partial update only touches the supplied fields", async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record(
          {
            displayName: name(),
            accountNumber: fc.string({ minLength: 1, maxLength: 12 }),
          },
          { requiredKeys: [] }
        ),
        async (patch) => {
          fc.pre(Object.keys(patch).length > 0);

          const original = await gr4vy.buyers.create(
            buyer({
              displayName: "Original Name",
              accountNumber: "ACC-ORIGINAL",
              billingDetails: billingDetails({ firstName: "Keep", lastName: "Me" }),
            })
          );

          const updated = await gr4vy.buyers.update(patch, original.id!);

          // Changed fields took effect.
          if (patch.displayName !== undefined) {
            expect(updated.displayName).toBe(patch.displayName);
          }
          if (patch.accountNumber !== undefined) {
            expect(updated.accountNumber).toBe(patch.accountNumber);
          }
          // Untouched fields retained their original values.
          if (patch.displayName === undefined) {
            expect(updated.displayName).toBe("Original Name");
          }
          if (patch.accountNumber === undefined) {
            expect(updated.accountNumber).toBe("ACC-ORIGINAL");
          }
          // Billing details were never in the patch, so they must be preserved.
          expect(updated.billingDetails?.firstName).toBe("Keep");
          expect(updated.billingDetails?.lastName).toBe("Me");

          await gr4vy.buyers.delete(original.id!);
        }
      ),
      fcParams(4)
    );
  });

  describe("shipping details", () => {
    test("create → list → get → update (partial) → delete", async () => {
      const owner = await gr4vy.buyers.create(buyer());

      const created = await gr4vy.buyers.shippingDetails.create(
        {
          firstName: "Ship",
          lastName: "Here",
          emailAddress: "ship@example.com",
          address: address({ city: "London" }),
        },
        owner.id!
      );
      expect(created.id).toBeDefined();

      const list = await gr4vy.buyers.shippingDetails.list(owner.id!);
      expect(list.items.some((s) => s.id === created.id)).toBe(true);

      const fetched = await gr4vy.buyers.shippingDetails.get(owner.id!, created.id!);
      expect(fetched.id).toBe(created.id);

      // Partial update: change only the first name.
      const updated = await gr4vy.buyers.shippingDetails.update(
        { firstName: "Renamed" },
        owner.id!,
        created.id!
      );
      expect(updated.firstName).toBe("Renamed");
      expect(updated.lastName).toBe("Here");

      await gr4vy.buyers.shippingDetails.delete(owner.id!, created.id!);
    });
  });
});
