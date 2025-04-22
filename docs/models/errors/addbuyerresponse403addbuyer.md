# AddBuyerResponse403AddBuyer

The credentials were invalid or the caller did not have permission to act on the resource.


## Supported Types

### `errors.Error403`

```typescript
const value: errors.Error403 = {
  details: [
    {
      location: "query",
      pointer: "<value>",
      message: "Unknown ISO 4217 currency code: USX",
      type: "value_error",
    },
  ],
};
```

### `errors.Error403Forbidden`

```typescript
const value: errors.Error403Forbidden = {
  message: "Request failed validation",
  details: [
    {
      location: "query",
      pointer: "<value>",
      message: "Unknown ISO 4217 currency code: USX",
      type: "value_error",
    },
  ],
};
```

### `errors.Error403Active`

```typescript
const value: errors.Error403Active = {
  details: [
    {
      location: "unknown",
      pointer: "<value>",
      message: "Unknown ISO 4217 currency code: USX",
      type: "value_error",
    },
  ],
};
```

