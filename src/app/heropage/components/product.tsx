"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star, Heart, ArrowRight } from "lucide-react";

function Product() {
  const router = useRouter();
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=center",
      title: "Headset T50RP MK3N -",
      subtitle: "Black and Red",
      soldCount: "200 Item Sold",
      price: "$23.00",
      rating: 5.0,
      isWishlisted: false,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop&crop=center",
      title: "Headset T50RP MK3N -",
      subtitle: "Black and Red",
      soldCount: "200 Item Sold",
      price: "$23.00",
      rating: 5.0,
      isWishlisted: false,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop&crop=center",
      title: "Headset T50RP MK3N -",
      subtitle: "Black and Red",
      soldCount: "200 Item Sold",
      price: "$23.00",
      rating: 5.0,
      isWishlisted: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop&crop=center",
      title: "Headset T50RP MK3N -",
      subtitle: "Black and Red",
      soldCount: "200 Item Sold",
      price: "$23.00",
      rating: 5.0,
      isWishlisted: false,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&crop=center",
      title: "Headset T50RP MK3N -",
      subtitle: "Black and Red",
      soldCount: "200 Item Sold",
      price: "$23.00",
      rating: 5.0,
      isWishlisted: false,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop&crop=center",
      title: "Headset T50RP MK3N -",
      subtitle: "Black and Red",
      soldCount: "200 Item Sold",
      price: "$23.00",
      rating: 5.0,
      isWishlisted: false,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop&crop=center",
      title: "Headset T50RP MK3N -",
      subtitle: "Black and Red",
      soldCount: "200 Item Sold",
      price: "$23.00",
      rating: 5.0,
      isWishlisted: false,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop&crop=center",
      title: "Headset T50RP MK3N -",
      subtitle: "Black and Red",
      soldCount: "200 Item Sold",
      price: "$23.00",
      rating: 5.0,
      isWishlisted: false,
    },
  ];

  // Duplicate products to show 16 items (2 rows of 8)
  const allProducts = [...products, ...products];

  return (
    <div className="w-full  py-8 sm:py-12 lg:py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-y-3 sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--secondary)]">
            Hot News Electronics
          </h2>
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-1 sm:gap-2">
            <span>View All</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {allProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              onClick={() => router.push(`/products/${product.id}`)}
              className="bg-white rounded-3xl border border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer overflow-hidden "
            >
              {/* Product Image Container */}
              <div className="relative mb-6">
                {/* Rating - Top Left */}
                <div className="absolute top-3 left-3 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  <span className="text-sm font-medium text-gray-800">
                    {product.rating}
                  </span>
                </div>

                {/* Wishlist Icon - Top Right */}
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm z-10">
                  <Heart
                    className={`w-5 h-5 ${
                      product.isWishlisted
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Product Image */}
                <div className="relative w-full h-48 sm:h-56 bg-white rounded-2xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3 p-4">
                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-lg font-bold text-gray-900 leading-tight">
                    {product.subtitle}
                  </p>
                </div>

                {/* Sold Count */}
                <p className="text-sm text-gray-500 font-medium">
                  {product.soldCount.toLowerCase()}
                </p>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/products/${product.id}`);
                    }}
                    className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <span className="text-lg">+</span>
                    <span>View details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
