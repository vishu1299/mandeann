"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Edit } from "lucide-react";

function ReturnReplaceContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get order number from URL parameters
  const orderNumberFromUrl =
    searchParams.get("orderNumber") || "457-269-596654";

  const [selectedReason, setSelectedReason] = useState("damaged");
  const [selectedAction, setSelectedAction] = useState("refund");
  const [selectedAddress, setSelectedAddress] = useState("josh");
  const [selectedDate, setSelectedDate] = useState("monday");
  const [selectedTime, setSelectedTime] = useState("10am");
  const [otherReason, setOtherReason] = useState("");

  const handleGoBack = () => {
    router.back();
  };

  const handleSubmit = () => {
    // Validate form
    if (!selectedReason) {
      toast.error("Please select a reason for return/replace");
      return;
    }

    if (!selectedAction) {
      toast.error("Please select refund or replacement");
      return;
    }

    if (!selectedAddress) {
      toast.error("Please select a pickup address");
      return;
    }

    if (!selectedDate) {
      toast.error("Please select a pickup date");
      return;
    }

    if (!selectedTime) {
      toast.error("Please select a pickup time");
      return;
    }

    if (selectedReason === "other" && !otherReason.trim()) {
      toast.error("Please specify the reason for return/replace");
      return;
    }

    // Handle form submission
    try {
      // Simulate API call
      console.log("Return/Replace request submitted", {
        orderNumber: orderNumberFromUrl,
        reason: selectedReason,
        otherReason: selectedReason === "other" ? otherReason : null,
        action: selectedAction,
        address: selectedAddress,
        date: selectedDate,
        time: selectedTime,
      });

      toast.success(
        "Return/Replace request submitted successfully! We will contact you soon."
      );

      // Reset form after successful submission
      setTimeout(() => {
        router.back();
      }, 2000);
    } catch {
      toast.error("Failed to submit return/replace request. Please try again.");
    }
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
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400"
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
              Return Or Replace Item
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Easily return or replace products in just a few steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Product Info */}
            <div className="space-y-8">
              {/* Product Card */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <p className="text-sm font-medium text-gray-900">
                    Delivered on 23, July, 2025
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
                      alt="EchoWave X1 Headphones"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      EchoWave X1, Active Noise Cancellation (ANC), Deep Bass &
                      Hi-Fi Sound
                    </h3>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      $54.43
                    </p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Color: ● Black</p>
                      <p>Connectivity: Wireless</p>
                      <p>QTY: 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-8">
              {/* Reason for Return/Replace */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Reason for Return / Replace
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Why are you returning this item?
                </p>

                <RadioGroup
                  value={selectedReason}
                  onValueChange={setSelectedReason}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="damaged" id="damaged" />
                    <Label htmlFor="damaged" className="text-sm">
                      Damaged / Defective Item
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wrong" id="wrong" />
                    <Label htmlFor="wrong" className="text-sm">
                      Wrong Item Delivered
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="missing" id="missing" />
                    <Label htmlFor="missing" className="text-sm">
                      Missing Parts / Accessories
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="size" id="size" />
                    <Label htmlFor="size" className="text-sm">
                      Size / Color Issue
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-described" id="not-described" />
                    <Label htmlFor="not-described" className="text-sm">
                      Not as Described
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="text-sm">
                      Other
                    </Label>
                  </div>
                </RadioGroup>

                {selectedReason === "other" && (
                  <div className="mt-4">
                    <Input
                      placeholder="If Other is selected this box appears"
                      value={otherReason}
                      onChange={(e) => setOtherReason(e.target.value)}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>

              {/* Choose what you want */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose what you want
                </h3>

                <RadioGroup
                  value={selectedAction}
                  onValueChange={setSelectedAction}
                  className="space-y-4"
                >
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="refund" id="refund" />
                      <Label htmlFor="refund" className="font-medium">
                        Refund
                      </Label>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">
                      &ldquo;We will send you a new item once we receive the
                      returned item.&rdquo;
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="replacement" id="replacement" />
                      <Label htmlFor="replacement" className="font-medium">
                        Replacement
                      </Label>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">
                      &ldquo;We will process a refund to your selected payment
                      method or wallet.&rdquo;
                    </p>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Address Selection Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Select Address for pickup
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              &ldquo;Our delivery partner will pick up the item from your
              address.&rdquo;
            </p>

            <div className="mb-4">
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 mb-4"
              >
                Add a new Address +
              </Button>
            </div>

            <RadioGroup
              value={selectedAddress}
              onValueChange={setSelectedAddress}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Josh Address */}
                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedAddress === "josh"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedAddress("josh")}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="josh" id="josh-address" />
                      <Label htmlFor="josh-address" className="font-medium">
                        Josh
                      </Label>
                    </div>
                    <Edit className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>214 Greenfield Avenue, Apt 3B</p>
                    <p>Maplewood Heights, NY 11245</p>
                    <p>United States</p>
                    <p className="mt-2">Phone Number: +1 5454567449</p>
                  </div>
                </div>

                {/* Dave Address */}
                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedAddress === "dave"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedAddress("dave")}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dave" id="dave-address" />
                      <Label htmlFor="dave-address" className="font-medium">
                        Dave
                      </Label>
                    </div>
                    <Edit className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>214 Greenfield Avenue, Apt 3B</p>
                    <p>Maplewood Heights, NY 11245</p>
                    <p>United States</p>
                    <p className="mt-2">Phone Number: +1 5454567449</p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Date & Time Selection */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Select Date & Time
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Choose a convenient date and time for your return pickup.
            </p>

            {/* Date Selection */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Select Date</h4>
              <RadioGroup
                value={selectedDate}
                onValueChange={setSelectedDate}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monday" id="monday" />
                  <Label htmlFor="monday" className="text-sm">
                    Monday, 04 Aug
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tuesday" id="tuesday" />
                  <Label htmlFor="tuesday" className="text-sm">
                    Tuesday, 05 Aug
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wednesday" id="wednesday" />
                  <Label htmlFor="wednesday" className="text-sm">
                    Wednesday, 06 Aug
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="thursday" id="thursday" />
                  <Label htmlFor="thursday" className="text-sm">
                    Thursday, 06 Aug
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="friday" id="friday" />
                  <Label htmlFor="friday" className="text-sm">
                    Friday, 07 Aug
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="saturday" id="saturday" />
                  <Label htmlFor="saturday" className="text-sm">
                    Saturday, 08 Aug
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Time Selection */}
            <div className="mb-8">
              <h4 className="font-medium text-gray-900 mb-3">Select Time</h4>
              <RadioGroup
                value={selectedTime}
                onValueChange={setSelectedTime}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10am" id="10am" />
                  <Label htmlFor="10am" className="text-sm">
                    10:00 AM - 12:00 PM
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="12pm" id="12pm" />
                  <Label htmlFor="12pm" className="text-sm">
                    12:00 PM - 03:00 PM
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3pm" id="3pm" />
                  <Label htmlFor="3pm" className="text-sm">
                    03:00 PM - 06:00 PM
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="6pm" id="6pm" />
                  <Label htmlFor="6pm" className="text-sm">
                    06:00 PM - 09:00 PM
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-base"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReturnReplacePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading return/replace form...</p>
          </div>
        </div>
      }
    >
      <ReturnReplaceContent />
    </Suspense>
  );
}
