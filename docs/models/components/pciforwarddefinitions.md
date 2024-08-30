# PCIForwardDefinitions

A definitions list of all the PCI endpoints that we can send card data to.

## Example Usage

```typescript
import { PCIForwardDefinitions } from "@gr4vy/sdk/models/components";

let value: PCIForwardDefinitions = {
    items: [
        {
            id: "amadeus",
            type: "vault-forward-definition",
            displayName: "Amadeus",
            hosts: ["https://api.amadeus.com", "https://test.api.amadeus.com"],
            authentications: [
                {
                    type: "vault-forward-authentication-definition",
                    kind: "mle",
                    title: "Message Level Encryption",
                    description: "A way to set up payload encryption",
                    fields: [
                        {
                            key: "private_api_key",
                            displayName: "Private API key",
                            required: true,
                            format: "text",
                            secret: true,
                        },
                    ],
                },
            ],
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.PCIForwardDefinition](../../models/components/pciforwarddefinition.md)[]                               | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |