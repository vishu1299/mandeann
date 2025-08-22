"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  warranty: string;
  inStock: boolean;
  isWishlisted: boolean;
};

// Sample product data with Unsplash images
const initialProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    brand: "Motorola",
    category: "Audio & Video",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1250,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    warranty: "2 Years +",
    inStock: true,
    isWishlisted: false,
  },
  {
    id: 2,
    name: "Smart Watch Series 8",
    brand: "Asus",
    category: "Smartphone",
    price: 449.99,
    originalPrice: 499.99,
    rating: 4.9,
    reviews: 2100,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    warranty: "1 Years",
    inStock: true,
    isWishlisted: true,
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    brand: "Canon",
    category: "Photography",
    price: 899.99,
    originalPrice: 1099.99,
    rating: 4.7,
    reviews: 850,
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop&crop=center",
    warranty: "3 years",
    inStock: true,
    isWishlisted: false,
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    brand: "Razer",
    category: "Gaming",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 950,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&crop=center",
    warranty: "2 years",
    inStock: true,
    isWishlisted: false,
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    brand: "Logitech",
    category: "Gaming",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviews: 1100,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    warranty: "2 years",
    inStock: true,
    isWishlisted: true,
  },
  {
    id: 6,
    name: "4K Webcam",
    brand: "Logitech",
    category: "Electronics",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.4,
    reviews: 750,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop&crop=center",
    warranty: "1 year",
    inStock: false,
    isWishlisted: false,
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    brand: "JBL",
    category: "Audio",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.6,
    reviews: 1300,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
    warranty: "1 year",
    inStock: true,
    isWishlisted: false,
  },
  {
    id: 8,
    name: "Smartphone Case",
    brand: "OtterBox",
    category: "Accessories",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.3,
    reviews: 2200,
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?w=400&h=400&fit=crop&crop=center",
    warranty: "1 year",
    inStock: true,
    isWishlisted: false,
  },
  {
    id: 9,
    name: "Wireless Earbuds",
    brand: "Samsung",
    category: "Audio",
    price: 179.99,
    originalPrice: 229.99,
    rating: 4.5,
    reviews: 1800,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&crop=center",
    warranty: "1 year",
    inStock: true,
    isWishlisted: true,
  },
  {
    id: 10,
    name: "Laptop Stand",
    brand: "Rain Design",
    category: "Accessories",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 650,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    warranty: "2 years",
    inStock: true,
    isWishlisted: false,
  },
  {
    id: 11,
    name: "USB-C Hub",
    brand: "Anker",
    category: "Accessories",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviews: 900,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    warranty: "1 year",
    inStock: true,
    isWishlisted: false,
  },
  {
    id: 12,
    name: "Monitor Stand",
    brand: "VIVO",
    category: "Accessories",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.2,
    reviews: 1500,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    warranty: "1 year",
    inStock: true,
    isWishlisted: false,
  },
];

const FAVORITES_KEY = "shop:favorites";

export default function ShopPage() {
  const router = useRouter();

  // Products state (so we can toggle wishlists)
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // State management
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedWarranties, setSelectedWarranties] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy] = useState("featured");
  const [viewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      if (!raw) return;
      const favIds = new Set<number>(JSON.parse(raw) as number[]);
      setProducts((prev) =>
        prev.map((p) => ({ ...p, isWishlisted: favIds.has(p.id) }))
      );
    } catch {
      // ignore parse errors
    }
  }, []);

  const persistFavorites = (nextProducts: Product[]) => {
    const favIds = nextProducts.filter((p) => p.isWishlisted).map((p) => p.id);
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favIds));
    } catch {
      // ignore storage errors
    }
  };

  const toggleWishlist = (id: number) => {
    setProducts((prev) => {
      const next = prev.map((p) =>
        p.id === id ? { ...p, isWishlisted: !p.isWishlisted } : p
      );
      persistFavorites(next);
      return next;
    });
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesWarranty =
        selectedWarranties.length === 0 ||
        selectedWarranties.includes(product.warranty);
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesBrand && matchesWarranty && matchesPrice;
    });

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [
    products,
    selectedCategories,
    selectedBrands,
    selectedWarranties,
    priceRange,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Filter handlers
  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
    setCurrentPage(1);
  };
  const handleBrandChange = (brand: string, checked: boolean) => {
    setSelectedBrands((prev) =>
      checked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
    setCurrentPage(1);
  };
  const handleWarrantyChange = (warranty: string, checked: boolean) => {
    setSelectedWarranties((prev) =>
      checked ? [...prev, warranty] : prev.filter((w) => w !== warranty)
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedWarranties([]);
    setPriceRange([0, 1000]);
    setCurrentPage(1);
  };

  const clampPrice = (val: number) =>
    Math.min(1000, Math.max(0, Math.round(val)));

  const handleMinPriceChange = (val: string) => {
    const n = clampPrice(Number(val));
    setPriceRange(([, max]) => [Math.min(n, max), max]);
    setCurrentPage(1);
  };
  const handleMaxPriceChange = (val: string) => {
    const n = clampPrice(Number(val));
    setPriceRange(([min]) => [min, Math.max(n, min)]);
    setCurrentPage(1);
  };

  const pricePresets: [number, number][] = [
    [0, 100],
    [100, 500],
    [500, 1000],
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-[95%] mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Sidebar Filters: always visible, stacks on small screens */}
          <aside className="w-full lg:w-80">
            <div className="bg-white rounded-lg border border-gray-200 lg:sticky lg:top-6">
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-[var(--secondary)]">
                  Filter Product
                </h3>
              </div>

              <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                {/* Categories */}
                <section aria-labelledby="categories-heading">
                  <h4
                    id="categories-heading"
                    className="text-sm sm:text-base font-semibold text-[var(--secondary)] mb-3 sm:mb-4"
                  >
                    Categories
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="all-product"
                        checked={selectedCategories.length === 0}
                        onCheckedChange={(checked) => {
                          if (checked) setSelectedCategories([]);
                        }}
                        className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:border-[var(--primary)] data-[state=checked]:text-white"
                      />
                      <Label
                        htmlFor="all-product"
                        className="text-sm text-gray-700 cursor-pointer font-medium"
                      >
                        All Product
                      </Label>
                    </div>
                    {[
                      "Smartphone",
                      "Digital Camera",
                      "Gaming Accessories",
                      "Laptop & Notebook",
                      "Computer/PC",
                      "Audio & Video",
                      "IOT",
                      "Other",
                    ].map((category) => (
                      <div key={category} className="flex items-center gap-3">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) =>
                            handleCategoryChange(category, checked as boolean)
                          }
                          className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:border-[var(--primary)] data-[state=checked]:text-white"
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Brands */}
                <section aria-labelledby="brands-heading">
                  <h4
                    id="brands-heading"
                    className="text-sm sm:text-base font-semibold text-[var(--secondary)] mb-3 sm:mb-4"
                  >
                    Brand
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="all-brand"
                        checked={selectedBrands.length === 0}
                        onCheckedChange={(checked) => {
                          if (checked) setSelectedBrands([]);
                        }}
                        className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:border-[var(--primary)] data-[state=checked]:text-white"
                      />
                      <Label
                        htmlFor="all-brand"
                        className="text-sm text-gray-700 cursor-pointer font-medium"
                      >
                        All Brand
                      </Label>
                    </div>
                    {["Motorola", "Asus", "Avellano", "Robex", "Gigma"].map(
                      (brand) => (
                        <div key={brand} className="flex items-center gap-3">
                          <Checkbox
                            id={`brand-${brand}`}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={(checked) =>
                              handleBrandChange(brand, checked as boolean)
                            }
                            className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:border-[var(--primary)] data-[state=checked]:text-white"
                          />
                          <Label
                            htmlFor={`brand-${brand}`}
                            className="text-sm text-gray-700 cursor-pointer"
                          >
                            {brand}
                          </Label>
                        </div>
                      )
                    )}
                  </div>
                </section>

                {/* Price */}
                <section aria-labelledby="price-heading">
                  <h4
                    id="price-heading"
                    className="text-sm sm:text-base font-semibold text-[var(--secondary)] mb-3 sm:mb-4"
                  >
                    Price
                  </h4>

                  {/* Improved price UI */}
                  <div className="space-y-3">
                    <Slider
                      value={priceRange}
                      onValueChange={(val) => {
                        setPriceRange([val[0], val[1]] as [number, number]);
                        setCurrentPage(1);
                      }}
                      max={1000}
                      min={0}
                      step={10}
                      aria-label="Price range"
                      className="mb-1
                        [&>span:first-child]:h-2
                        [&>span:first-child]:rounded-full
                        [&>span:first-child]:bg-blue-100
                        [&_[role=slider]]:h-5
                        [&_[role=slider]]:w-5
                        [&_[role=slider]]:bg-white
                        [&_[role=slider]]:border-2
                        [&_[role=slider]]:border-blue-500
                        [&_[role=slider]]:shadow
                        
                        "
                    />
                    <div className="flex items-center gap-3 mt-6">
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">
                          Min
                        </label>
                        <Input
                          type="number"
                          inputMode="numeric"
                          min={0}
                          max={priceRange[1]}
                          step={10}
                          value={priceRange[0]}
                          onChange={(e) => handleMinPriceChange(e.target.value)}
                          className="h-10 w-full border-gray-300 rounded-lg focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
                          aria-label="Minimum price"
                        />
                      </div>
                      <div className="text-sm text-gray-500 mt-6">to</div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-600 mb-1">
                          Max
                        </label>
                        <Input
                          type="number"
                          inputMode="numeric"
                          min={priceRange[0]}
                          max={1000}
                          step={10}
                          value={priceRange[1]}
                          onChange={(e) => handleMaxPriceChange(e.target.value)}
                          className="h-10 w-full border-gray-300 rounded-lg focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
                          aria-label="Maximum price"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {pricePresets.map(([min, max]) => {
                        const active =
                          priceRange[0] === min && priceRange[1] === max;
                        return (
                          <button
                            key={`${min}-${max}`}
                            type="button"
                            onClick={() => {
                              setPriceRange([min, max]);
                              setCurrentPage(1);
                            }}
                            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors
                              ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                              }`}
                            aria-pressed={active}
                          >
                            ${min} – ${max}
                          </button>
                        );
                      })}
                    </div>

                    <div className="text-sm text-gray-700 font-medium">
                      Price: ${priceRange[0]} - ${priceRange[1]}
                    </div>
                  </div>
                </section>

                {/* Warranty */}
                <section aria-labelledby="warranty-heading">
                  <h4
                    id="warranty-heading"
                    className="text-sm sm:text-base font-semibold text-[var(--secondary)] mb-3 sm:mb-4"
                  >
                    Warranty
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {["1 Years", "2 Years +", "Lifetime"].map((warranty) => (
                      <div key={warranty} className="flex items-center gap-3">
                        <Checkbox
                          id={`warranty-${warranty}`}
                          checked={selectedWarranties.includes(warranty)}
                          onCheckedChange={(checked) =>
                            handleWarrantyChange(warranty, checked as boolean)
                          }
                          className={`${
                            warranty === "2 Years +"
                              ? "data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                              : "data-[state=checked]:bg-[var(--primary)] data-[state=checked]:border-[var(--primary)]"
                          }`}
                        />
                        <Label
                          htmlFor={`warranty-${warranty}`}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {warranty}
                        </Label>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Filter Button */}
              <div className="p-4 sm:p-6 border-t border-gray-200">
                <Button
                  onClick={clearAllFilters}
                  className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-3 rounded-lg font-medium"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </aside>

          {/* Products */}
          <main className="flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-4 sm:mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[var(--secondary)]">
                All Products
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm">
                Showing {startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, filteredProducts.length)}{" "}
                of {filteredProducts.length} products
              </p>
            </div>

            <div className="min-h-[600px] sm:min-h-[700px]">
              {paginatedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">
                    No products found
                  </p>
                  <Button onClick={clearAllFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div
                    className={`grid gap-4 sm:gap-6 mb-8 ${
                      viewMode === "grid"
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
                        : "grid-cols-1"
                    }`}
                  >
                    {paginatedProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => router.push(`/products/${product.id}`)}
                        className={`bg-white rounded-2xl border border-blue-300 hover:ring-2 hover:ring-blue-200 transition-all duration-300 group cursor-pointer ${
                          viewMode === "list"
                            ? "flex gap-6 p-4 sm:p-6"
                            : "p-4 sm:p-6"
                        }`}
                      >
                        {/* Product Image */}
                        <div
                          className={`relative ${
                            viewMode === "list"
                              ? "w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0"
                              : "w-full h-48 sm:h-56 mb-4"
                          }`}
                        >
                          <div className="relative w-full h-full bg-gray-50 rounded-xl overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              unoptimized
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>

                          {/* Wishlist Button */}
                          <button
                            type="button"
                            aria-label={
                              product.isWishlisted
                                ? "Remove from favorites"
                                : "Add to favorites"
                            }
                            aria-pressed={product.isWishlisted}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWishlist(product.id);
                            }}
                            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                product.isWishlisted
                                  ? "text-red-500 fill-red-500"
                                  : "text-gray-400 group-hover:text-red-500"
                              }`}
                            />
                          </button>

                          {/* Stock Status */}
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                              <span className="text-white font-semibold">
                                Out of Stock
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className={viewMode === "list" ? "flex-1" : ""}>
                          <div className="mb-2">
                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                              {product.brand}
                            </p>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                              {product.name}
                            </h3>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>

                          {/* Category and Warranty */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {product.category}
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {product.warranty} warranty
                            </span>
                          </div>

                          {/* Price and Actions */}
                          <div
                            className={`flex flex-col sm:flex-row items-start gap-y-3 sm:items-center justify-between ${
                              viewMode === "list" ? "mt-4" : ""
                            }`}
                          >
                            <div>
                              <div className="flex  items-center gap-2">
                                <span className="text-lg sm:text-xl font-bold text-gray-800">
                                  ${product.price}
                                </span>
                                {product.originalPrice > product.price && (
                                  <span className="text-sm text-gray-500 line-through">
                                    ${product.originalPrice}
                                  </span>
                                )}
                              </div>
                              {product.originalPrice > product.price && (
                                <span className="text-xs text-green-600 font-medium">
                                  Save $
                                  {Number(
                                    product.originalPrice - product.price
                                  ).toFixed(2)}
                                </span>
                              )}
                            </div>
                            <Button
                              disabled={!product.inStock}
                              className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 py-2 rounded-full font-medium text-sm transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              {product.inStock ? "Add to Cart" : "Out of Stock"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() =>
                                setCurrentPage(Math.max(1, currentPage - 1))
                              }
                              className={
                                currentPage === 1
                                  ? "pointer-events-none opacity-50"
                                  : "cursor-pointer"
                              }
                            />
                          </PaginationItem>
                          {Array.from({ length: totalPages }).map((_, i) => {
                            const page = i + 1;
                            if (
                              page === 1 ||
                              page === totalPages ||
                              (page >= currentPage - 1 &&
                                page <= currentPage + 1)
                            ) {
                              return (
                                <PaginationItem key={page}>
                                  <PaginationLink
                                    onClick={() => setCurrentPage(page)}
                                    isActive={currentPage === page}
                                    className="cursor-pointer"
                                  >
                                    {page}
                                  </PaginationLink>
                                </PaginationItem>
                              );
                            } else if (
                              page === currentPage - 2 ||
                              page === currentPage + 2
                            ) {
                              return (
                                <PaginationItem key={page}>
                                  <PaginationEllipsis />
                                </PaginationItem>
                              );
                            }
                            return null;
                          })}
                          <PaginationItem>
                            <PaginationNext
                              onClick={() =>
                                setCurrentPage(
                                  Math.min(totalPages, currentPage + 1)
                                )
                              }
                              className={
                                currentPage === totalPages
                                  ? "pointer-events-none opacity-50"
                                  : "cursor-pointer"
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
