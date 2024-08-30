# NewTransactionRequest

## Example Usage

```typescript
import { NewTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: NewTransactionRequest = {
  idempotencyKey: "bffa9ce6-7a8a-449c-889a-65bd2ee86903",
  transactionRequest: {
    amount: 1299,
    currency: "USD",
    paymentMethod: {
      method: "network-token",
      token: "<value>",
      expirationDate: "11/25",
      redirectUrl: "https://example.com/callback",
    },
    antiFraudFingerprint: "yGeBAFYgFmM=",
    asyncCapture: true,
    browserInfo: {
      javaEnabled: true,
      javascriptEnabled: true,
      language: "en-GB",
      colorDepth: 32,
      screenHeight: 1080,
      screenWidth: 1920,
      timeZoneOffset: 60,
      userDevice: "desktop",
      userAgent: "Mozilla/5.0 (darwin) AppleWebKit/537.36
    (KHTML, like Gecko) jsdom/16.7.0",
      acceptHeader: "*/*",
    },
    buyerExternalIdentifier: "user-789123",
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    cartItems: [
      {
        name: "GoPro HERO9 Camcorder",
        quantity: 1,
        unitAmount: 37999,
        discountAmount: 0,
        taxAmount: 0,
        externalIdentifier: "item-789123",
        sku: "sku-789123",
        productUrl: "https://example.com/items/gopro",
        imageUrl: "https://example.com/images/items/gopro.png",
        productType: "physical",
      },
    ],
    connectionOptions: {
      cybersourceCard: {
        merchantDefinedInformation: {
          "1": "John Doe",
          "2": "trusted",
          "99": "recurring",
        },
      },
      cybersourceKcp: {
        merchantDefinedInformation: {
          "1": "John Doe",
          "2": "trusted",
          "99": "recurring",
        },
      },
      cybersourceIdeal: {
        merchantDefinedInformation: {
          "1": "John Doe",
          "2": "trusted",
          "99": "recurring",
        },
      },
      cybersourceAntiFraud: {
        merchantDefinedData: {
          "1": "John Doe",
          "2": "trusted",
          "99": "recurring",
        },
      },
      givingblockGivingblock: {
        defaultCryptocurrency: "ETH",
      },
      forterAntiFraud: {
        cartItems: [
          {
            basicItemData: {
              type: "TANGIBLE",
            },
            deliveryDetails: {
              deliveryType: "PHYSICAL",
              deliveryMethod: "USPS - Ground Mail",
            },
            beneficiaries: [
              {
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
              },
            ],
          },
        ],
        totalDiscount: {
          couponCodeUsed: "FATHERSDAY2015",
          discountType: "COUPON",
          couponDiscountAmount: {
            amountUsd: "99.95",
            amountLocalCurrency: "105.55",
            currency: "CAD",
          },
          couponDiscountPercent: "20%",
        },
      },
      adyenCard: {
        additionalData: {
          "riskdata.operatorCode": "operatorCode,",
          "riskdata.operatorCountry": "operatorCountry",
        },
      },
      paypalPaypal: {
        additionalData: [
          {
            key: "test",
            value: "abc",
          },
        ],
      },
      paypalPaypalpaylater: {
        additionalData: [
          {
            key: "test",
            value: "abc",
          },
        ],
      },
    },
    country: "US",
    externalIdentifier: "user-789123",
    giftCards: [
      {
        number: "4123455541234561234",
        pin: "1234",
        amount: 1299,
      },
    ],
    intent: "capture",
    isSubsequentPayment: true,
    merchantInitiated: true,
    metadata: {
      "key": "value",
    },
    paymentSource: "recurring",
    previousSchemeTransactionId: "123456789012345",
    shippingDetailsId: "47da6902-5eae-4b4b-88fd-856802d627d6",
    statementDescriptor: {
      name: "GR4VY",
      description: "Card payment",
      city: "London",
      phoneNumber: "+1234567890",
      url: "www.gr4vy.com",
    },
    store: true,
    threeDSecureData: {
      cavv: "3q2+78r+ur7erb7vyv66vv8=",
      eci: "05",
      version: "<value>",
      directoryResponse: "C",
      scheme: "visa",
      authenticationResponse: "Y",
      cavvAlgorithm: "<value>",
      xid: "<value>",
    },
    paymentServiceId: "47da6902-5eae-4b4b-88fd-856802d627d6",
  },
};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           | Example                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                                                                                      | *string*                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                    | A unique key that identifies this request. Providing this header will make<br/>this an idempotent request. We recommend using V4 UUIDs, or another random<br/>string with enough entropy to avoid collisions. | bffa9ce6-7a8a-449c-889a-65bd2ee86903                                                                                                                                                                  |
| `transactionRequest`                                                                                                                                                                                  | [components.TransactionRequest](../../models/components/transactionrequest.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                    | N/A                                                                                                                                                                                                   |                                                                                                                                                                                                       |