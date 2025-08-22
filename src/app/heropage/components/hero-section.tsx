"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused] = useState(false);

  // Array of images for the carousel
  const images = [
    {
      src: "/assets/images/img1.png",
      alt: "Product Image 1",
      fallback:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      title: "Discover Amazing Products",
      description:
        "Get the best deals on electronics, gadgets, and more. Limited time offers available now.",
      buttonText: "Shop Now",
    },
    {
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
      alt: "Product Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=600&fit=crop",
      alt: "Product Image 3",
      // fallback:
      //   "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=600&fit=crop",
      // title: "Gaming Collection",
      // description:
      //   "Level up your gaming experience with our latest gaming gear and accessories.",
      // buttonText: "Game On",
    },
    {
      src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=600&fit=crop",
      alt: "Product Image 4",
      // fallback:
      //   "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=600&fit=crop",
      // title: "Tech Essentials",
      // description:
      //   "Must-have technology products for your daily life and work.",
      // buttonText: "Discover",
    },
    {
      src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
      alt: "Product Image 5",
      // fallback:
      //   "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
      // title: "Special Offers",
      // description:
      //   "Don't miss out on our exclusive deals and limited-time offers.",
      // buttonText: "Get Deals",
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

  return (
    <div className="w-full  font-roboto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px] animate-in fade-in duration-1000">
          {/* Main Carousel - Left Side */}
          <div className="lg:col-span-8 relative group">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              {/* All Images with Stacked Animation */}
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

                  {/* Animated Overlay Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-1000 ease-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              ))}

              {/* Navigation Arrows with Enhanced Animation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-[var(--primary)] rounded-full flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-xl z-20 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 text-[var(--secondary)] hover:text-white transition-all duration-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-[var(--primary)] rounded-full flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-xl z-20 opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 text-[var(--secondary)] hover:text-white transition-all duration-300" />
              </button>

              {/* Animated Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative transition-all duration-500 ease-out hover:scale-125 ${
                      index === currentSlide
                        ? "w-8 h-3 bg-[var(--primary)] rounded-full shadow-lg shadow-[var(--primary)]/30"
                        : "w-3 h-3 bg-white/60 hover:bg-[var(--primary)]/70 rounded-full"
                    }`}
                  >
                    {/* Animated Progress Bar for Active Dot */}
                    {index === currentSlide && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] rounded-full">
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Two Animated Images */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Top Right Image with Floating Animation */}
            <div className="relative group flex-1 animate-in slide-in-from-right duration-1000 delay-300">
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ">
                <Image
                  src="/assets/images/img2.png"
                  alt="Featured Product 1"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--primary)]/50 rounded-2xl transition-all duration-300" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>

            {/* Bottom Right Image with Bounce Animation */}
            <div className="relative group flex-1 animate-in slide-in-from-right duration-1000 delay-500">
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/assets/images/img3.png"
                  alt="Featured Product 2"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--primary)]/50 rounded-2xl transition-all duration-300" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Progress Animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}

export default Herosection;
