import { useState } from 'react';
import registerImage from '../../assets/images/register-image.jpg';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api/bookmark';

const Register = () => {
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the register function from the API service
      await register({ fullname, username, email, password });

      // On successful registration, navigate to the login page
      navigate('/login');
    } catch (error) {
      // Handle errors (e.g., display error message to the user)
      console.log(error.response);
    }
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
        <div className="w-full md:w-1/2 bg-base-100 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="input input-bordered w-full"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="input input-bordered w-full"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mb-6">
                <button className="btn btn-primary w-full">Register</button>
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
        </div>
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${registerImage})` }}
        ></div>
      </main>
    </div>
  );
};

export default Register;
