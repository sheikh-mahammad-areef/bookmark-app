import { verifyToken } from '../utils/jwtUtils.js';

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Not Authenticated' });

  try {
    const decoded = verifyToken(token);

    req.user_id = decoded.user_id;
    req.user_role = decoded.user_role;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

const authenticateAdminToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Not Authenticated' });

  try {
    const decoded = verifyToken(token);

    if (decoded.user_role !== 'admin') {
      return res.status(403).json({ message: 'Not Authorized!' });
    }

    req.user_id = decoded.user_id;
    req.user_role = decoded.user_role;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export { authenticateToken, authenticateAdminToken };
