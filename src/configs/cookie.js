import dotenv from 'dotenv';

dotenv.config();

export const cookieConfig = {
  auth: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7, // Token expiration time * 1 week
  },
};
