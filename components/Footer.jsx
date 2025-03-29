import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="px-6 md:px-12">
        {/* Contact Form */}
        <div className="flex flex-col gap-8 md:flex-row mx-10 lg:mx-40 ">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500"
              rows={3}
            />
            <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-400 transition">
              Send Message
            </button>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> 123 Real Estate Ave, New York, NY 10001
            </p>
            <p className="flex items-center gap-2 mt-2">
              <Phone size={16} /> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-2 mt-2">
              <Mail size={16} /> info@marrkfeetrealty.com
            </p>

            {/* Social Media Icons */}
            <h3 className="text-lg font-semibold mt-6">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-400">
                F
              </span>
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-400">
                T
              </span>
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-400">
                I
              </span>
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-400">
                L
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex justify-between mt-12 lg:mx-20 2xl:mx-8 flex-col md:flex-row gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MarrkFeet Realty</h3>
            <p>Your trusted partner in finding <br></br> the perfect property.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-400 cursor-pointer">
                Buy Property
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Property Management
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Consultation
              </li>
              <li className="hover:text-orange-400 cursor-pointer">Feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-400 cursor-pointer">Home</li>
              <li className="hover:text-orange-400 cursor-pointer">
                Properties
              </li>
              <li className="hover:text-orange-400 cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-2 bg-gray-800 rounded-l-lg border border-gray-700 focus:border-orange-500"
              />
              <button className="bg-orange-500 px-4 text-white rounded-r-lg hover:bg-orange-400 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © 2024 Marrkfeet Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
