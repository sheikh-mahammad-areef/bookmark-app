import dotenv from 'dotenv';

dotenv.config();

export const databaseConfig = {
  mongo_base: {
    uri: process.env.DEFAULT_MONGO_DB_URI,
    useNewUrlParser: process.env.DEFAULT_USE_NEW_URL_PARSER === 'true',
    useUnifiedTopology: process.env.DEFAULT_USE_UNIFIED_TOPOLOGY === 'true',
  },
  mongo_catalog: {
    uri: process.env.CATALOG_MONGO_DB_URI,
    useNewUrlParser: process.env.CATALOG_USE_NEW_URL_PARSER === 'true',
    useUnifiedTopology: process.env.CATALOG_USE_UNIFIED_TOPOLOGY === 'true',
  },
};
