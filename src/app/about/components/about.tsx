"use client";

import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full  py-8 sm:py-12 lg:py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--secondary)] mb-4">
            About The Company
          </h2>
          {/* Yellow underline */}
          <div className="w-24 sm:w-32 h-1 bg-yellow-400 mb-6 sm:mb-8"></div>

          {/* Company Description */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl">
            Qommarket is your go-to source for top-quality computers and
            electronics. We offer a wide range of products, from powerful
            laptops and desktops to the latest smartphones and smart home
            devices. Our mission is to bring the latest technology to everyone,
            with competitive prices and outstanding customer service. Shop with
            us and experience the future of technology.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full">
          <div
            className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
            onClick={handleVideoClick}
          >
            {/* Background Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center&q=80"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onEnded={handleVideoPause}
            >
              <source
                src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                type="video/mp4"
              />
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

            {/* Play/Pause Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[var(--primary)] hover:bg-[var(--primary-hover)] rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                {isPlaying ? (
                  <Pause
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white"
                    fill="currentColor"
                  />
                ) : (
                  <Play
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white ml-1"
                    fill="currentColor"
                  />
                )}
              </div>
            </div>

            {/* Hover Effect Ring */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 border-2 border-white/50 rounded-full animate-pulse"></div>
            </div>

            {/* Video Title Overlay */}
            {!isPlaying && (
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                  About Our E-commerce Platform
                </h3>
                <p className="text-white/90 text-sm sm:text-base">
                  Discover how we&apos;re revolutionizing online shopping
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
