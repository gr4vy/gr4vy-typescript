# PazeDigitalCardData

## Example Usage

```typescript
import { PazeDigitalCardData } from "@gr4vy/sdk/models/components";

let value: PazeDigitalCardData = {
  artUri:
    "https://sandbox.assets.vims.visa.com/vims/cardart/8f64614def1a41d39ea8acae4616bf6f_imageC",
  artHeight: 50,
  artWidth: 80,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `artUri`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | URI hosting the card art image.                                                           | https://sandbox.assets.vims.visa.com/vims/cardart/8f64614def1a41d39ea8acae4616bf6f_imageC |
| `artHeight`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Card art height in pixels.                                                                | 50                                                                                        |
| `artWidth`                                                                                | *number*                                                                                  | :heavy_check_mark:                                                                        | Card art width in pixels.                                                                 | 80                                                                                        |