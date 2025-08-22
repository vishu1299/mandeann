"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "TI gets $4.6bn in Chips Act funding",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=center&q=80",
      category: "Technology",
    },
    {
      id: 2,
      title: "Qindows Finally Expands FAT32 Formatting From 32GB to 2TB",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center&q=80",
      category: "Software",
    },
    {
      id: 3,
      title: "Video game performers announce strike, citing artificial...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&crop=center&q=80",
      category: "Gaming",
    },
    {
      id: 4,
      title: "Coveo Report Reveals AI Search Enriches Customer Engagement",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center&q=80",
      category: "AI",
    },
    {
      id: 5,
      title: "Intes Announces New Tech To Battle in AI Market",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center&q=80",
      category: "AI",
    },
    {
      id: 6,
      title: "Are Mainframes an Indicator of Banking Reliability?",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center&q=80",
      category: "Finance",
    },
    {
      id: 7,
      title: "The Future of Cloud Computing in 2024",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "07 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center&q=80",
      category: "Cloud",
    },
    {
      id: 8,
      title: "Cybersecurity Trends Every Business Should Know",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "07 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&crop=center&q=80",
      category: "Security",
    },
    {
      id: 9,
      title: "Mobile App Development Best Practices",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ultrices velit, ut facilisis elit lorem ut. Donec non lorem, eleifend lorem tempus sit amet. Aliquam non...",
      date: "06 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center&q=80",
      category: "Mobile",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="w-full min-h-screen bg-gray-50 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--secondary)] mb-4">
            Blogs
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news and insights from the world of
            technology and electronics
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {currentPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                {/* Blog Image */}
                <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-4 sm:p-6 ">
                  {/* Meta Information */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-1">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--secondary)] mb-3 sm:mb-4 leading-tight group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="flex gap-3">
                    <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                      Read More
                    </button>
                    <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                      Share
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                      }
                    }}
                    className={`${
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "hover:bg-[var(--primary)] hover:text-white"
                    }`}
                  />
                </PaginationItem>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage =
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1);

                    if (!showPage) {
                      // Show ellipsis
                      if (
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
                    }

                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                          className={`${
                            currentPage === page
                              ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]"
                              : "hover:bg-[var(--primary)] hover:text-white"
                          }`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1);
                      }
                    }}
                    className={`${
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "hover:bg-[var(--primary)] hover:text-white"
                    }`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
