import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "../assets/Iphone 14 pro 2.png";
import vector from '../assets/Vector2.png';

export default function MobileStock() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      name: "iPhone 14 Pro Max",
      description: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: img,
    },
    {
      name: "Samsung Galaxy S23 Ultra",
      description: "Samsung Galaxy S23 Ultra 512GB Phantom Black",
      image: img,
    },
    {
      name: "Google Pixel 7 Pro",
      description: "Google Pixel 7 Pro 128GB Obsidian",
      image: img,
    },
    {
      name: "OnePlus 11",
      description: "OnePlus 11 256GB Eternal Green",
      image: img,
    },
    {
      name: "Xiaomi Mi 13",
      description: "Xiaomi Mi 13 256GB Ceramic Black",
      image: img,
    },
    {
      name: "Sony Xperia 1 IV",
      description: "Sony Xperia 1 IV 512GB Frosted Black",
      image: img,
    },
    {
      name: "Huawei Mate 50 Pro",
      description: "Huawei Mate 50 Pro 256GB Silver",
      image: img,
    },
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="flex flex-col items-center px-4 py-12 bg-gray-50 relative">
      
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-4xl font-bold inline-block p-2 rounded-full relative text-gradient">
          <span className="relative z-20 text-3xl mr-4">
            <motion.span
              className="absolute -top-3 inset-0 p-8 rounded-[70%_50%_70%_60%] opacity-80"
              style={{
                backgroundImage: `url(${vector})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
            ></motion.span>
            Mobile
          </span>
          Stock
        </h1>
        <p className="mt-4 text-gray-600 text-2xl font-semibold">
          We stay up to date with the latest technology trends and offer innovative solutions that help <br />
          you stay ahead in competition.
        </p>
      </div>

      {/* Carousel Component */}
      <div className="relative max-w-[1600px] w-full overflow-hidden">
        <motion.div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
          animate={{ x: `-${currentIndex * (100 / itemsPerSlide)}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/4 p-2"
              style={{ minWidth: `${100 / itemsPerSlide}%` }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="border-4 border-t-green-400 border-l-[#388fcb] border-b-[#388fcb] border-r-[#7cc140] bg-[#f2fbff] rounded-3xl shadow-md hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 mb-4 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

   
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <button
          onClick={handleNext}
          className="relative right-12  transform -translate-y-1/2 border-2 border-green-500  text-green-500 rounded-full p-3 shadow-lg transition"
        >
          <FaChevronRight size={20} />
        </button>
      <button
          onClick={handlePrev}
          className="relative left-14 -top-12 transform -translate-y-1/2 border-2 border-green-500  text-green-500 rounded-full p-3 shadow-lg  transition"
        >
          <FaChevronLeft size={20} />
        </button>
    </div>
  );
}
