import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          🏡 DreamHomes
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;