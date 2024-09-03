<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.listBuyerShippingDetails("002969f0-dfe4-49ea-b5d8-b20d7e84726f");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->