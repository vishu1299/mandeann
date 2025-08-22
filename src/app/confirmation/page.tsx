"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Stepper from "../cart/components/Stepper";

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-roboto text-[var(--secondary)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold">Order Confirmation</h1>

        <Stepper
          current={2}
          steps={[
            {
              label: "Shopping Cart",
              description: "Organize Your List of Items",
              href: "/cart",
            },
            {
              label: "Shipping & Checkout",
              description: "Examine Your List of Items",
              href: "/checkout",
            },
            {
              label: "Confirmation",
              description: "Examine and Send in Your Order",
              href: "/confirmation",
            },
          ]}
        />

        <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center justify-center text-[var(--primary)]">
            <CheckCircle2 className="w-16 h-16" />
          </div>
          <h2 className="mt-4 text-2xl font-bold">
            Thank you for your purchase!
          </h2>
          <p className="mt-2 text-gray-600">
            Your order has been placed successfully. We’ve sent a confirmation
            email with your order details. You will be notified once it ships.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-gray-500">Order ID</div>
              <div className="font-semibold">#EC-24193</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-gray-500">Payment</div>
              <div className="font-semibold">Paid</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-gray-500">Estimated Delivery</div>
              <div className="font-semibold">3–5 business days</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/shop"
              className="h-10 px-5 flex items-center justify-center rounded-full border border-gray-300 text-sm"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="h-10 px-5 flex items-center justify-center rounded-full bg-[var(--primary)] text-white text-sm"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
