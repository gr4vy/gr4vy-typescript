# ThreeDSecureRequestErrorEventContext

3DS post-authentication context.


## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `url`                                     | *string*                                  | :heavy_minus_sign:                        | The URL that was called for this request. | https://3dserver.example/auth             |
| `reason`                                  | *string*                                  | :heavy_minus_sign:                        | The reason for the error.                 | TIMEOUT                                   |