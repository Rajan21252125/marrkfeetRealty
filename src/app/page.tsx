import React from 'react';
import Navbar from '../../components/Navbar';
import Caraousel from '../../components/Caraousel';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Caraousel />
      <div className="container mx-auto px-6 py-16 flex flex-col xl:px-60 gap-4 mt-10 lg:flex-row items-center lg:justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900">
            Sotheby’s International Realty, the one for an exceptional home and life.
          </h2>
          <div className="w-12 border-b-2 border-yellow-500 my-4"></div>
          <p className="text-gray-600 text-lg">
            Built on centuries of tradition and dedicated to innovating the luxury real estate industry,
            Sotheby’s International Realty offers transformative experiences through a global network of exceptional agents.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
            width={600}
            height={400}
            alt="Luxury Home"
            className="w-full h-96 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
