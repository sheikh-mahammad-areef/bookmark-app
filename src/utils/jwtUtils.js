import jwt from 'jsonwebtoken';
import { jwtConfig } from '../configs/jwtConfig.js';

export const generateToken = (payload) => {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, jwtConfig.secret);
};
