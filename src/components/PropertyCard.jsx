import { Link } from "react-router-dom";
import { FaBed, FaBath, FaMapMarkerAlt } from "react-icons/fa";

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={property.image}
        alt={property.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {property.name}
        </h2>

        <p className="text-blue-600 font-semibold mt-1">
          {property.type}
        </p>

        <p className="text-2xl font-bold mt-3">
          ₹{property.price.toLocaleString()}
        </p>

        <div className="flex items-center mt-3 text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          {property.location}, {property.city}
        </div>

        <div className="flex justify-between mt-5 text-gray-700">

          <span className="flex items-center gap-2">
            <FaBed />
            {property.bedrooms} BHK
          </span>

          <span className="flex items-center gap-2">
            <FaBath />
            {property.bathrooms}
          </span>

          <span>{property.area} sqft</span>

        </div>

        <Link
          to={`/property/${property.id}`}
          className="block text-center mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

export default PropertyCard;