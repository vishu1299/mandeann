"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";

function Herosearch() {
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full  py-2 sm:py-3 md:py-4 font-roboto border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
          {/* Search Bar with integrated button */}
          <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl">
            <div className="flex items-center justify-between gap-5">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full h-8 sm:h-9 md:h-10 lg:h-12 pl-3 sm:pl-4 pr-9 sm:pr-10 md:pr-12 lg:pr-14 bg-blue-50 border border-[var(--primary)] rounded-full text-xs sm:text-sm text-gray-700 placeholder-gray-400 outline-[var(--primary)] outline-4 focus:border-[var(--primary)] font-roboto transition-all duration-200"
              />
              <Button
                onClick={handleSearch}
                className=" p-6 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-full flex items-center justify-center transition-colors duration-200 "
              >
                <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                Search
              </Button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
            <Link href="/account">
              {/* Wishlist Icon with Badge */}
              <button className="relative p-1 sm:p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-[var(--primary)] text-white text-xs rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center font-medium text-[10px] sm:text-xs">
                  2
                </span>
              </button>
            </Link>

            {/* Cart Icon with Badge */}
            <Link href="/cart ">
              <button className="relative p-1 sm:p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-[var(--primary)] text-white text-xs rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center font-medium text-[10px] sm:text-xs">
                  3
                </span>
              </button>
            </Link>

            {/* User Account */}
            <>
              <Link href="/account">
                <button className="p-1 cursor-pointer sm:p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
                </button>
              </Link>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosearch;
