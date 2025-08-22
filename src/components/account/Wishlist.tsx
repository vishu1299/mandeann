"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { WishlistItem } from "./types";

export function Wishlist() {
  const wishlistItems: WishlistItem[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$299.99",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="space-y-4 xs:space-y-5 sm:space-y-6">
      <div>
        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--secondary)] mb-1 xs:mb-2">
          Wishlist
        </h3>
        <p className="text-gray-500 text-xs xs:text-sm sm:text-base">
          Items you&apos;ve saved for later
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-3 xs:gap-4 sm:gap-4 lg:gap-5 xl:gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg p-3 xs:p-4 sm:p-4 lg:p-5 hover:shadow-sm transition-shadow"
          >
            <div className="relative mb-2 xs:mb-3">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={150}
                className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 object-cover rounded-md xs:rounded-lg"
              />
              <Button
                size="sm"
                variant="outline"
                className="absolute top-1 xs:top-2 right-1 xs:right-2 p-1 xs:p-1.5 sm:p-2 bg-white/80 hover:bg-white w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
              >
                <Heart className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
              </Button>
            </div>
            <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
              <h4 className="font-medium text-[var(--secondary)] text-xs xs:text-sm sm:text-base md:text-lg line-clamp-2 leading-tight">
                {item.name}
              </h4>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-[var(--primary)]">
                {item.price}
              </p>
            </div>
            <div className="flex gap-1.5 xs:gap-2 mt-2 xs:mt-3">
              <Button
                size="sm"
                className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs xs:text-xs sm:text-sm px-2 xs:px-3 py-1.5 xs:py-2 h-7 xs:h-8 sm:h-9"
              >
                <span className="hidden xs:inline sm:hidden md:inline">
                  Add to Cart
                </span>
                <span className="xs:hidden sm:inline md:hidden">Add</span>
                <span className="sm:hidden">+</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
