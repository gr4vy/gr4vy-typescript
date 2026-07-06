# ApiRoutersApiKeyPairsSchemasCreator

## Example Usage

```typescript
import { ApiRoutersApiKeyPairsSchemasCreator } from "@gr4vy/sdk/models/components";

let value: ApiRoutersApiKeyPairsSchemasCreator = {
  id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  name: "John Doe",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The ID of the user or API key pair that created the API key pair.                                         | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                      |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The name of the user or API key pair that created the API key pair.                                       | John Doe                                                                                                  |
| `emailAddress`                                                                                            | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The email address of the user that created the API key pair, when it was created by a dashboard user.     | john.doe@example.com                                                                                      |
| `thumbprint`                                                                                              | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The thumbprint of the API key pair that created the API key pair, when it was created by another API key. | 6zsbrjs0Cp4M4Ebz8sfHqUKGiG9Sd0lF2sfKp5-w-nk                                                               |