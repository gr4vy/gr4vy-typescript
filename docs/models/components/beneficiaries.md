# Beneficiaries

## Example Usage

```typescript
import { Beneficiaries } from "@gr4vy/sdk/models/components";

let value: Beneficiaries = {
    personalDetails: {
        firstName: "John",
        lastName: "Smith",
        email: "john@example.com",
    },
    address: {
        country: "US",
        address1: "235 Montgomery st.",
        address2: "Ste. 1110",
        zip: "94104",
        region: "CA",
        company: "Generic Corp. ltd.",
        city: "San Francisco",
    },
    phone: [
        {
            phone: "15557654321",
        },
    ],
    comments: {
        userCommentsToMerchant: "Please wrap with care!!",
        messageToBeneficiary: "Enjoy the gift John!",
        merchantComments: "Shipping delayed",
    },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `personalDetails`                                                                                                              | [components.PersonalDetails](../../models/components/personaldetails.md)                                                       | :heavy_check_mark:                                                                                                             | Personal details are those which contribute to building up a picture<br/>of the person as an individual, such as name, title, etc. |
| `address`                                                                                                                      | [components.TransactionRequestAddress](../../models/components/transactionrequestaddress.md)                                   | :heavy_minus_sign:                                                                                                             | Address details for the beneficiary.                                                                                           |
| `phone`                                                                                                                        | [components.Phone](../../models/components/phone.md)[]                                                                         | :heavy_minus_sign:                                                                                                             | List of all phone numbers for the beneficiary.                                                                                 |
| `comments`                                                                                                                     | [components.Comments](../../models/components/comments.md)                                                                     | :heavy_minus_sign:                                                                                                             | Comments to merchant or beneficiary written by customer.                                                                       |