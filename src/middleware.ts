
import jwt from 'jsonwebtoken';
import jwks from 'jwks-rsa';

export interface ExpressJwtOptionsExtended {
  secret: jwks.SecretCallbackLong | jwks.GetVerificationKey;
  audience: string;
  issuer: string;
  algorithms: jwt.Algorithm[];
  customSecret: string;
  allowNoToken?: boolean;
}

const customJwtHandler = (options: ExpressJwtOptionsExtended) => (req, res, next) => {
  console.log(options);

  const authHeader = req.header('Authorization');
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    if (!token && options.allowNoToken) {
      return next();
    }
    jwt.verify(token, options.customSecret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'Unauthorized',
        });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }
};

export default customJwtHandler;
