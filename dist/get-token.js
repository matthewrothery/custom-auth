"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getCustomJwtTokenData = (options) => {
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
    const token = jsonwebtoken_1.default.sign(data, options.customSecret);
    return {
        access_token: token,
        scope: data.scope,
        expires_in: data.exp - data.iat,
        token_type: "Bearer",
        expiry: data.exp,
    };
};
exports.default = getCustomJwtTokenData;
//# sourceMappingURL=get-token.js.map