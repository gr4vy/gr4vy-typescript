#!/usr/bin/env bash

set -e

npm install
npm run build

# Update code samples to use the global syntax
if [[ "$OSTYPE" == "darwin"* ]]; then
    find . -type f -name '*.md' | xargs sed -i '' 's/bearerAuth: process.env\["GR4VY_BEARER_AUTH"\] ?? "",/server: "sandbox",\n  id: "example",\n  bearerAuth: withToken({\n    privateKey: fs.readFileSync("private_key.pem", "utf8"),\n  }),/g'
    find . -type f -name '*.md' | xargs sed -i '' 's/import { Gr4vyCore } from "@gr4vy\/sdk\/core\.js";/import { Gr4vyCore } from "@gr4vy\/sdk\/core\.js";\nimport { withToken } from "@gr4vy\/sdk\/lib\/auth\.js";/g'
else
    find . -type f -name '*.md' | xargs sed -i 's/bearerAuth: process.env\["GR4VY_BEARER_AUTH"\] ?? "",/server: "sandbox",\n  id: "example",\n  bearerAuth: withToken({\n    privateKey: fs.readFileSync("private_key.pem", "utf8"),\n  }),/g'
    find . -type f -name '*.md' | xargs sed -i 's/import { Gr4vyCore } from "@gr4vy\/sdk\/core\.js";/import { Gr4vyCore } from "@gr4vy\/sdk\/core\.js";\nimport { withToken } from "@gr4vy\/sdk\/lib\/auth\.js";/g'
fi

