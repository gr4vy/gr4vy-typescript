# PazeSessionRequest

## Example Usage

```typescript
import { PazeSessionRequest } from "@gr4vy/sdk/models/components";

let value: PazeSessionRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `source`                                                                    | [components.Source](../../models/components/source.md)                      | :heavy_minus_sign:                                                          | The platform that the Paze session is being created for. Defaults to `web`. | web                                                                         |
| `domainName`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | The domain on which Paze is being loaded. Required when `source` is `web`.  | example.com                                                                 |