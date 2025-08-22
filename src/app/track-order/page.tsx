"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Download,
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

interface OrderData {
  orderNumber: string;
  placedOn: string;
  estimatedDelivery: string;
  deliveryAddress: string;
  productName: string;
  productPrice: string;
  productColor: string;
  productConnectivity: string;
  productImage: string;
  quantity: number;
  trackingNumber: string;
  carrier: string;
  service: string;
  weight: string;
  customerName: string;
  shippingAddress: string;
  phone: string;
  currentStatus:
    | "Ordered"
    | "Processing"
    | "Shipped"
    | "Dispatched"
    | "Delivered";
  deliveryDate: string;
}

function TrackOrderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get order number from URL parameters
  const orderNumberFromUrl = searchParams.get("orderNumber") || "Order #123456";

  const handleGoBack = () => {
    router.back();
  };

  const orderData: OrderData = {
    orderNumber: orderNumberFromUrl,
    placedOn: "15, July, 2025",
    estimatedDelivery: "20, July, 2025",
    deliveryAddress: "Josh 21, Green Avenue, Tilak Nagar, New Delhi, 110018",
    productName:
      "EchoWave X1, Active Noise Cancellation (ANC), Deep Bass & Hi-Fi Sound",
    productPrice: "$54.43",
    productColor: "Black",
    productConnectivity: "Wireless",
    productImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop",
    quantity: 1,
    trackingNumber: orderNumberFromUrl,
    carrier: "FedEX Express",
    service: "Priority Shipping",
    weight: "2.5 KG",
    customerName: "Josh",
    shippingAddress: "Josh 21, Green Avenue, Tilak Nagar, New Delhi, 110018",
    phone: "+1 465464644",
    currentStatus: "Processing",
    deliveryDate: "9, July, 2025",
  };

  const trackingSteps = [
    {
      status: "Ordered",
      date: "Tuesday, 5, July",
      icon: ShoppingCart,
      completed: true,
    },
    {
      status: "Processing",
      date: "Tuesday, 5, July",
      icon: Package,
      completed: true,
    },
    {
      status: "Shipped",
      date: "Wednesday, 6, July",
      icon: Truck,
      completed: false,
    },
    {
      status: "Dispatched",
      date: "Thursday, 7, July",
      icon: Package,
      completed: false,
    },
    {
      status: "Delivered",
      date: "Saturday, 9, July",
      icon: CheckCircle,
      completed: false,
    },
  ];

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(160, 32, 240, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(160, 32, 240, 0.6),
              0 0 30px rgba(160, 32, 240, 0.4);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={handleGoBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Orders</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Track Your Order
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Order Number:{" "}
              <span className="font-medium text-gray-900">
                {orderNumberFromUrl}
              </span>
            </p>
          </div>

          {/* Track Your Order Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Track Your Order
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Stay updated with your order status in real-time.
              </p>
            </div>

            {/* Order Summary Card */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Order Summary Card
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-xs sm:text-sm"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  Download Invoice
                </Button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Order Details */}
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">
                          Order Number:
                        </span>
                        <span className="ml-2 text-gray-600">
                          {orderData.orderNumber}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Placed on:
                        </span>
                        <span className="ml-2 text-gray-600">
                          {orderData.placedOn}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Estimated Delivery Date:
                        </span>
                        <span className="ml-2 text-gray-600">
                          {orderData.estimatedDelivery}
                        </span>
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">
                        Delivery Address:
                      </span>
                      <div className="ml-2 text-gray-600 mt-1">
                        {orderData.deliveryAddress}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex items-start gap-4 lg:w-80">
                    <Image
                      src={orderData.productImage}
                      alt={orderData.productName}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-2 mb-2">
                        {orderData.productName}
                      </h4>
                      <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {orderData.productPrice}
                      </p>
                      <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                        <p>
                          <span className="font-medium">Color:</span>{" "}
                          {orderData.productColor}
                        </p>
                        <p>
                          <span className="font-medium">Connectivity:</span>{" "}
                          {orderData.productConnectivity}
                        </p>
                        <p>
                          <span className="font-medium">QTY:</span>{" "}
                          {orderData.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Updates */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Live Updates
              </h3>

              <div className="border border-gray-200 rounded-lg p-3 sm:p-4 lg:p-6">
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 px-2">
                    Your Order will be delivered on{" "}
                    <span className="font-semibold text-gray-900">
                      {orderData.deliveryDate}
                    </span>
                  </p>
                </div>

                {/* Progress Tracker */}
                <div className="relative">
                  <div className="flex justify-between items-start mb-4 sm:mb-6 overflow-x-auto pb-4 pt-2 sm:pt-5 scrollbar-hide">
                    {trackingSteps.map((step, index) => {
                      const Icon = step.icon;
                      const isCompleted = step.completed;
                      const isCurrent = step.status === orderData.currentStatus;

                      return (
                        <div
                          key={step.status}
                          className="flex flex-col items-center relative min-w-[80px] sm:min-w-0 flex-1 px-1 sm:px-2"
                        >
                          {/* Progress Line Background */}
                          {index < trackingSteps.length - 1 && (
                            <div
                              className="absolute top-6 sm:top-7 left-1/2 h-1 bg-gray-200 rounded-full"
                              style={{
                                width: "calc(100% - 32px)",
                                transform: "translateX(16px)",
                                zIndex: 1,
                              }}
                            />
                          )}

                          {/* Animated Progress Line */}
                          {index < trackingSteps.length - 1 && (
                            <div
                              className={`absolute top-6 sm:top-7 left-1/2 h-1 rounded-full transition-all duration-1000 ease-in-out ${
                                isCompleted
                                  ? "bg-gradient-to-r from-[var(--primary)] to-blue-400"
                                  : "bg-transparent"
                              }`}
                              style={{
                                width: isCompleted ? "calc(100% - 32px)" : "0%",
                                transform: "translateX(16px)",
                                zIndex: 2,
                              }}
                            >
                              {/* Moving dot animation for active progress */}
                              {isCompleted && (
                                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse" />
                              )}
                            </div>
                          )}

                          {/* Icon Circle with enhanced styling */}
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 ease-in-out transform ${
                              isCompleted || isCurrent
                                ? "bg-gradient-to-br from-[var(--primary)] to-blue-600 text-white shadow-lg scale-110"
                                : "bg-white border-2 border-gray-300 text-gray-400 hover:border-gray-400"
                            } ${
                              isCurrent
                                ? "animate-pulse ring-4 ring-[var(--primary)]/30 animate-float animate-glow"
                                : ""
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                                isCompleted || isCurrent ? "scale-110" : ""
                              }`}
                            />

                            {/* Checkmark overlay for completed steps */}
                            {isCompleted && !isCurrent && (
                              <div className="absolute inset-0 flex items-center justify-center bg-green-500 rounded-full">
                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                              </div>
                            )}
                          </div>

                          {/* Status Text with enhanced styling */}
                          <div className="text-center mt-3 sm:mt-4 px-1">
                            <p
                              className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                                isCompleted || isCurrent
                                  ? "text-gray-900"
                                  : "text-gray-500"
                              } ${isCurrent ? "text-[var(--primary)]" : ""}`}
                            >
                              {step.status}
                            </p>
                            <p
                              className={`text-xs text-gray-500 mt-1 transition-colors duration-300 ${
                                isCurrent ? "text-[var(--primary)]/70" : ""
                              }`}
                            >
                              {step.date}
                            </p>

                            {/* Current step indicator */}
                            {isCurrent && (
                              <div className="mt-2">
                                <div className="inline-flex items-center px-2 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse mr-1" />
                                  <span className="text-xs font-medium text-[var(--primary)]">
                                    In Progress
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Progress percentage indicator */}
                  <div className="mt-4 sm:mt-6 bg-gray-100 rounded-full p-1">
                    <div
                      className="bg-gradient-to-r from-[var(--primary)] to-blue-400 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{
                        width: `${
                          (trackingSteps.filter((step) => step.completed)
                            .length /
                            trackingSteps.length) *
                          100
                        }%`,
                      }}
                    >
                      {/* Animated shimmer effect */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
                        style={{
                          backgroundSize: "200% 100%",
                          animation: "shimmer 2s infinite",
                        }}
                      />
                    </div>
                  </div>

                  {/* Progress text */}
                  <div className="text-center mt-2 sm:mt-3">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Progress:{" "}
                      {trackingSteps.filter((step) => step.completed).length} of{" "}
                      {trackingSteps.length} steps completed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Tracking Information */}
              <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                  Tracking Information
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-700">
                      Tracking Number
                    </span>
                    <span className="text-sm text-gray-900">
                      {orderData.trackingNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-700">
                      Carrier
                    </span>
                    <span className="text-sm text-gray-900">
                      {orderData.carrier}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-700">
                      Service
                    </span>
                    <span className="text-sm text-gray-900">
                      {orderData.service}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-700">
                      Weight
                    </span>
                    <span className="text-sm text-gray-900">
                      {orderData.weight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Delivery Information */}
              <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                  Delivery Information
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-700">
                      Name
                    </span>
                    <span className="text-sm text-gray-900">
                      {orderData.customerName}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-700">
                      Shipping Address
                    </span>
                    <span className="text-sm text-gray-900 text-right max-w-xs">
                      {orderData.shippingAddress}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-700">
                      Phone
                    </span>
                    <span className="text-sm text-gray-900">
                      {orderData.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading order tracking...</p>
          </div>
        </div>
      }
    >
      <TrackOrderContent />
    </Suspense>
  );
}
