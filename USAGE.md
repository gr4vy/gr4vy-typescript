<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.buyers.list();

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->