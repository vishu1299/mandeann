"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

interface RecentPost {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
}

function BlogDetailsContent() {
  const params = useParams();
  const blogId = parseInt(params.id as string);

  // Sample blog data - in real app this would come from API/database
  const blogPost: BlogPost = {
    id: blogId,
    title: "Are Mainframes an Indicator of Banking Reliability?",
    content: `I was on a call with Broadcom last week. A representative from a bank was also on the call and talked about how their use of a mainframe computer was connected to their commitment to security, reliability, and availability for their customers. In an earlier IBM call with some banks, they all indicated that their use of the mainframe helped them make better decisions, as well.

These conversations got me wondering if the recent failures of Silicon Valley Bank and some Republic Bank had something to do with whether they used mainframes. While this is a small sample, neither of the failed banks (according to this report) used mainframes, while JPMorgan Chase & Co., the bank that bought First Republic, does.

There is a decent chance that banks using mainframes prioritize low risk, while banks that do not may be more willing to take unreasonable risks. With people currently concerned about where to put their money safely, one of the questions you should ask is, "Do you use a mainframe for your mission-critical applications?"

Let's explore the relationship between mainframes and banking risks. Then we'll close with my Product of the Week, a little device that could allow your smartphone battery to last indefinitely. I had doubts, given how the device looked, but it does perform as advertised.`,
    date: "08 June 2024",
    author: "Rob Enderle",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center&q=80",
    category: "Finance",
  };

  const recentPosts: RecentPost[] = [
    {
      id: 1,
      title: "TI gets $4.6bn in Chips Act funding",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center&q=80",
    },
    {
      id: 2,
      title: "Qindows Finally Expands FAT32 Formatting From...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center&q=80",
    },
    {
      id: 3,
      title: "Video game performers announce strike, citing...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center&q=80",
    },
    {
      id: 4,
      title: "Coveo Report Reveals AI Search Enriches Custo...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center&q=80",
    },
    {
      id: 5,
      title: "Intes Announces New Tech To Battle in AI Mar...",
      date: "08 June 2024",
      author: "Rodrigo",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&q=80",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--secondary)] mb-4">
            Blog Details
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-6 sm:mb-8">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--secondary)] mb-4 sm:mb-6 leading-tight">
                {blogPost.title}
              </h1>

              {/* Meta Information */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 sm:mb-8 not-prose">
                <span>{blogPost.date}</span>
                <span>•</span>
                <span>By {blogPost.author}</span>
              </div>

              {/* Content */}
              <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
                {blogPost.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Subheading */}
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--secondary)] mt-8 sm:mt-12 mb-4 sm:mb-6">
                Mainframe Administration Challenges
              </h2>

              <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg">
                  The first really big company I worked for was IBM. That was
                  right at the birth of the PC, and, back then, compared to PCs,
                  mainframes sucked. Dont get me wrong, Mainframes were far more
                  reliable and secure, but you needed MIS (now called IT) to do
                  everything for you. That organization seemed to enjoy getting
                  every request wrong and using an execution schedule measured
                  in years.
                </p>
                <p className="text-base sm:text-lg">
                  We used to joke that getting anything out of MIS required
                  sacrificing a chicken and dancing naked around a fire. MIS
                  frowned on doing that, so we never validated the theory. With
                  a PC and, later, a server, you could get things done much more
                  quickly and meet your deadlines.
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm sticky top-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--secondary)] mb-6 sm:mb-8">
                Recent Post
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.id}`}
                    className="flex gap-3 sm:gap-4 group cursor-pointer"
                  >
                    {/* Post Image */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="80px"
                      />
                    </div>

                    {/* Post Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2 mb-1 sm:mb-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog post...</p>
          </div>
        </div>
      }
    >
      <BlogDetailsContent />
    </Suspense>
  );
}
