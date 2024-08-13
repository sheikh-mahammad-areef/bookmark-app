import express from 'express';
import {
  getBookmarks,
  getBookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from '../controllers/bookmarkController.js';
import {
  authenticateToken,
  authenticateAdminToken,
} from '../middlewares/authMiddleware.js';
const router = express.Router();

router.route('/').get(authenticateAdminToken, getBookmarks);
router.route('/:id').get(getBookmark);
router.route('/').post(createBookmark);
router.route('/:id').put(updateBookmark);
router.route('/:id').delete(deleteBookmark);

// Export the router
export default router;
