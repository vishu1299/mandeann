"use client";

import React from "react";
import Image from "next/image";

export default function Mission() {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Our Mission */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--secondary)] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                egestas semper placerat. Aliquam dictum urna elit, vel fringilla
                ligula finibus at. Suspendisse gravida efficitur metus, non
                hendrerit nisl pretium non. Aenean commodo fringilla ex. Nunc eu
                massa justo.
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--secondary)] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                egestas semper placerat. Aliquam dictum urna elit, vel fringilla
                ligula finibus at. Suspendisse gravida efficitur metus, non
                hendrerit nisl pretium non. Aenean commodo fringilla ex. Nunc eu
                massa justo.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full order-first lg:order-last">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional man with tablet looking at digital interface representing our mission and vision"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Optional overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
