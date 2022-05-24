"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomJwtTokenData = exports.customJwtHandler = void 0;
const middleware_1 = __importDefault(require("./middleware"));
exports.customJwtHandler = middleware_1.default;
const get_token_1 = __importDefault(require("./get-token"));
exports.getCustomJwtTokenData = get_token_1.default;
// const app = express()
// const port = 3000
// const config = {
//   customSecret: 'this-is-the-secret',
//   auth0Domain: 'cammy-staging.auth0.com',
//   auth0Audience: 'minicammy-staging.goscript.com/api',
//   // to generate token
//   clientId: 'pXJsgIQKTCouGEfdE9OxnBNYmW01iawS',
// }
// const middleware = customJwtHandler({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${config.auth0Domain}/.well-known/jwks.json`,
//   }),
//   audience: `https://${config.auth0Audience}`,
//   issuer: `https://${config.auth0Domain}/`,
//   algorithms: ['RS256'],
//   customSecret: config.customSecret,
// })
// app.get('/', middleware, (req, res) => {
//   res.send('Hello World!')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
//   const token = getCustomJwtTokenData({
//     customSecret: config.customSecret,
//     audience: config.auth0Audience,
//     scope: "admin-read:all admin-write:all",
//     clientId: config.clientId,
//   });
//   console.log(token);
// })
//# sourceMappingURL=index.js.map