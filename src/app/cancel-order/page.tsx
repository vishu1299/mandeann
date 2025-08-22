"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Info } from "lucide-react";
import { toast } from "react-toastify";

function CancelOrderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get order number from URL parameters
  const orderNumber = searchParams.get("orderNumber") || "457-269-596654";

  const [selectedReason, setSelectedReason] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const handleGoBack = () => {
    router.back();
  };

  const handleCancelOrder = () => {
    if (!selectedReason) {
      toast.error("Please select a reason for cancellation");
      return;
    }

    try {
      // Simulate API call
      console.log("Order cancelled", {
        orderNumber,
        reason: selectedReason,
        comments: additionalComments,
      });

      toast.success(
        "Order cancelled successfully! Refund will be processed within 3-5 business days."
      );

      // Navigate back after successful cancellation
      setTimeout(() => {
        router.back();
      }, 2000);
    } catch {
      toast.error("Failed to cancel order. Please try again.");
    }
  };

  const handleKeepItem = () => {
    router.back();
  };

  const cancellationReasons = [
    "Changed my mind",
    "Found a better price elsewhere",
    "Ordered by mistake",
    "No longer needed",
    "Delivery taking too long",
    "Product not as described",
    "Other",
  ];

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
              Cancel Order
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              See complete information about your order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Order Info */}
            <div>
              {/* Order Info */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Order Placed on
                    </p>
                    <p className="font-semibold text-gray-900">16 July,2025</p>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Arriving on Monday
                </h2>
              </div>

              {/* Product Card */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
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
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      EchoWave X1, Active Noise Cancellation (ANC), Deep Bass &
                      Hi-Fi Sound
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      $54.43
                    </p>

                    <div className="space-y-2">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Cancellation Form */}
            <div className="space-y-6">
              {/* Cancellation Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Cancellation Details
                </h3>

                <div className="space-y-4">
                  <Select
                    value={selectedReason}
                    onValueChange={setSelectedReason}
                  >
                    <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      {cancellationReasons.map((reason) => (
                        <SelectItem key={reason} value={reason}>
                          {reason}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Addition Comments{" "}
                  <span className="text-gray-500 font-normal">(Optional)</span>
                </h3>

                <Textarea
                  placeholder="Please provide any additional information about your cancellation..."
                  value={additionalComments}
                  onChange={(e) => setAdditionalComments(e.target.value)}
                  className="min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Info Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p>
                      Please note that cancellation is only possible if your
                      order hasn not been shipped. Once shipped, you will need
                      to initiate a return instead.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleCancelOrder}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium cursor-pointer flex-1 sm:flex-none"
                >
                  Cancel Order
                </Button>
                <Button
                  onClick={handleKeepItem}
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full font-medium cursor-pointer flex-1 sm:flex-none"
                >
                  Keep Item
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CancelOrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading cancellation form...</p>
          </div>
        </div>
      }
    >
      <CancelOrderContent />
    </Suspense>
  );
}
