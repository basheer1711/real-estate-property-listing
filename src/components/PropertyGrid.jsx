import PropertyCard from "./PropertyCard";

function PropertyGrid({ properties }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-bold mb-8">
        Featured Properties
      </h2>

      {properties.length === 0 ? (
        <p className="text-center text-gray-500">
          No properties found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default PropertyGrid;