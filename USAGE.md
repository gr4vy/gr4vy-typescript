<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  merchantAccountId: "<id>",
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.browsePaymentMethodDefinitionsGet();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->