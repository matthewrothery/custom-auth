"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const customJwtHandler = (options) => (req, res, next) => {
    console.log(options);
    const authHeader = req.header('Authorization');
    if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        if (!token && options.allowNoToken) {
            return next();
        }
        jsonwebtoken_1.default.verify(token, options.customSecret, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: 'Unauthorized',
                });
            }
            req.user = decoded;
            next();
        });
    }
    else {
        return res.status(401).send({
            message: 'Unauthorized',
        });
    }
};
exports.default = customJwtHandler;
//# sourceMappingURL=middleware.js.map