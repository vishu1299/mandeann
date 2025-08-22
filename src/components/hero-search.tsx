"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, Heart, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

function Herosearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

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
          {/* Brand Logo */}
          <Link href="/">
            <div className="flex-shrink-0">
              <Image
                src="/assets/images/Mandaeanlogo.png"
                alt="Logo"
                width={190}
                height={190}
                className="h-6 sm:h-8 md:h-10 lg:h-16 w-auto"
              />
            </div>
          </Link>

          {/* Search Bar with integrated button */}
          <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
            <div className="relative">
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
                className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-full flex items-center justify-center transition-colors duration-200 p-0"
              >
                <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
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

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-700 hover:text-[var(--primary)] font-medium text-[10px] sm:text-xs md:text-sm px-1 sm:px-2 md:px-3 py-1 flex items-center bg-transparent hover:bg-[var(--primary)]/10 rounded transition-colors duration-200 focus:outline-none focus:ring-0">
                  <span className="hidden md:inline">{selectedLanguage}</span>
                  <span className="md:hidden">
                    {selectedLanguage.slice(0, 2).toUpperCase()}
                  </span>
                  <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-0.5 sm:ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg min-w-20 sm:min-w-24 focus:outline-none">
                <DropdownMenuItem
                  onClick={() => setSelectedLanguage("English")}
                  className="text-gray-700 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] cursor-pointer transition-colors duration-200 focus:outline-none focus:bg-[var(--primary)]/10 focus:text-[var(--primary)] text-xs sm:text-sm"
                >
                  English
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => setSelectedLanguage("French")}
                  className="text-gray-700 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] cursor-pointer transition-colors duration-200 focus:outline-none focus:bg-[var(--primary)]/10 focus:text-[var(--primary)] text-xs sm:text-sm"
                >
                  French
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosearch;
