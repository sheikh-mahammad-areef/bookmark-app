import Bookmark from '../models/Bookmark.js';

// @desc    Get all bookmarks
// @route   GET /api/bookmarks
// @access  Public
export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();
    res.status(200).json(bookmarks);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get single bookmark
// @route   GET /api/bookmarks
// @access  Public
export const getBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    if (!bookmark) {
      return res.status(404).json({ message: 'Bookmark not found' });
    }
    res.status(200).json(bookmark);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a bookmark
// @route   POST /api/bookmarks
// @access  Public
export const createBookmark = async (req, res) => {
  try {
    const newBookmark = new Bookmark(req.body);
    const bookmark = await newBookmark.save();
    res.status(201).json(bookmark);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update a bookmark
// @route   PUT /api/bookmarks/:id
// @access  Public
export const updateBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(bookmark);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a bookmark
// @route   DELETE /api/bookmarks/:id
// @access  Public
export const deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Bookmark Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
