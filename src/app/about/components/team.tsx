"use client";

import React from "react";
import Image from "next/image";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Abdul Mostafa",
      position: "CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      alt: "Abdul Mostafa - CEO",
    },
    {
      id: 2,
      name: "Amir Khan",
      position: "COO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      alt: "Amir Khan - COO",
    },
    {
      id: 3,
      name: "Ruben Neves",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      alt: "Ruben Neves - CTO",
    },
  ];

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--secondary)] mb-4 sm:mb-6">
            Our Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Our core team manages qommarket and its divisions to produce the
            best sales.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="text-center bg-white rounded-3xl p-4 sm:p-6 border border-blue-300   hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative w-full  mx-auto mb-6 ">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden ">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--secondary)]">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
