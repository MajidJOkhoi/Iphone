import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  MoveDown,
  MoveRight,
  Mail,
  Youtube,
  Wifi,
} from "lucide-react";
import iphone from "../assets/iphone.png";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import MobileStock from "./MobileStock";
import reactangle from "../assets/Rectangle.png";
import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import vector3 from "../assets/Vector3.png";
import vector4 from "../assets/Vector.png";
import logo from "../assets/logo.png";

const Home = () => {
  const [deviceType, setDeviceType] = useState("Mobile Phones");
  const deviceTypes = ["Mobile", "Tablets", "Watches"];

  useEffect(() => {
    const interval = setInterval(() => {
      setDeviceType((prev) => {
        const currentIndex = deviceTypes.indexOf(prev);
        return deviceTypes[(currentIndex + 1) % deviceTypes.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [deviceTypes]);

  return (
    <>
      <section className="relative border-b-2 border-gray-100 rounded-b-xl py-2 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-[900px] h-[800px] opacity-40 rounded-[50%_50%_30%_70%] rotate-[20deg]"
            style={{
              backgroundImage: `url(${vector1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              top: "-10%",
              left: "48%",
              zIndex: 0,
            }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          ></motion.div>

          <motion.div
            className="absolute w-[500px] h-[500px] opacity-10 rounded-[70%_30%_50%_50%] rotate-[-30deg]"
            style={{
              backgroundImage: `url(${vector2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              top: "10%",
              left: "55%",
              zIndex: 0,
            }}
            animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          ></motion.div>

          <motion.div
            className="absolute w-[400px] h-[400px] opacity-10 rounded-[50%_50%_20%_80%] rotate-[60deg]"
            style={{
              backgroundImage: `url(${vector3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              top: "20%",
              left: "55%",
              zIndex: 0,
            }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
          ></motion.div>

          <motion.div
            className="absolute w-[400px] h-[400px] opacity-35 rounded-[70%_50%_70%_60%] rotate-[-50deg]"
            style={{
              backgroundImage: `url(${vector4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              top: "15%",
              left: "60%",
              zIndex: 0,
            }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 12 }}
          ></motion.div>
        </div>

        <div className=" mx-auto flex justify-center items-center px-4 mb-2">
          <nav className="hidden md:flex space-x-8 text-black mt-8 text-xl font-semibold">
            <Link to="/" className="relative group">
              Home
              <span className="absolute bottom-0 top-8 left-0 h-[4px] w-0 bg-[#8cc78a] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about-us" className="relative group">
              About Us
              <span className="absolute bottom-0 top-8 left-0 h-[4px] w-0 bg-[#8cc78a] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/wholesale" className="relative group">
              Wholesale
              <span className="absolute bottom-0 top-8 left-0 h-[4px] w-0 bg-[#8cc78a] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="rounded-t-3xl  px-4 flex justify-center items-center">
              <Link to="/logo" className="font-bold">
                <img src={logo} className="relative -top-5 h-16  " />
              </Link>
              <Wifi
                size={24}
                className="animate-pulse relative -top-5 -left-6 text-gray-700"
              />
            </div>
            <Link to="/service" className="relative group">
              Service
              <span className="absolute bottom-0 top-8 left-0 h-[4px] w-0 bg-[#8cc78a] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/news" className="relative group">
              News
              <span className="absolute bottom-0 top-8 left-0 h-[4px] w-0 bg-[#8cc78a] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/how-it-works" className="relative group">
              How it Works
              <span className="absolute bottom-0 left-0 top-8 h-[4px] w-0 bg-[#8cc78a] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-[#333333]">
              Largest <span className="text-[#388fcb]">Wholesalers</span> <br />{" "}
              of
              <span className="relative z-60  ml-8 mt-5 text-5xl">
                <motion.span
                  className="absolute top-5 inset-0 p-8"
                  style={{
                    backgroundImage: `url(${reactangle})`,
                    borderRadius: "50px 50px 20px 50px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 8 }}
                ></motion.span>

                <motion.span
                  className="text-[#388fcb] ml-4"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  {deviceType}
                </motion.span>
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Supply that meets Demand. Get the best wholesale prices of used
              and refurbished Mobile Stocks.
            </p>

            <Button
              variant="primary"
              className="rounded-full text-blue-500 text-sm py-3"
            >
              Learn More <MoveRight size={14} className="ml-4 font-bold" />
            </Button>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-4 relative">
              <Mail className="absolute left-3 mr-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />

              <Button
                variant="primary"
                className="rounded-full text-lg bg-[#7cc140] text-white px-10 py-7 transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#7cc140] hover:outline hover:outline-2 hover:outline-[#7cc140]"
              >
                Subscribe <MoveRight size={20} className="ml-2 font-extrabold " />
              </Button>

              <Button
                variant="secondary"
                className="rounded-full text-lg bg-[#388fcb] text-white px-10 py-7  transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#388fcb] hover:outline hover:outline-2 hover:outline-[#388fcb]"
              >
                <MoveDown size={20} className="mr-2 font-bold  " /> Stock List
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8">
              <div className="bg-gradient-to-r from-[#7cc140] to-[#388fcb] p-2 rounded-full cursor-pointer">
                <Instagram
                  size={24}
                  className="text-white p-1 rounded-full shadow-inner shadow-white"
                />
              </div>
              <div className="bg-gradient-to-r from-[#7cc140] to-[#388fcb] p-2 rounded-full cursor-pointer">
                <Linkedin
                  size={24}
                  className="text-white p-1 rounded-full shadow-inner shadow-white"
                />
              </div>
              <div className="bg-gradient-to-r from-[#7cc140] to-[#388fcb] p-2 rounded-full cursor-pointer">
                <Twitter
                  size={24}
                  className="text-white p-1 rounded-full shadow-inner shadow-white"
                />
              </div>
              <div className="bg-gradient-to-r from-[#7cc140] to-[#388fcb] p-2 rounded-full cursor-pointer">
                <Facebook
                  size={24}
                  className="text-white p-1 shadow-inner shadow-white rounded-full"
                />
              </div>
              <div className="bg-gradient-to-r from-[#7cc140] to-[#388fcb] p-2 rounded-full cursor-pointer">
                <Youtube
                  size={24}
                  className="text-white p-1 rounded-full shadow-inner shadow-white"
                />
              </div>

              <p className="text-lg font-bold text-[#388fcb]">
                <span className="text-[#7cc140]">400k</span> people Registered
              </p>
            </div>
          </div>

          {/* Mobile Phone Image Section */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative z-10">
            <motion.img
              src={iphone}
              alt="Mobile Phone"
              className="mx-auto "
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-[#7cc140] to-[#388fcb] p-2 rounded-r-xl h-[15px] w-[600px] mt-28"></div>
        <div className="relative bg-gradient-to-r from-[#388fcb] to-[#7cc140] p-2 rounded-r-xl h-[15px] w-[800px] mt-4"></div>
        <div className=" rounded-b-xl py-16 ">
          <ImageCarousel />
        </div>
      </section>

      <MobileStock />
    </>
  );
};

export default Home;
