import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Register,
  Login,
  NotFound,
  ForgotPassword,
  ServerError,
} from './pages/index';

import AuthLayout from './layouts/AuthLayout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        {/* new Auth Layout Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
