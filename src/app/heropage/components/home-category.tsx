import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function Homecategory() {
  const categories = [
    {
      id: 1,
      name: "Gaming",
      image: "/assets/images/categories/img1.png",
      alt: "Gaming Category",
    },
    {
      id: 2,
      name: "Smartphone",
      image: "/assets/images/categories/img2.png",
      alt: "Smartphone Category",
    },
    {
      id: 3,
      name: "Laptop",
      image: "/assets/images/categories/img3.png",
      alt: "Laptop Category",
    },
    {
      id: 4,
      name: "TV",
      image: "/assets/images/categories/img4.png",
      alt: "TV Category",
    },
    {
      id: 5,
      name: "Camera",
      image: "/assets/images/categories/img5.png",
      alt: "Camera Category",
    },
  ];

  return (
    <div className="w-full  py-8 sm:py-12 lg:py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--secondary)]">
            Shop By Category
          </h2>
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full font-medium text-xs xs:text-sm sm:text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-1 xs:gap-2 whitespace-nowrap mt-2 xs:mt-0">
            <span>View All</span>
            <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer ">
              {/* Category Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-300">
                {/* Image Container */}
                <div className="relative w-full aspect-square mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 96px"
                    />
                  </div>
                </div>

                {/* Category Name */}
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homecategory;
