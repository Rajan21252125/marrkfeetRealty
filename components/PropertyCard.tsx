import Image from "next/image";

const PropertyCard = ({ image, title, price, location, beds, baths, sqft } : PropertyCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image with Hover Effect */}
      <div className="relative w-full h-56 overflow-hidden">
        <div className="w-full h-full transition-transform duration-300 transform hover:scale-105">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>

        <div className="flex justify-between items-center my-2">
          <span className="text-orange-500 font-bold text-lg">{price}</span>
        </div>

        <div className="flex justify-between text-gray-500 text-sm">
          <span>🛏 {beds} Beds</span>
          <span>🛁 {baths} Baths</span>
          <span>📏 {sqft} sqft</span>
        </div>

        <button className="w-full cursor-pointer mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
