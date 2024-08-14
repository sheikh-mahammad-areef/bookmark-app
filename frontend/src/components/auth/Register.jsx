import { useState, useEffect } from 'react';
import registerImage from '../../assets/images/register-image.jpg';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api/bookmark';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Register = () => {
  const [formValues, setFormValues] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.fullname) {
      errors.fullname = 'fullname is required!';
    }

    if (!values.username) {
      errors.username = 'Username is required!';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }

    return errors;
  };

  const handleSubmit = async () => {
    try {
      const response = await register(formValues);

      // Check if the response indicates a successful registration
      if (response.status === 201) {
        toast.success(response.data.message);
        navigate('/login');
      } else {
        toast.error(
          response.data.message || 'Registration failed. Please try again.',
        );
      }
    } catch (error) {
      console.log('Error:', error); // More detailed logging
      if (error.response && error.response.status === 500) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitting && Object.keys(formErrors).length === 0) {
      handleSubmit();
    } else {
      setIsSubmitting(false);
    }
  }, [formErrors]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-4">
        <Link to="/" className="btn btn-outline btn-primary">
          <FaArrowLeft className="mr-2" /> {/* Add margin if needed */}
          Back to Home
        </Link>
      </div>

      <main className="flex flex-grow">
        <motion.div
          className="w-full md:w-1/2 bg-base-100 flex items-center justify-center p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-md">
            {/* display the values  */}
            <pre className="text-yellow-700">
              {JSON.stringify(formValues, undefined, 2)}
            </pre>
            <div className="divider"></div>

            <h2 className="text-3xl font-bold mb-6">Register</h2>

            <form onSubmit={handleFormSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your fullname"
                  className={`input input-bordered w-full ${
                    formErrors.fullname ? 'input-error' : ''
                  }`}
                  value={formValues.fullname}
                  onChange={handleChange}
                />
                {formErrors.fullname && (
                  <span className="text-red-500 text-sm">
                    {formErrors.fullname}
                  </span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">username</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className={`input input-bordered w-full ${
                    formErrors.username ? 'input-error' : ''
                  }`}
                  value={formValues.username}
                  onChange={handleChange}
                />
                {formErrors.username && (
                  <span className="text-red-500 text-sm">
                    {formErrors.username}
                  </span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`input input-bordered w-full ${
                    formErrors.email ? 'input-error' : ''
                  }`}
                  value={formValues.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <span className="text-red-500 text-sm">
                    {formErrors.email}
                  </span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`input input-bordered w-full ${
                    formErrors.password ? 'input-error' : ''
                  }`}
                  value={formValues.password}
                  onChange={handleChange}
                />
                {formErrors.password && (
                  <span className="text-red-500 text-sm">
                    {formErrors.password}
                  </span>
                )}
              </div>
              <div className="form-control mb-6">
                <button
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>
            <p className="text-center">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary">
                Login here
              </Link>
              .
            </p>
          </div>
        </motion.div>
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${registerImage})` }}
        ></div>
      </main>
    </div>
  );
};

export default Register;
