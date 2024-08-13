import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, 'fullname not provided '],
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'email not provided'],
      unique: [true, 'email already exists in database!'],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password not provided'],
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ['normal', 'admin'],
      default: 'normal',
      required: [true, 'Please specify user role'],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', UserSchema);

export default User;
