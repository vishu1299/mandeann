"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronRight,
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Category data structure
const categories = [
  {
    id: 1,
    name: "Electronics",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Tablets",
      "Headphones",
      "Cameras",
      "Smart Watches",
      "Gaming Consoles",
      "TV & Audio",
      "Accessories",
    ],
  },
  {
    id: 2,
    name: "Fashion",
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Kids' Clothing",
      "Shoes",
      "Bags & Accessories",
      "Jewelry",
      "Watches",
      "Sunglasses",
    ],
  },
  {
    id: 3,
    name: "Home & Kitchen",
    subcategories: [
      "Furniture",
      "Home Decor",
      "Kitchen Appliances",
      "Bedding",
      "Storage & Organization",
      "Lighting",
      "Garden & Outdoor",
    ],
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    subcategories: [
      "Skincare",
      "Makeup",
      "Hair Care",
      "Fragrances",
      "Personal Care",
      "Health & Wellness",
      "Beauty Tools",
    ],
  },
  {
    id: 5,
    name: "Sports & Fitness",
    subcategories: [
      "Exercise Equipment",
      "Sportswear",
      "Outdoor Recreation",
      "Team Sports",
      "Water Sports",
      "Fitness Accessories",
    ],
  },
  {
    id: 6,
    name: "Books",
    subcategories: [
      "Fiction",
      "Non-Fiction",
      "Educational",
      "Children's Books",
      "Comics & Graphic Novels",
      "E-books",
      "Audiobooks",
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close category menu when opening mobile menu
    if (!isMobileMenuOpen) {
      setIsCategoryMenuOpen(false);
    }
  };

  // Toggle category menu
  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
    setHoveredCategory(null);
    // Close mobile menu when opening category menu
    if (!isCategoryMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close category menu
  const closeCategoryMenu = () => {
    setIsCategoryMenuOpen(false);
    setHoveredCategory(null);
  };

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryMenuRef.current &&
        !categoryMenuRef.current.contains(event.target as Node)
      ) {
        setIsCategoryMenuOpen(false);
        setHoveredCategory(null);
      }
    };

    if (isCategoryMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCategoryMenuOpen]);

  // Filter categories based on search
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.subcategories.some((sub) =>
        sub.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="w-full font-sans relative">
      {/* Main Header */}
      <div className="bg-[#272727] px-2 sm:px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - All Category Button */}
          <div className="relative" ref={categoryMenuRef}>
            <button
              onClick={toggleCategoryMenu}
              className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-2 sm:px-4 lg:px-6 py-2 rounded-md flex items-center space-x-1 sm:space-x-2 font-medium text-xs sm:text-sm transition-all duration-200"
            >
              {isCategoryMenuOpen ? (
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                <Menu className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
              <span className="hidden sm:inline">All Category</span>
              <span className="sm:hidden">
                {isCategoryMenuOpen ? "Close" : "Menu"}
              </span>
            </button>

            {/* Category Dropdown Menu */}
            {isCategoryMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Shop by Category
                  </h3>

                  {/* Search Input */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search Category"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Categories List */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredCategories.map((category) => (
                    <div
                      key={category.id}
                      className="relative"
                      onMouseEnter={() => setHoveredCategory(category.id)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div
                        className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-200 ${
                          hoveredCategory === category.id
                            ? "bg-blue-50 text-[var(--primary)]"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Separate Subcategories Panel - Appears outside main menu */}
          </div>
          {/* {hoveredCategory && isCategoryMenuOpen && (
            <div className="absolute top-full left-80 mt-2 ml-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-60 overflow-hidden">
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  {categories.find((cat) => cat.id === hoveredCategory)?.name}
                </h4>
                <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                  {categories
                    .find((cat) => cat.id === hoveredCategory)
                    ?.subcategories.map((subcategory, index) => (
                      <Link
                        key={index}
                        href={`/shop?category=${encodeURIComponent(
                          categories.find((cat) => cat.id === hoveredCategory)
                            ?.name || ""
                        )}&subcategory=${encodeURIComponent(subcategory)}`}
                        onClick={closeCategoryMenu}
                        className="text-sm text-gray-600 hover:text-[var(--primary)] hover:bg-blue-50 px-3 py-2 rounded-md transition-colors duration-200 block"
                      >
                        {subcategory}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          )} */}

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-8">
            <Link
              href="/"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/about")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              About
            </Link>
            <Link
              href="/shop"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/shop")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/blogs"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/blog")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/contact")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right - Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Mobile Menu Toggle - Only visible on mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden bg-gray-600 hover:bg-gray-500 text-white p-2 rounded-md transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>

            {/* Right Side Icons */}
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
              <Link href="/account">
                {/* Wishlist Icon with Badge */}
                <button className="relative p-1 sm:p-1.5 md:p-2  rounded-full transition-colors duration-200 cursor-pointer">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-[var(--primary)] text-white text-xs rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center font-medium text-[10px] sm:text-xs">
                    2
                  </span>
                </button>
              </Link>

              {/* Cart Icon with Badge */}
              <Link href="/cart ">
                <button className="relative p-1 sm:p-1.5 md:p-2  rounded-full transition-colors duration-200 cursor-pointer">
                  <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-[var(--primary)] text-white text-xs rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center font-medium text-[10px] sm:text-xs">
                    3
                  </span>
                </button>
              </Link>

              {/* User Account */}
              <>
                <Link href="/account">
                  <button className="p-1 cursor-pointer sm:p-1.5 md:p-2  rounded-full transition-colors duration-200">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </button>
                </Link>
              </>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#272727] border-t border-gray-600">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/about")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                About
              </Link>
              <Link
                href="/shop"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/shop")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                Shop
              </Link>
              <Link
                href="/blogs"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/blog")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/contact")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Category Menu */}
      {isCategoryMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Shop by Category
              </h3>

              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Category"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Categories List for Mobile */}
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">
                      {category.name}
                    </span>
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {category.subcategories.map((subcategory, index) => (
                      <Link
                        key={index}
                        href={`/shop?category=${encodeURIComponent(
                          category.name
                        )}&subcategory=${encodeURIComponent(subcategory)}`}
                        onClick={closeCategoryMenu}
                        className="text-sm text-gray-600 hover:text-[var(--primary)] hover:bg-blue-50 px-2 py-1 rounded transition-colors duration-200"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
