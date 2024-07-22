<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await gr4vy.accountUpdater.newAccountUpdaterJob({
        paymentMethodIds: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->