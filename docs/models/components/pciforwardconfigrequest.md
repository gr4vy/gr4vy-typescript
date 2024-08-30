# PCIForwardConfigRequest

Request body to create a Vault Forward configuration.

## Example Usage

```typescript
import { PCIForwardConfigRequest } from "@gr4vy/sdk/models/components";

let value: PCIForwardConfigRequest = {
    definitionId: "amadeus",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `definitionId`                                       | *string*                                             | :heavy_check_mark:                                   | The ID of the Vault Forward definition to configure. | amadeus                                              |