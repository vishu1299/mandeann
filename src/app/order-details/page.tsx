"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

function OrderDetailsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get order number from URL parameters
  const orderNumber = searchParams.get("orderNumber") || "457-269-596654";

  const handleGoBack = () => {
    router.back();
  };

  const handleTrackPackage = () => {
    router.push(`/track-order?orderNumber=${orderNumber}`);
  };

  const handleCancelOrder = () => {
    router.push(`/cancel-order?orderNumber=${orderNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={handleGoBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Orders</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Order Details
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              See complete information about your order.
            </p>
          </div>

          {/* Order Info */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Order Placed on</p>
                <p className="font-semibold text-gray-900">16 July,2025</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Arriving on Monday
            </h2>

            {/* Product Card */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&h=120&fit=crop"
                      alt="EchoWave X1 Headphones"
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    EchoWave X1, Active Noise Cancellation (ANC), Deep Bass &
                    Hi-Fi Sound
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    $54.43
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Color:</span> ● Black
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Connectivity:</span>{" "}
                      Wireless
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">QTY:</span> 1
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleTrackPackage}
                      variant="outline"
                      className="cursor-pointer border-gray-300 hover:border-gray-400"
                    >
                      Track Package
                    </Button>
                    <Button
                      onClick={handleCancelOrder}
                      variant="outline"
                      className="cursor-pointer border-gray-300 hover:border-gray-400"
                    >
                      Cancel Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Address */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Shipping Address
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>2118 Thornridge</p>
                <p>Cir. Syracuse,</p>
                <p>Connecticut</p>
                <p>35624</p>
              </div>
            </div>

            {/* Payment Method & Ticket Info */}
            <div className="space-y-8">
              {/* Payment Method */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Payment Method
                </h3>
                <p className="text-sm text-gray-600">Pay on Delivery</p>
              </div>

              {/* Ticket Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Ticket #2024-1234
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Order Status</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Order Status</span>
                    <span className="text-sm text-gray-900">In transit</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Order Date</span>
                    <span className="text-sm text-gray-900">Jan 14, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Delivery Est.</span>
                    <span className="text-sm text-gray-900">Jan 18, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Order Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Item(s) Subtotal:
                  </span>
                  <span className="text-sm text-gray-900">$25.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">QTY:</span>
                  <span className="text-sm text-gray-900">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Shipping:</span>
                  <span className="text-sm text-gray-900">$0.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Cash/Pay on Delivery
                  </span>
                  <span className="text-sm text-gray-900">$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Total:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    $50.00
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-gray-900">
                    Grand Total:
                  </span>
                  <span className="font-bold text-blue-600 text-lg">
                    $50.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading order details...</p>
          </div>
        </div>
      }
    >
      <OrderDetailsContent />
    </Suspense>
  );
}
