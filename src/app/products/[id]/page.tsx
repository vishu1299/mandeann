"use client";

// Review list for demo, styled per theme and screenshot
function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Luke Devis",
      country: "UK",
      date: "2024-07-05 12:00PM",
      rating: 5,
      comment:
        "Hi, I’m so glad you like our products. Your best rating is our biggest support. Don’t forget to share with your friends, family or relatives. Have a nice day, waiting for your next order",
    },
    {
      id: 2,
      name: "Martin Sandy",
      country: "USA",
      date: "2024-07-04 12:00PM",
      rating: 5,
      comment:
        "Hi, I’m so glad you like our products. Your best rating is our biggest support. Don’t forget to share with your friends, family or relatives. Have a nice day, waiting for your next order",
    },
    {
      id: 3,
      name: "Kobe Rexion",
      country: "KSA",
      date: "2024-07-03 12:00PM",
      rating: 5,
      comment:
        "Hi, I’m so glad you like our products. Your best rating is our biggest support. Don’t forget to share with your friends, family or relatives. Have a nice day, waiting for your next order",
    },
    {
      id: 4,
      name: "Yudi Sudarso",
      country: "INA",
      date: "2024-07-03 12:00PM",
      rating: 5,
      comment:
        "Hi, I’m so glad you like our products. Your best rating is our biggest support. Don’t forget to share with your friends, family or relatives. Have a nice day, waiting for your next order",
    },
  ];
  return (
    <div className="space-y-4 sm:space-y-5">
      {reviews.map((r) => (
        <div
          key={r.id}
          className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Avatar */}
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
              {r.name[0]}
            </div>

            {/* Header: name + country + rating; date right */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-[var(--secondary)] font-semibold">
                    <span className="truncate">{r.name}</span>
                    <span className="text-xs text-gray-500">{r.country}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-xs text-gray-600 font-semibold">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 whitespace-nowrap">
                  {r.date}
                </div>
              </div>

              {/* Comment */}
              <div className="mt-3 rounded-lg bg-gray-50 px-3 py-3 text-sm leading-relaxed text-gray-700">
                <div className="text-gray-500 text-xs mb-1 font-medium">
                  Comment :
                </div>
                {r.comment}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Load More */}
      <div className="flex justify-center">
        <button className="rounded-full border border-gray-300 px-5 py-2 text-sm text-[var(--secondary)] hover:bg-gray-50">
          Load More
        </button>
      </div>
    </div>
  );
}

// Product video component replicated from About page design
function ProductVideo() {
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
      } catch (err) {
        console.error("Error playing video:", err);
      }
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
        onClick={handleVideoClick}
      >
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
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[var(--primary)] hover:bg-[var(--primary-hover)] rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            {isPlaying ? (
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>

        {!isPlaying && (
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
              Product Preview
            </h3>
            <p className="text-white/90 text-sm sm:text-base">
              Click to play/pause
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Lightweight YouTube play/pause controls using postMessage API (not currently rendered)
// Keeping the function for future use; comment it out to silence unused errors
/*
function ProductVideoControls() {
  const send = (command: "playVideo" | "pauseVideo") => {
    const frame = document.getElementById("productPlayer") as HTMLIFrameElement | null;
    if (!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args: [] }),
      "*"
    );
  };
  return (
    <div className="absolute inset-0 flex items-end justify-center p-3 pointer-events-none">
      <div className="pointer-events-auto flex gap-3">
        <button onClick={() => send("playVideo")} className="rounded-full bg-[var(--primary)] text-white px-4 py-2 text-sm shadow">Play</button>
        <button onClick={() => send("pauseVideo")} className="rounded-full bg-[var(--secondary)] text-white px-4 py-2 text-sm shadow">Pause</button>
      </div>
    </div>
  );
}
*/

import React, { useMemo, useState, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Keep this simple demo catalog in this file for now.

// Zoomable image like Amazon (hover to see magnified panel)
function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const [showZoom, setShowZoom] = useState(false);
  const [bgPos, setBgPos] = useState("50% 50%");
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    x = Math.max(0, Math.min(rect.width, x));
    y = Math.max(0, Math.min(rect.height, y));
    setLensPos({ x, y });
    const xp = (x / rect.width) * 100;
    const yp = (y / rect.height) * 100;
    setBgPos(`${xp}% ${yp}%`);
  };

  return (
    <div className="relative w-full">
      {/* Inner figure keeps rounded corners; zoom panel is sibling so it isn't clipped */}
      <div
        className="relative w-full aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={onMove}
      >
        <Image src={src} alt={alt} fill className="object-cover" priority />

        {showZoom && (
          <div
            className="pointer-events-none hidden md:block absolute rounded-full ring-2 ring-[var(--primary)]/40 bg-white/10"
            style={{
              width: 140,
              height: 140,
              left: `calc(${lensPos.x}px - 70px)`,
              top: `calc(${lensPos.y}px - 70px)`,
            }}
          />
        )}
      </div>

      {showZoom && (
        <div className="hidden lg:block absolute top-0 left-full ml-4 w-[800px] h-[500px] rounded-2xl border border-gray-200 overflow-hidden bg-white shadow">
          <div
            className="w-full h-full bg-no-repeat"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "250% 250%",
              backgroundPosition: bgPos,
            }}
          />
        </div>
      )}
    </div>
  );
}

// If you later add a real API or shared data module, switch the source here.
const DEMO_PRODUCTS = [
  {
    id: 1,
    name: "boAt Rockerz 421 (2025 Launch), 40Hrs Battery, v5.4 Bluetooth Headphones, Wireless Headphone with Mic (Black Sabre)",
    price: 100.0,
    compareAtPrice: 150.0,
    rating: 5,
    reviews: 20,
    sku: "HJ-33128",
    category: "Headphone, Audio",
    tags: ["Bluetooth", "Laptop", "Headphone", "Speaker"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1518444028785-8f7f3d1a4d24?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1526178614028-8bce2d646d1a?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=800&q=80&auto=format",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquet dui. Donec maximus, magna id imperdiet sodales, risus elit varius enim.",
    features: [
      "Ultra-Slim Design",
      "High-Performance Processor",
      "Vivid Display",
      "Advanced Graphics",
      "Ample Storage and Memory",
      "All-Day Battery Life",
      "Cutting-Edge Connectivity",
      "Enhanced Audio Experience",
    ],
    specifications: [
      ["Platform", "Notebook"],
      ["Type Processor", "Bintel Core i3"],
      [
        "Processor Onboard",
        "Intel Core i3-1215U Processor (10M Cache, 3.30 GHz Base)",
      ],
      ["Storage Capacity", "256 GB SSD"],
      ["Standard Memory", "8GB DDR4"],
      ["Graphics Type", "Intel Xe Graphics"],
      ["Screen Size", "14 Inch"],
      ["Screen Resolution", "HD 1366 x 768"],
      ["Screen Type", "Anti-Glare Display"],
      ["Touchscreen", "No"],
      ["Wireless Network Type", "Integrated"],
      ["Wireless Bluetooth", "Bluetooth 5.2"],
      ["Keyboard", "Full-size island-style keyboard"],
      ["Audio", "Integrated"],
      ["Speaker", "Dual speakers"],
      ["Camera", "Dark Ash Silver Plastic with HD Webcam + TNR ID"],
      ["Battery", "3 Cell"],
      ["Battery Life", "41 Wh Li-ion"],
      ["Dimensions (W x D x H)", "32.4 x 22.59 x 1.99 cm"],
      ["Power", "45W AC Adapter"],
      ["Product Weight", "Starting at 1.47 kg"],
    ],
    video:
      "https://www.youtube.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1&color=white",
  },
  // Fallback items so ids from home/shop route somewhere meaningful
  {
    id: 2,
    name: "Smart Watch Series 8",
    price: 449.99,
    compareAtPrice: 499.99,
    rating: 5,
    reviews: 2100,
    sku: "SW-8",
    category: "Smartphone",
    tags: ["Wearable", "Bluetooth"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1518444028785-8f7f3d1a4d24?w=800&q=80&auto=format",
    ],
    description: "Powerful smartwatch with health tracking.",
    features: ["Always-on display", "ECG", "Water resistant"],
    video:
      "https://www.youtube.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1&color=white",
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    price: 899.99,
    compareAtPrice: 1099.99,
    rating: 5,
    reviews: 850,
    sku: "CAN-LENS",
    category: "Photography",
    tags: ["Lens", "Optics"],
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200&q=80&auto=format",
    ],
    description: "Sharp optics for professionals.",
    features: ["f/1.8 aperture", "Fast AF"],
    video:
      "https://www.youtube.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1&color=white",
  },
];

function ProductDetailsContent() {
  const { id } = useParams();
  const router = useRouter();
  const productId = Number(id);

  const product = useMemo(
    () => DEMO_PRODUCTS.find((p) => p.id === productId) ?? DEMO_PRODUCTS[0],
    [productId]
  );

  const [activeImg, setActiveImg] = useState(product.images[0]);
  const [qty, setQty] = useState(1);

  const inc = () => setQty((q) => Math.min(q + 1, 10));
  const dec = () => setQty((q) => Math.max(1, q - 1));

  const addToCart = () => {
    toast.success("Added to cart", { autoClose: 1500 });
  };
  const buyNow = () => {
    toast.info("Proceeding to checkout... (demo)", { autoClose: 1500 });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4 sm:mb-6">
          <Link href="/shop" className="hover:text-[var(--primary)]">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="line-clamp-1">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left: Gallery */}
          <div className="lg:col-span-5 relative">
            <ZoomImage src={activeImg} alt={product.name} />

            {/* Thumbnails */}
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(img)}
                  aria-label="Select image"
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border transition-all ${
                    activeImg === img
                      ? "ring-2 ring-[var(--primary)] border-transparent"
                      : "border-gray-200 hover:border-[var(--primary)]"
                  }`}
                >
                  <Image src={img} alt="thumb" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-7">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--secondary)]">
              {product.name}
            </h1>

            {/* Price & rating */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <div className="flex items-end gap-2">
                <span className="text-[color:var(--primary)] text-2xl sm:text-3xl font-extrabold">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through text-lg sm:text-xl">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.reviews} Reviews
                </span>
              </div>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Meta */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500">SKU :</span>{" "}
                <span className="font-medium">{product.sku}</span>
              </div>
              <div>
                <span className="text-gray-500">Category :</span>{" "}
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-gray-500">Tags :</span>{" "}
                <span className="font-medium">{product.tags.join(", ")}</span>
              </div>
            </div>

            {/* Quantity & actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center rounded-full border border-gray-200 overflow-hidden">
                <button
                  aria-label="Decrease quantity"
                  onClick={dec}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 min-w-10 text-center font-semibold">
                  {qty}
                </span>
                <button
                  aria-label="Increase quantity"
                  onClick={inc}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={addToCart}
                className="flex items-center gap-2 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-5 py-2.5 text-sm font-medium"
              >
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
              <button
                onClick={buyNow}
                className="rounded-full bg-[var(--primary)]/90 hover:bg-[var(--primary-hover)] text-white px-5 py-2.5 text-sm font-medium"
              >
                Buy Now
              </button>

              <button
                aria-label="Wishlist"
                className="ml-1 rounded-full border border-gray-200 p-2 hover:bg-gray-50"
                onClick={() => toast.success("Added to wishlist")}
              >
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Shipping */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3">
                <Truck className="w-5 h-5 text-[var(--primary)]" />
                <div className="text-sm">
                  <div className="font-semibold">Normal Delivery</div>
                  <div className="text-gray-500">
                    3-5 days (est. shipping cost)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3">
                <BadgeCheck className="w-5 h-5 text-[var(--primary)]" />
                <div className="text-sm">
                  <div className="font-semibold">Warranty</div>
                  <div className="text-gray-500">
                    1 Year Manufacturer Warranty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <TabsSection
          features={product.features ?? []}
          specifications={product.specifications ?? []}
        />

        <div className="mt-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)]"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        newestOnTop
      />
    </div>
  );
}

function TabsSection({
  features = [],
  specifications = [],
}: {
  features?: string[];
  specifications?: string[][];
}) {
  const [tab, setTab] = useState<"desc" | "spec" | "review">("desc");

  return (
    <div className="mt-8 sm:mt-12">
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200">
        {[
          { key: "desc", label: "Description" },
          { key: "spec", label: "Specification" },
          { key: "review", label: "Review" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as typeof tab)}
            className={`px-4 py-2 text-sm sm:text-base font-medium border-b-2 -mb-px transition-colors ${
              tab === t.key
                ? "border-[var(--primary)] text-[var(--secondary)]"
                : "border-transparent text-gray-500 hover:text-[var(--secondary)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {tab === "desc" && (
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="mt-0.5 w-5 h-5 text-green-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        {tab === "spec" && (
          <div className="text-gray-700">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="divide-y divide-gray-100">
                {(specifications || []).map((row, idx) => {
                  const label = row?.[0] ?? "";
                  const value = row?.[1] ?? "";
                  return (
                    <div
                      key={label || idx}
                      className="grid grid-cols-1 sm:grid-cols-3"
                    >
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 font-medium text-[var(--secondary)]">
                        {label} :
                      </div>
                      <div className="sm:col-span-2 px-3 sm:px-4 py-2 sm:py-3 text-gray-700">
                        {value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {tab === "review" && (
          <div className="text-gray-700">
            <ReviewsSection />
          </div>
        )}
      </div>

      {/* Video - visible only in Description tab (same design as About page) */}
      {tab === "desc" && (
        <div className="mt-8">
          <ProductVideo />
        </div>
      )}
    </div>
  );
}

export default function ProductDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </div>
      }
    >
      <ProductDetailsContent />
    </Suspense>
  );
}
