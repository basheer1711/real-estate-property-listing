import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties.json";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return <h1 className="text-center mt-10">Property Not Found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <button
        onClick={() => navigate(-1)}
        className="bg-gray-200 px-4 py-2 rounded mb-6"
      >
        ← Back
      </button>

      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {property.name}
      </h1>

      <p className="text-blue-600 text-2xl font-semibold mt-3">
        ₹{property.price.toLocaleString()}
      </p>

      <p className="mt-3">
        📍 {property.location}, {property.city}
      </p>

      <div className="flex gap-6 mt-5">

        <p>🛏 {property.bedrooms} Bedrooms</p>

        <p>🛁 {property.bathrooms} Bathrooms</p>

        <p>📐 {property.area} sqft</p>

      </div>

      <h2 className="text-2xl font-bold mt-8">
        Description
      </h2>

      <p className="mt-3 text-gray-700">
        {property.description}
      </p>

      <h2 className="text-2xl font-bold mt-8">
        Amenities
      </h2>

      <ul className="list-disc ml-6 mt-3">
        {property.amenities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Contact Agent
      </button>

    </div>
  );
}

export default PropertyDetails;