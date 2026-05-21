# PazeMaskedCard

## Example Usage

```typescript
import { PazeMaskedCard } from "@gr4vy/sdk/models/components";

let value: PazeMaskedCard = {
  panLastFour: "2121",
  paymentAccountReference: "V0010013023108318841413393850",
  panExpirationMonth: "05",
  panExpirationYear: "2032",
  paymentCardDescriptor: "Visa Hero Card",
  paymentCardType: "CREDIT",
  paymentCardBrand: "VISA",
  paymentCardNetwork: "VISA",
  digitalCardData: {
    artUri:
      "https://sandbox.assets.vims.visa.com/vims/cardart/8f64614def1a41d39ea8acae4616bf6f_imageC",
    artHeight: 50,
    artWidth: 80,
  },
  billingAddress: {
    name: "<value>",
    line1: "<value>",
    line2: "<value>",
    line3: "<value>",
    city: "Fort Armani",
    state: "Maine",
    zip: "49394",
    countryCode: "CD",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `panLastFour`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | Last four digits of the PAN.                                                            | 2121                                                                                    |
| `paymentAccountReference`                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | Payment Account Reference (PAR). A non-financial reference assigned to each unique PAN. | V0010013023108318841413393850                                                           |
| `panExpirationMonth`                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | 2-digit PAN expiration month.                                                           | 05                                                                                      |
| `panExpirationYear`                                                                     | *string*                                                                                | :heavy_check_mark:                                                                      | 4-digit PAN expiration year.                                                            | 2032                                                                                    |
| `paymentCardDescriptor`                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | Free-form string used for card or program recognition.                                  | Visa Hero Card                                                                          |
| `paymentCardType`                                                                       | [components.Paymentcardtype](../../models/components/paymentcardtype.md)                | :heavy_check_mark:                                                                      | Card type.                                                                              | CREDIT                                                                                  |
| `paymentCardBrand`                                                                      | [components.Paymentcardbrand](../../models/components/paymentcardbrand.md)              | :heavy_check_mark:                                                                      | Card brand.                                                                             | VISA                                                                                    |
| `paymentCardNetwork`                                                                    | [components.Paymentcardnetwork](../../models/components/paymentcardnetwork.md)          | :heavy_check_mark:                                                                      | Card network.                                                                           | VISA                                                                                    |
| `digitalCardData`                                                                       | [components.PazeDigitalCardData](../../models/components/pazedigitalcarddata.md)        | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `billingAddress`                                                                        | [components.PazeBillingAddress](../../models/components/pazebillingaddress.md)          | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |