# InboundWebhooksRequest

## Example Usage

```typescript
import { InboundWebhooksRequest } from "@gr4vy/sdk/models/operations";

let value: InboundWebhooksRequest = {
    resource: "ps",
    payload: "zian1_7ATUeO-gRKMrCbxmJyYWludHJlZS1jYXJk",
    signature: "VKJw22zyhitK4UlofhFbktBT1esRVua1tN382mFDtrM",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `resource`                                                                               | [operations.Resource](../../models/operations/resource.md)                               | :heavy_check_mark:                                                                       | Resource type identifier to which the webhook data is related.                           | ps                                                                                       |
| `payload`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Opaque data representing the service information associated with<br/>the webhook endpoint. | zian1_7ATUeO-gRKMrCbxmJyYWludHJlZS1jYXJk                                                 |
| `signature`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Signature of the opaque data with the service information<br/>used for the webhook endpoint. | VKJw22zyhitK4UlofhFbktBT1esRVua1tN382mFDtrM                                              |