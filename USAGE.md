<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@gr4vy/sdk";

async function run() {
    const sdk = new SDK({
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
        },
    });

    const result = await sdk.apiLogs.listApiLogs();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->