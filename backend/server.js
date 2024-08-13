import express from 'express';
import { appConfig } from './configs/app.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Import routes
import bookmarksRoutes from './routes/bookmarks.js';
import usersRoutes from './routes/users.js';
import categoriesRoutes from './routes/categories.js';
import authRoutes from './routes/auth.js';
import { connectDefaultDB } from './db/connectDB.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: appConfig.client_url,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true,
  }),
); //This is CORS-enabled for all origins!

// Use routes
app.use('/api/users', usersRoutes);
app.use('/api/bookmarks', bookmarksRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/auth', authRoutes);

// Start the server
const startServer = async () => {
  await connectDefaultDB();
  app.listen(appConfig.port, () =>
    console.log(`Server running on port ${appConfig.port}`),
  );
};
startServer();
