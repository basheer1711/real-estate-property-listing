function FilterSection({
  propertyType,
  setPropertyType,
  bedrooms,
  setBedrooms,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Property Type */}
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Independent House">Independent House</option>
          <option value="Commercial">Commercial</option>
        </select>

        {/* Bedrooms */}
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="">All Bedrooms</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </select>

        {/* Price */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="">All Prices</option>
          <option value="under50">Under ₹50 Lakhs</option>
          <option value="50to100">₹50 Lakhs - ₹1 Crore</option>
          <option value="above100">Above ₹1 Crore</option>
        </select>

        {/* Sorting */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="">Sort By</option>
          <option value="lowHigh">Price: Low to High</option>
          <option value="highLow">Price: High to Low</option>
        </select>

      </div>
    </div>
  );
}

export default FilterSection;