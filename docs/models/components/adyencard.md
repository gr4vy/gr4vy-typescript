# AdyenCard

Additional options to be passed through to Adyen when processing
card transactions.


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `additionalData`                                                                            | Record<string, *string*>                                                                    | :heavy_minus_sign:                                                                          | A key-value object representing additional data to be passed<br/>to Adyen.                  | {<br/>"riskdata.operatorCode": "operatorCode,",<br/>"riskdata.operatorCountry": "operatorCountry"<br/>} |