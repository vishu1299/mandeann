"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function Bestseller() {
  const smallCards = [
    {
      id: 1,
      image: "/assets/images/bestseller/img1.png",
      title: "LAPTOP NOTEBOOK",
      subtitle: "AND MORE",
      buttonText: "Shop Now",
      bgColor: "bg-white",
    },
    {
      id: 2,
      image: "/assets/images/bestseller/img2.png",
      title: "JAPPLE SMART WATCH",
      subtitle: "SERIES 9",
      buttonText: "Shop Now",
      bgColor: "bg-white",
    },
    {
      id: 3,
      image: "/assets/images/bestseller/img3.png",
      title: "CATCH BIG DEALS ON",
      subtitle: "THE CONSOLES",
      buttonText: "Shop Now",
      bgColor: "bg-white",
    },
    {
      id: 4,
      image: "/assets/images/bestseller/img4.png",
      title: "ACTION CAMERAS",
      subtitle: "WITH 4K HD",
      buttonText: "Shop Now",
      bgColor: "bg-white",
    },
  ];

  const largeCard = {
    id: 5,
    image: "/assets/images/bestseller/img5.png",
    badge: "New Arrivals",
    title: "Make Your Life",
    subtitle: "Easier & Stylish",
    buttonText: "Buy Now",
    bgColor: "bg-gradient-to-br from-cyan-100 to-cyan-200",
  };

  return (
    <div className="w-full  py-8 sm:py-12 lg:py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 lg:mb-10 gap-3 sm:gap-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--secondary)]">
            Best Seller by Category
          </h2>
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-1 sm:gap-2">
            <span>View All</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Side - 4 Small Cards in 2x2 Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {smallCards.map((card) => (
                <div
                  key={card.id}
                  className={`${card.bgColor} rounded-2xl p-4 sm:p-6 border border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer `}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Card Image */}
                    <div className="flex-shrink-0 bg-white">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 640px) 64px, 80px"
                        />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 space-y-2 sm:space-y-3">
                      {/* Title */}
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">
                          {card.subtitle}
                        </p>
                      </div>

                      {/* Shop Now Button */}
                      <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-1 sm:gap-2">
                        <span>{card.buttonText}</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Large Card */}
          <div className="lg:w-96 xl:w-[420px]">
            <div
              className={`${largeCard.bgColor} rounded-2xl p-6 sm:p-8 border border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer h-full relative`}
            >
              {/* Badge - Top Right */}
              <div className="absolute top-4 right-6">
                <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                  {largeCard.badge}
                </span>
              </div>

              <div className="flex flex-col h-full justify-center">
                {/* Content */}
                <div className="flex-1">
                  {/* Mobile Design - Vertical Stack */}
                  <div className="flex flex-col items-center text-center space-y-3 sm:hidden">
                    {/* Large Card Image */}
                    <div className="relative">
                      <div className="relative w-24 h-24">
                        <Image
                          src={largeCard.image}
                          alt={largeCard.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                          sizes="96px"
                        />
                      </div>
                    </div>
                    {/* Text Content */}
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 leading-tight">
                          {largeCard.title}
                        </h3>
                        <p className="text-lg font-bold text-gray-800 leading-tight">
                          {largeCard.subtitle}
                        </p>
                      </div>

                      {/* Buy Now Button */}
                      <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                        <span>{largeCard.buttonText}</span>
                      </button>
                    </div>
                  </div>

                  {/* Desktop Design - Original Layout (sm and up) */}
                  <div className="hidden sm:flex items-center gap-4 md:gap-6">
                    {/* Large Card Image */}
                    <div className="relative">
                      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                        <Image
                          src={largeCard.image}
                          alt={largeCard.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                        />
                      </div>
                    </div>
                    {/* Text Content */}
                    <div className="flex-1 space-y-3 md:space-y-4 absolute bottom-14 md:bottom-16 lg:bottom-18 right-3">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                          {largeCard.title}
                        </h3>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                          {largeCard.subtitle}
                        </p>
                      </div>

                      {/* Buy Now Button */}
                      <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-3 py-3 rounded-2xl font-medium text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 float-end">
                        <span>{largeCard.buttonText}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestseller;
