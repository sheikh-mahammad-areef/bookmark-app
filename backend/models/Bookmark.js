import mongoose from 'mongoose';

const BookmarkSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

const Bookmark = mongoose.model('Bookmark', BookmarkSchema);

export default Bookmark;
