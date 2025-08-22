"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";

function Homesale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 2,
    seconds: 0,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Headset T50RP MK3N",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&crop=center&q=80",
      originalPrice: 150,
      salePrice: 100,
      available: 25,
      itemsSold: 25,
      bgColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "JPhone 15 Pro - Pink Rose",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop&crop=center&q=80",
      originalPrice: 1600,
      salePrice: 1400,
      available: 99,
      itemsSold: 75,
      bgColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Mouse Garangs - Black",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop&crop=center&q=80",
      originalPrice: 300,
      salePrice: 200,
      available: 100,
      itemsSold: 400,
      bgColor: "#FFFFFF",
    },
  ];

  return (
    <div className="w-full py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8 xl:py-12 2xl:py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start xs:items-center justify-between mb-3 xs:mb-4 sm:mb-6 lg:mb-8 xl:mb-10 gap-2 xs:gap-3">
          <div className="flex flex-row items-start xs:items-center gap-2 xs:gap-3 md:gap-4 w-full xs:w-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--secondary)]">
              Flash Sale Deals
            </h2>
            {/* Countdown Timer */}
            <div className="bg-yellow-400 text-black px-2 xs:px-3 py-1 xs:py-1.5 rounded-full text-xs xs:text-sm sm:text-base font-semibold whitespace-nowrap">
              {String(timeLeft.hours).padStart(2, "0")} :{" "}
              {String(timeLeft.minutes).padStart(2, "0")} :{" "}
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>

          <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full font-medium text-xs xs:text-sm sm:text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-1 xs:gap-2 whitespace-nowrap mt-2 xs:mt-0">
            <span>View All</span>
            <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="group cursor-pointer rounded-xl sm:rounded-2xl   hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-blue-300"
                style={{ backgroundColor: product.bgColor }}
              >
                {/* Image area - full width cover */}
                <div className="relative w-full overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                  {/* Heart overlay - top right over image */}
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-2 right-2 z-20 rounded-full bg-white/90 p-2 shadow-md transition-transform duration-200 hover:scale-105"
                    // Note: keep same Heart icon, moved to overlay
                  >
                    <Heart className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-black" />
                  </button>

                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-3 xs:p-4 md:p-6">
                  {/* Product Name */}
                  <h3 className="text-sm xs:text-base md:text-lg lg:text-xl font-bold text-[#1a365d] leading-tight line-clamp-2 break-words">
                    {product.name}
                  </h3>

                  {/* Pricing */}
                  <div className="mt-2 flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="text-gray-400 line-through text-xs xs:text-sm sm:text-base md:text-lg font-medium">
                      ${product.originalPrice}
                    </span>
                    <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1a365d]">
                      ${product.salePrice}
                    </span>
                  </div>

                  {/* Availability */}
                  <div className="mt-2 text-xs xs:text-sm sm:text-base text-gray-500">
                    <span>Available : </span>
                    <span className="font-bold text-green-500 text-xs xs:text-sm sm:text-base md:text-lg">
                      {product.available}
                    </span>
                  </div>

                  {/* Items Sold Badge - Pill within bar */}
                  <div className="mt-3">
                    <div className="bg-[#D9D9D9] rounded-full w-full flex items-center">
                      <div className="bg-gradient-to-r from-[#FF7C02] to-[#F4CE14] text-white px-2 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {product.itemsSold} items sold
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-2">
                    <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-2 sm:px-3 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs transition-all duration-300 transform hover:scale-105 flex items-center gap-1 shadow-lg flex-shrink-0">
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline sm:hidden md:inline">
                        Add to Cart
                      </span>
                      <span className="xs:hidden sm:inline md:hidden">
                        Cart
                      </span>
                    </button>
                    {/* Heart button was moved to the top-right overlay as requested */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Homesale;
