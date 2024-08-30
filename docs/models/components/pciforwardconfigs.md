# PCIForwardConfigs

A list of available Vault Forward configurations.

## Example Usage

```typescript
import { PCIForwardConfigs } from "@gr4vy/sdk/models/components";

let value: PCIForwardConfigs = {
    items: [
        {
            type: "vault-forward-config",
            id: "faaad066-30b4-4997-a438-242b0752d7e1",
            createdAt: new Date("2012-12-12T10:53:43+00:00"),
            updatedAt: new Date("2012-12-12T10:53:43+00:00"),
            merchantAccountId: "default",
            definitionId: "amadeus",
            displayName: "Amadeus",
            hosts: ["https://api.amadeus.com", "https://test.api.amadeus.com"],
            authentications: [
                {
                    type: "vault-forward-config-authentication",
                    id: "faaad066-30b4-4997-a438-242b0752d7e1",
                    createdAt: new Date("2012-12-12T10:53:43+00:00"),
                    updatedAt: new Date("2012-12-12T10:53:43+00:00"),
                    kind: "mle",
                    label: "My MLE",
                    displayName: "My MLE",
                    fields: [
                        {
                            key: "secret_key",
                            value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
                        },
                    ],
                    creator: {
                        id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
                        name: "John L",
                        emailAddress: "john@example.com",
                    },
                },
            ],
            creator: {
                id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
                name: "John L",
                emailAddress: "john@example.com",
            },
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
| `items`                                                                                                            | [components.PCIForwardConfig](../../models/components/pciforwardconfig.md)[]                                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |