import loginImage from '../../assets/images/login-image.jpg';
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';


const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Back to Home Button */}
      <div className="p-4">
      <Link to="/" className="btn btn-outline btn-primary">
        <FaArrowLeft className="mr-2" /> {/* Add margin if needed */}
        Back to Home
      </Link>
    </div>

      <main className="flex flex-grow">
        <div className="w-full md:w-1/2 bg-base-100 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
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
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mb-6">
                <button className="btn btn-primary w-full">Login</button>
              </div>
            </form>
            <p className="text-center">
              Dont have an account?{" "}
              <Link to="/register" className="link link-primary">
                Register here
              </Link>
              .
            </p>
          </div>
        </div>
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${loginImage})` }}
        ></div>
      </main>
    </div>
  );
};

export default Login;
