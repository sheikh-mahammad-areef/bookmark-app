import express from 'express';
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';

const router = express.Router();


router.route('/').get(getCategories);
router.route('/:id').get(getCategory);
router.route('/').post(createCategory);
router.route('/:id').put(updateCategory);
router.route('/:id').delete(deleteCategory);


export default router;