import express from 'express';
import { appConfig } from './src/configs/app.js';
import { databaseConfig } from './src/configs/database.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Import routes
import bookmarksRoutes from './src/routes/bookmarks.js';
import usersRoutes from './src/routes/users.js';
import categoriesRoutes from './src/routes/categories.js';
import authRoutes from './src/routes/auth.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: appConfig.CLIENT_URL,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true,
  }),
); //This is CORS-enabled for all origins!

// Use routes
app.use('/api/users', usersRoutes);
app.use('/api/bookmarks', bookmarksRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/auth', authRoutes);

// Connect to the default  MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(databaseConfig.mongo_base.uri, {
      useNewUrlParser: databaseConfig.mongo_base.useNewUrlParser,
      useUnifiedTopology: databaseConfig.mongo_base.useUnifiedTopology,
    });
    console.log('Database connected');
  } catch (error) {
    console.log('Database connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

// Start the server
const startServer = async () => {
  await connectDB();
  app.listen(appConfig.port, () =>
    console.log(`Server running on port ${appConfig.port}`),
  );
};
startServer();
