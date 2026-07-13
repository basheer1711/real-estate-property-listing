import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FilterSection from "../components/FilterSection";
import PropertyGrid from "../components/PropertyGrid";
import propertiesData from "../data/properties.json";
import { useState } from "react";
import Footer from "../components/Footer";

function Home() {
    const [properties] = useState(propertiesData);
    const [searchTerm, setSearchTerm] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [sortBy, setSortBy] = useState("");
    const filteredProperties = properties
  .filter((property) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      property.name.toLowerCase().includes(search) ||
      property.city.toLowerCase().includes(search) ||
      property.location.toLowerCase().includes(search);

    const matchesType =
      propertyType === "" || property.type === propertyType;

    const matchesBedrooms =
      bedrooms === "" ||
      (bedrooms === "4"
        ? property.bedrooms >= 4
        : property.bedrooms === Number(bedrooms));

    let matchesPrice = true;

    if (priceRange === "under50")
      matchesPrice = property.price < 5000000;

    if (priceRange === "50to100")
      matchesPrice =
        property.price >= 5000000 &&
        property.price <= 10000000;

    if (priceRange === "above100")
      matchesPrice = property.price > 10000000;

    return (
      matchesSearch &&
      matchesType &&
      matchesBedrooms &&
      matchesPrice
    );
  })
  .sort((a, b) => {
    if (sortBy === "lowHigh")
      return a.price - b.price;

    if (sortBy === "highLow")
      return b.price - a.price;

    return 0;
  });

    
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <div className="-mt-16 relative z-20 max-w-4xl mx-auto px-6">
        <SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/></div>
<div className="max-w-7xl mx-auto px-6 mt-10">

<FilterSection
  propertyType={propertyType}
  setPropertyType={setPropertyType}
  bedrooms={bedrooms}
  setBedrooms={setBedrooms}
  priceRange={priceRange}
  setPriceRange={setPriceRange}
  sortBy={sortBy}
  setSortBy={setSortBy}
/></div>
      <PropertyGrid properties={filteredProperties} />
      <Footer />
      </div>
  );
}

export default Home;