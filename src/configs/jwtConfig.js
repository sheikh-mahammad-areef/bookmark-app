import dotenv from 'dotenv';

dotenv.config();

export const jwtConfig = {
  secret: process.env.JWT_SECRET, // Use a strong secret key in production
  //   expiresIn: '1h', // Token expiration time
  expiresIn: 1000 * 60 * 60 * 24 * 7, // Token expiration time * 1 week
};
