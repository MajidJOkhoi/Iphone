import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Wifi,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#388fcb] text-white">
      {/* Top Bar */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>info@abc.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>+123 456 789</span>
          </div>
        </div>

        <div className="flex space-x-6">
          <Link to="#" className="hover:text-gray-200">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-gray-200">
            Terms and Conditions
          </Link>
        </div>
      </div>


       <div className=" rounded-t-3xl  flex justify-between items-center py-4 px-4 bg-[#9eccea]">

       </div>

  
    </header>
  );
};

export default Header;
