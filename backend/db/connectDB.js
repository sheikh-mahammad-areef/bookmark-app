import mongoose from 'mongoose';
import { databaseConfig } from '../configs/database.js';

// Connect to the default  MongoDB
export const connectDefaultDB = async () => {
  try {
    await mongoose.connect(databaseConfig.mongo_base.uri, {
      useNewUrlParser: databaseConfig.mongo_base.useNewUrlParser,
      useUnifiedTopology: databaseConfig.mongo_base.useUnifiedTopology,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure , 0 for success
  }
};
