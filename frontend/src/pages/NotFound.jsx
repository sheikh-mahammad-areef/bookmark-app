import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <p className="text-2xl mt-4">Page Not Found</p>
          <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
          
        </div>
      </div>
    );
  };
  
  export default NotFound;