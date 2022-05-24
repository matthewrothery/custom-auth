import jwt from 'jsonwebtoken';

export interface GetCustomJwtTokenOptions {
  customSecret: string;
  sub?: string;
  scope?: string;
  audience: string;
  expiryMs?: number;
  clientId: string;
}

const getCustomJwtTokenData = (options: GetCustomJwtTokenOptions) => {
  const data = {
    iss: 'custom-authenticator',
    sub: options.sub || `${options.clientId}@clients`,
    aud: options.audience,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (options.expiryMs || (60 * 60 * 24 * 7)),
    azp: options.clientId,
    scope: options.scope || '',
    gty: 'client_credentials',
  };
  const token = jwt.sign(data, options.customSecret);

  return {
    access_token: token,
    scope: data.scope,
    expires_in: data.exp - data.iat,
    token_type: "Bearer",
    expiry: data.exp,
  };
};

export default getCustomJwtTokenData;
