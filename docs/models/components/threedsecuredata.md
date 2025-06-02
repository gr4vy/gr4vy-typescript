# ThreeDSecureData

Pass through 3-D Secure data to support external 3-D Secure authorisation. If using an external 3-D Secure provider, you should not pass a `redirect_url` in the `payment_method` object for a transaction.


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

### `components.ThreeDSecureDataV2`

```typescript
const value: components.ThreeDSecureDataV2 = {
  cavv: "3q2+78r+ur7erb7vyv66vv8=",
  eci: "05",
  version: "2.1.0",
  directoryResponse: "C",
  directoryTransactionId: "c4e59ceb-a382-4d6a-bc87-385d591fa09d",
};
```

