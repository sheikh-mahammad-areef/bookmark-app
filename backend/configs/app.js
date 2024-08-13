import dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
  name: process.env.APP_NAME || 'EXPRESS APP',
  port: process.env.PORT || 5000,
  client_url: process.env.CLIENT_URL || '',
};
