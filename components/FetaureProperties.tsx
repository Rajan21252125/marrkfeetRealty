import { properties } from "../constant/propertyData";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  return (
    <section className="pt-12 my-10">
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-6">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
    </section>
  );
};

export default FeaturedProperties;
