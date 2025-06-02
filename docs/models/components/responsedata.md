# ResponseData

The 3DS data sent to the payment service for this transaction. This will only be populated if external 3DS data was passed in directly as part of the transaction API call, or if our 3DS server returned a status code of `Y` or `A`. In case of a failure to authenticate (status `N`, `R`, or `U`) this field will not be populated. To see full details about the 3DS calls please use our transaction events API.


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

