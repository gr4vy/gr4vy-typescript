# Token

The opaque token as received from the Google Pay JS library. This format may change between JS library versions.


## Supported Types

### `string`

```typescript
const value: string =
  "{\"signature\":\"MEUCIEg4a4A+pu+AUjgVjBpfz9msLqQOkT5kz7htz...";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

