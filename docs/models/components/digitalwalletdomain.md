# DigitalWalletDomain

Domain name for a digital wallet.

## Example Usage

```typescript
import { DigitalWalletDomain } from "@gr4vy/sdk/models/components";

let value: DigitalWalletDomain = {
    domainName: "example.com",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domainName`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The domain name that a digital wallet can be used on. To use a<br/>digital wallet on a website, the domain of the site is required to be<br/>in this list. | example.com                                                                                                                                        |