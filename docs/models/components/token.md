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
  "0": "{",
  "1": "\"",
  "2": "s",
  "3": "i",
  "4": "g",
  "5": "n",
  "6": "a",
  "7": "t",
  "8": "u",
  "9": "r",
  "10": "e",
  "11": "\"",
  "12": ":",
  "13": "\"",
  "14": "M",
  "15": "E",
  "16": "U",
  "17": "C",
  "18": "I",
  "19": "E",
  "20": "g",
  "21": "4",
  "22": "a",
  "23": "4",
  "24": "A",
  "25": "+",
  "26": "p",
  "27": "u",
  "28": "+",
  "29": "A",
  "30": "U",
  "31": "j",
  "32": "g",
  "33": "V",
  "34": "j",
  "35": "B",
  "36": "p",
  "37": "f",
  "38": "z",
  "39": "9",
  "40": "m",
  "41": "s",
  "42": "L",
  "43": "q",
  "44": "Q",
  "45": "O",
  "46": "k",
  "47": "T",
  "48": "5",
  "49": "k",
  "50": "z",
  "51": "7",
  "52": "h",
  "53": "t",
  "54": "z",
  "55": ".",
  "56": ".",
  "57": ".",
};
```

