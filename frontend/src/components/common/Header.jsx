import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-yellow-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MARK-HERE</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          
          <Link to="/login" className="mr-4">Login </Link>
          <Link to="/register" className="mr-4">Register </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
