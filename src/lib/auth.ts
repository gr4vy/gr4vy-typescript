import keyto from "@trust/keyto";
import jwt from "jsonwebtoken";
import { jwkThumbprintByEncoding } from "jwk-thumbprint";
import { v4 as uuid } from "uuid";
import { Security } from "../models/components";
// import snakeCaseKeys from 'snakecase-keys'
// import { CartItem } from '../model/cartItem'

export const withBearerToken = async ({
  privateKey,
  scopes = ["*.read", "*.write"],
  expiresIn = "30s",
}: {
  privateKey: string;
  scopes?: string[];
  expiresIn?: string;
}): Promise<Security> => {
  const bearerAuth = await getToken({ privateKey, scopes, expiresIn })
  console.log(bearerAuth)
  return { bearerAuth }
};

export const getBearerToken = async ({
  privateKey,
  scopes = ["*.read", "*.write"],
  expiresIn = "30s",
}: {
  privateKey: string;
  scopes?: string[];
  expiresIn?: string;
}): Promise<string> => {
  return getToken({ privateKey, scopes, expiresIn });
};

const getToken = async ({
  privateKey,
  scopes = ["*.read", "*.write"],
  expiresIn = "30s",
}: // embedParams?: EmbedParams,
// checkoutSessionId?: string
{
  privateKey: string;
  scopes?: string[];
  expiresIn?: string;
}): Promise<string> => {
  const jwk = keyto.from(privateKey, "pem").toJwk("private") as JsonWebKey;
  const keyid = jwkThumbprintByEncoding(jwk, "SHA-256", "base64url");
  const claims = { scopes };

  // if (checkoutSessionId) {
  //     claims['checkout_session_id'] = checkoutSessionId
  // }

  // if (scopes.includes(JWTScope.Embed) && embedParams) {
  // const connOptions =
  //     embedParams.connectionOptions || embedParams['connection_options']
  // claims['embed'] = snakeCaseKeys(embedParams, { exclude: ['metadata'] })
  // claims['embed']['connection_options'] = connOptions

  return jwt.sign(claims, privateKey, {
    algorithm: "ES512",
    keyid,
    jwtid: uuid(),
    expiresIn,
    notBefore: "0s",
    issuer: "Gr4vy Node SDK",
  });
};

export type EmbedParams = {
  amount: number;
  currency: string;
  buyerId?: string;
  buyerExternalIdentifier?: string;
  metadata?: Record<string, string>;
  connectionOptions?: Record<string, any>;
  // cartItems?: Array<CartItem>
  merchantAccountId?: string;
};
