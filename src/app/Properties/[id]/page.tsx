export default function PropertyDetail() {
    return (
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="/property-image.jpg"
            alt="Property Image"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
            <h1 className="text-2xl font-bold">Luxury Apartment in Downtown</h1>
            <p className="text-lg font-semibold">$750,000</p>
          </div>
        </div>
  
        {/* Property Details */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold">Property Details</h2>
            <p className="mt-2">📍 123 Main Street, New York, NY</p>
            <p>🏠 Type: Apartment</p>
            <p>📏 Size: 1500 sqft</p>
            <p>🛏 3 Bedrooms | 🛁 2 Bathrooms</p>
          </div>
  
          {/* Contact Agent */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold">Contact Agent</h2>
            <p className="mt-2">John Doe</p>
            <p>📞 (123) 456-7890</p>
            <p>📧 john@example.com</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Schedule a Visit
            </button>
          </div>
        </div>
  
        {/* Image Gallery */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Image Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <img src="/room1.jpg" className="rounded-lg w-full h-32 object-cover" />
            <img src="/room2.jpg" className="rounded-lg w-full h-32 object-cover" />
            <img src="/room3.jpg" className="rounded-lg w-full h-32 object-cover" />
          </div>
        </div>
  
        {/* Google Map Embed */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Location</h2>
          <iframe
            className="w-full h-60 mt-2 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
  