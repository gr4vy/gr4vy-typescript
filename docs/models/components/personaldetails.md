# PersonalDetails

Personal details are those which contribute to building up a picture
of the person as an individual, such as name, title, etc.

## Example Usage

```typescript
import { PersonalDetails } from "@gr4vy/sdk/models/components";

let value: PersonalDetails = {
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `firstName`        | *string*           | :heavy_minus_sign: | First name.        | John               |
| `lastName`         | *string*           | :heavy_minus_sign: | Last name.         | Smith              |
| `email`            | *string*           | :heavy_minus_sign: | Email address.     | john@example.com   |