"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, Star } from "lucide-react";
import { toast } from "react-toastify";

export default function FeedbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get order number from URL parameters
  const orderNumber = searchParams.get("orderNumber") || "457-269-596654";

  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleGoBack = () => {
    router.back();
  };

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string);
            if (newImages.length === files.length) {
              setUploadedImages((prev) => [...prev, ...newImages].slice(0, 3)); // Max 3 images
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = () => {
    if (!review.trim()) {
      toast.error("Please write a review before submitting");
      return;
    }

    try {
      // Simulate API call
      console.log("Feedback submitted", {
        orderNumber,
        rating,
        review,
        images: uploadedImages,
      });

      toast.success(
        "Thank you for your feedback! Your review has been submitted successfully."
      );

      // Reset form after successful submission
      setTimeout(() => {
        router.back();
      }, 2000);
    } catch {
      toast.error("Failed to submit feedback. Please try again.");
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
              Feedback
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Share your experience to help us improve.
            </p>
          </div>

          {/* Write a Product Feedback Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Write a Product Feedback
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Package was handed to a receptionist
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Product Info */}
              <div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
                        EchoWave X1, Active Noise Cancellation (ANC), Deep Bass
                        & Hi-Fi Sound
                      </h3>
                      <p className="text-lg font-bold text-blue-600 mb-2">
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

              {/* Right Column - Rating and Review */}
              <div className="space-y-6">
                {/* Rating Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Please rate the quality of service for the order!
                  </h3>

                  <div className="flex items-center space-x-1 mb-6">
                    {[0, 1, 2, 3, 4].map((starIndex) => (
                      <button
                        key={starIndex}
                        onClick={() => handleStarClick(starIndex)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            starIndex < rating
                              ? "fill-orange-400 text-orange-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Write a review
                  </h3>

                  <Textarea
                    placeholder="What should other customers should know?"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Add Images/Video
            </h3>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
              <input
                type="file"
                id="image-upload"
                multiple
                accept="image/*,video/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center space-y-3"
              >
                <Upload className="w-8 h-8 text-gray-400" />
                <p className="text-gray-600 font-medium">
                  Upload or take some images
                </p>
              </label>
            </div>

            {/* Uploaded Images Preview */}
            {uploadedImages.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center space-x-4">
                  {uploadedImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200"
                    >
                      <Image
                        src={image}
                        alt={`Uploaded ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Empty slots */}
                  {Array.from({ length: 3 - uploadedImages.length }).map(
                    (_, index) => (
                      <div
                        key={`empty-${index}`}
                        className="w-16 h-16 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* Default empty slots when no images uploaded */}
            {uploadedImages.length === 0 && (
              <div className="mt-6">
                <div className="flex items-center space-x-4">
                  {/* Sample uploaded image */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=64&h=64&fit=crop"
                      alt="Sample"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Empty slots */}
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="w-16 h-16 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-base min-w-[120px]"
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
