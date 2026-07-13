import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="max-w-4xl mx-auto -mt-8 px-6">
      <div className="bg-white shadow-lg rounded-xl p-4 flex items-center">

        <FaSearch className="text-gray-500 mr-3" />

        <input
          type="text"
          placeholder="Search by property name, city or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-2xl shadow-xl border border-gray-200 px-6 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>
    </div>
  );
}

export default SearchBar;