import bcrypt from 'bcrypt';
import User from '../models/user.js';
import Bookmark from '../models/Bookmark.js';
import { generateToken } from '../utils/jwtUtils.js';
import { cookieConfig } from '../configs/cookie.js';

// @desc    user register
// @route   POST /api/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { fullname, username, email, password, avatar, role } = req.body;
    // hashing the password
    const hash_password = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      username,
      email,
      password: hash_password,
      avatar,
      role,
    });
    const user = await newUser.save();
    res.status(201).json({
      message: 'Registered',
      user: { ...user._doc, password: undefined },
    });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', err: err });
  }
};

// @desc    user login
// @route   POST /api/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'email id does not exits' });
    }

    //check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    //generate the cookie token  and send it the user

    const token = generateToken({ user_id: user.id, user_role: user.role });

    // create user object without password
    // const userObj = user.toObject();
    // delete userObj.password;

    res
      .cookie('token', token, {
        httpOnly: cookieConfig.auth.httpOnly,
        secure: cookieConfig.auth.secure,
        maxAge: cookieConfig.auth.maxAge,
      })
      .status(200)
      .json({
        user: { ...user._doc, password: undefined },
        message: 'login successfull',
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// @desc    user logout
// @route   POST /api/logout
// @access  Public
export const logout = async (req, res) => {
  try {
    res.clearCookie('token').status(200).json({ message: 'loged out' });
  } catch (err) {
    res.status(500).json({ message: 'logout failed' });
  }
};
