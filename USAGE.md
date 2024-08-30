<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.createAccountUpdaterJob({
        paymentMethodIds: ["88e8fffc-c40a-4d66-83ff-49739007c7a2"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->