import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-200 text-secondary-100 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-secondary-100">📍 123 Luxury St, Beverly Hills, CA</p>
          <p className="text-secondary-100">📞 +1 234 567 890</p>
          <p className="text-secondary-100">📧 contact@realestate.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-secondary-100 hover:text-secondary-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-100 hover:text-secondary-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-100 hover:text-secondary-200">
                Properties
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-100 hover:text-secondary-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-secondary-100 hover:text-secondary-200">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-secondary-100 hover:text-secondary-200">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-secondary-100 hover:text-secondary-200">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-secondary-100 hover:text-secondary-200">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-secondary-100 mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Luxury Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
