"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X, Filter } from "lucide-react";
import { OrderItem } from "./types";
import Link from "next/link";

export function MyOrders() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleTrackPackage = (orderNumber: string) => {
    // Navigate to track order page with order number as query parameter
    router.push(`/track-order?orderNumber=${orderNumber}`);
  };

  const handleReturnReplace = (orderNumber: string) => {
    // Navigate to return/replace page with order number as query parameter
    router.push(`/return-replace?orderNumber=${orderNumber}`);
  };

  const handleGiveFeedback = (orderNumber: string) => {
    // Navigate to feedback page with order number as query parameter
    router.push(`/account/feedback?orderNumber=${orderNumber}`);
  };

  const handleCancelOrder = (orderNumber: string) => {
    // Navigate to cancel order page with order number as query parameter
    router.push(`/cancel-order?orderNumber=${orderNumber}`);
  };

  const orders: OrderItem[] = [
    {
      id: "1",
      orderNumber: "457-269-596654",
      orderDate: "24 July 2025",
      total: "$54.34",
      shipTo: "Dave",
      status: "Arriving Today",
      productName:
        "EchoWave X1, Active Noise Cancellation (ANC), Deep Bass & Hi-Fi Sound",
      productPrice: "$54.43",
      productColor: "Black",
      productConnectivity: "Wireless",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
      quantity: 1,
      packageHandedTo: "a receptionist",
    },
    {
      id: "2",
      orderNumber: "457-269-596654",
      orderDate: "04 June 2025",
      total: "$20.34",
      shipTo: "Dave",
      status: "Delivered",
      deliveryDate: "12, Feb, 2025",
      productName:
        "EchoWave X1, Active Noise Cancellation (ANC), Deep Bass & Hi-Fi Sound",
      productPrice: "$54.43",
      productColor: "Black",
      productConnectivity: "Wireless",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
      quantity: 1,
      packageHandedTo: "a receptionist",
    },
    {
      id: "3",
      orderNumber: "457-269-596654",
      orderDate: "08 June 2025",
      total: "$32.54",
      shipTo: "Dave",
      status: "Returned",
      deliveryDate: "12, Feb, 2025",
      productName:
        "EchoWave X1, Active Noise Cancellation (ANC), Deep Bass & Hi-Fi Sound",
      productPrice: "$54.43",
      productColor: "Black",
      productConnectivity: "Wireless",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
      quantity: 1,
      packageHandedTo: "a receptionist",
    },
    {
      id: "4",
      orderNumber: "457-269-596654",
      orderDate: "24 July 2025",
      total: "$54.34",
      shipTo: "Dave",
      status: "Cancelled",
      productName:
        "EchoWave X1, Active Noise Cancellation (ANC), Deep Bass & Hi-Fi Sound",
      productPrice: "$54.43",
      productColor: "Black",
      productConnectivity: "Wireless",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
      quantity: 1,
      packageHandedTo: "a receptionist",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Arriving Today":
        return "bg-orange-500 text-white";
      case "Delivered":
        return "bg-green-500 text-white";
      case "Shipped":
        return "bg-blue-500 text-white";
      case "Returned":
        return "bg-blue-400 text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
          My Orders
        </h1>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="relative flex-1 max-w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-300 w-full"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {activeFilters.map((filter) => (
              <div
                key={filter}
                className="flex items-center gap-1 bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => removeFilter(filter)}
                />
                <span>{filter}</span>
              </div>
            ))}

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4"
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Filter & Sort</span>
              <span className="sm:hidden">Filter</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4 sm:space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Order Header */}
            <div className="bg-gray-50 px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm">
                <div className="flex justify-between sm:block">
                  <p className="text-gray-600">Order Placed</p>
                  <p className="font-medium">{order.orderDate}</p>
                </div>
                <div className="flex justify-between sm:block">
                  <p className="text-gray-600">Total</p>
                  <p className="font-medium">{order.total}</p>
                </div>
                <div className="flex justify-between sm:block">
                  <p className="text-gray-600">Ship To</p>
                  <p className="font-medium">{order.shipTo}</p>
                </div>
              </div>
            </div>

            {/* Order Content */}
            <div className="p-3 sm:p-6">
              {/* Status and Order Info */}
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3 sm:gap-0">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-medium text-green-600">
                      {order.status}
                    </h3>
                    {order.status !== "Cancelled" && (
                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium self-start ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    )}
                  </div>
                  {order.packageHandedTo && (
                    <p className="text-xs sm:text-sm text-gray-600">
                      Package was handed to {order.packageHandedTo}
                    </p>
                  )}
                  {order.deliveryDate && order.status === "Delivered" && (
                    <p className="text-xs sm:text-sm text-gray-600">
                      Delivered on {order.deliveryDate}
                    </p>
                  )}
                </div>
                <div className="text-left sm:text-right w-full sm:w-auto">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Order ID: {order.orderNumber}
                  </p>
                  <Link href="/order-details">
                    <Button
                      variant="link"
                      className="text-blue-600 p-0 h-auto text-xs sm:text-sm cursor-pointer"
                    >
                      View Order Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex items-start gap-3 sm:gap-4">
                <Image
                  src={order.productImage}
                  alt={order.productName}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base line-clamp-2">
                    {order.productName}
                  </h4>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {order.productPrice}
                  </p>
                  <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <p>Color: {order.productColor}</p>
                    <p>Connectivity: {order.productConnectivity}</p>
                    <p>QTY: {order.quantity}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4">
                {order.status === "Delivered" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTrackPackage(order.orderNumber)}
                      className="text-blue-600 border-blue-600 text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      Track Package
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReturnReplace(order.orderNumber)}
                      className="text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      <span className="hidden sm:inline">
                        Return or Replace
                      </span>
                      <span className="sm:hidden">Return</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleGiveFeedback(order.orderNumber)}
                      className="text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      <span className="hidden sm:inline">Give Feedback</span>
                      <span className="sm:hidden">Feedback</span>
                    </Button>
                  </>
                )}
                {order.status === "Returned" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTrackPackage(order.orderNumber)}
                      className="text-blue-600 border-blue-600 text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      Track Package
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReturnReplace(order.orderNumber)}
                      className="text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      <span className="hidden sm:inline">
                        Return or Replace
                      </span>
                      <span className="sm:hidden">Return</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleGiveFeedback(order.orderNumber)}
                      className="text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      <span className="hidden sm:inline">Give Feedback</span>
                      <span className="sm:hidden">Feedback</span>
                    </Button>
                  </>
                )}
                {order.status === "Arriving Today" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTrackPackage(order.orderNumber)}
                      className="text-blue-600 border-blue-600 text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      Track Package
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCancelOrder(order.orderNumber)}
                      className="text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      <span className="hidden sm:inline">Cancel Order</span>
                      <span className="sm:hidden">Cancel</span>
                    </Button>
                  </>
                )}
                {order.status === "Cancelled" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTrackPackage(order.orderNumber)}
                      className="text-blue-600 border-blue-600 text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      Track Package
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReturnReplace(order.orderNumber)}
                      className="text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      <span className="hidden sm:inline">
                        Return or Replace
                      </span>
                      <span className="sm:hidden">Return</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleGiveFeedback(order.orderNumber)}
                      className="text-xs sm:text-sm px-2 sm:px-3 cursor-pointer"
                    >
                      <span className="hidden sm:inline">Give Feedback</span>
                      <span className="sm:hidden">Feedback</span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
