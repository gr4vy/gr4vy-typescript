# Spec

The report specification.


## Supported Types

### `components.AccountsReceivablesReportSpec`

```typescript
const value: components.AccountsReceivablesReportSpec = {
  params: {
    "filters": {
      "timestamp": {
        "end": "2024-05-31T23:59:59Z",
        "start": "2024-05-01T00:00:00Z",
      },
    },
  },
};
```

### `components.DetailedSettlementReportSpec`

```typescript
const value: components.DetailedSettlementReportSpec = {
  params: {
    "filters": {
      "ingested_at": {
        "end": "day_end",
        "start": "day_start",
      },
    },
  },
};
```

### `components.TransactionRetriesReportSpec`

```typescript
const value: components.TransactionRetriesReportSpec = {
  params: {
    "filters": {
      "created_at": {
        "end": "2024-05-31T23:59:59Z",
        "start": "2024-05-01T00:00:00Z",
      },
    },
  },
};
```

### `components.TransactionsReportSpec`

```typescript
const value: components.TransactionsReportSpec = {
  params: {
    "fields": [
      "id",
      "status",
    ],
    "filters": {
      "status": [
        "succeeded",
      ],
    },
  },
};
```

