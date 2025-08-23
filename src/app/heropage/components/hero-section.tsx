"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused] = useState(false);

  // Array of images for the carousel (original images)
  const images = [
    {
      src: "/assets/images/img1.png",
      alt: "Product Image 1",
      fallback:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
      alt: "Product Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=600&fit=crop",
      alt: "Product Image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=600&fit=crop",
      alt: "Product Image 4",
    },
    {
      src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
      alt: "Product Image 5",
    },
  ];

  // Auto-rotate carousel every 5 seconds (pause on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentImage = images[currentSlide];

  return (
    <div className="w-full font-roboto">
      {/* Simple Image Carousel */}
      <div className="relative max-w-[1440px] h-[400px] sm:h-[500px]  overflow-hidden rounded-2xl mx-auto">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-1000 ease-out"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-20 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-20 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-blue-500"
                  : "w-3 h-3 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons - Sign In & Sign Up together, Donate separate */}
      <div className="flex flex-col sm:flex-row justify-between max-w-7xl mx-auto items-center gap-4 px-4 py-8 sm:py-12">
        {/* Sign In & Sign Up Group */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Sign In
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-full transition-all duration-300 hover:scale-105">
            Sign Up
          </button>
        </div>

        {/* Donate Button - Separate */}
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
          <span>$</span>
          Donate
        </button>
      </div>
    </div>
  );
}

export default Herosection;
