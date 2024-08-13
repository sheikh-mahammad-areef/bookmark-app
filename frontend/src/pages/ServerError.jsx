import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const ServerError = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-base-200">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-error">500</h1>
          <p className="text-2xl mt-4">Internal Server Error</p>
          <p className="mt-4">
            Something went wrong on our end. Please try again later.
          </p>
          <Link to="/" className="btn btn-primary mt-6">
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServerError;
