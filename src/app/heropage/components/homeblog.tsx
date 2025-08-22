"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function Homeblog() {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=500&fit=crop&crop=center&q=80",
      date: "08 June 2024",
      author: "Rodrigo",
      title: "TI gets $4.6bn in Chips Act funding",
      description:
        "Texas Instruments receives significant funding boost for semiconductor manufacturing expansion under the CHIPS Act initiative.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&crop=center&q=80",
      date: "08 June 2024",
      author: "Rodrigo",
      title: "Qindows Finally Expands FAT32 Formatting From 32GB to 2TB",
      description:
        "Microsoft finally removes the long-standing 32GB limitation for FAT32 formatting, expanding support up to 2TB drives.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=500&fit=crop&crop=center&q=80",
      date: "08 June 2024",
      author: "Rodrigo",
      title:
        "Video game performers announce strike, citing artificial intelligence...",
      description:
        "Gaming industry performers take a stand against AI implementation, raising concerns about job security and creative rights.",
    },
  ];

  return (
    <div className="w-full  py-8 sm:py-12 lg:py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row gap-y-3 items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--secondary)]">
            News Blog About Electronics
          </h2>
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-1 sm:gap-2">
            <span>View All</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48 sm:h-56 lg:h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 sm:p-6">
                {/* Date and Author */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {post.date}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400">•</span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base max-w-[18rem] sm:text-lg font-bold text-gray-800 mb-3 leading-tight line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Read More Button */}
                <button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homeblog;
