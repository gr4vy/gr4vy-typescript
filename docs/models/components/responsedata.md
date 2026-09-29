# ResponseData

The 3DS data used for this transaction. To see full details about the 3DS calls please use our transaction events API.


## Supported Types

### `components.ThreeDSecureDataV1`

```typescript
const value: components.ThreeDSecureDataV1 = {
  cavv: "3q2+78r+ur7erb7vyv66vv8=",
  eci: "05",
  version: "2.1.0",
  directoryResponse: "C",
  authenticationResponse: "Y",
  cavvAlgorithm: "A",
  xid: "12345",
};
```

### `components.ThreeDSecureV2`

```typescript
const value: components.ThreeDSecureV2 = {
  version: "<value>",
};
```

