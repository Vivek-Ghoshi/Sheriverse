import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-4xl mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg text-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
