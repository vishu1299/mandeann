"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CreditCard, Landmark, SmartphoneNfc, Truck, Tag } from "lucide-react";
import Stepper from "../cart/components/Stepper";

export default function CheckoutPage() {
  const router = useRouter();
  // Demo values; can be wired to cart state
  const [subtotal] = useState(100);
  const delivery = 10;
  const coupon = 0;
  const total = useMemo(() => subtotal + delivery - coupon, [subtotal, coupon]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{
    name: string;
    email: string;
    phone: string;
    address: string;
  }>();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Order placed successfully");
    router.push("/confirmation");
  };

  return (
    <main className="min-h-screen bg-gray-50 font-roboto text-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center">Checkout</h1>

        <Stepper
          current={1}
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

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 p-5 space-y-4"
          >
            <h2 className="font-bold text-lg">Shipping Details</h2>

            {/* contact row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full h-11 rounded-full border border-[var(--primary)] px-4"
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full h-11 rounded-full border border-[var(--primary)] px-4"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full h-11 rounded-full border border-[var(--primary)] px-4"
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Address
                </label>
                <input
                  {...register("address", { required: "Address is required" })}
                  className="w-full h-11 rounded-full border border-[var(--primary)] px-4"
                />
                {errors.address && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            {/* delivery options */}
            <div className="mt-2">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Truck className="w-4 h-4" /> Delivery Options
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "std", t: "Standard (3-5 days)", c: 0 },
                  { id: "exp", t: "Express (1-2 days)", c: 6 },
                ].map((o) => (
                  <label
                    key={o.id}
                    className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3 hover:border-[var(--primary)] cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="delivery"
                      defaultChecked={o.id === "std"}
                    />
                    <div className="flex-1">
                      <div className="font-medium">{o.t}</div>
                      <div className="text-xs text-gray-500">
                        ${o.c.toFixed(2)} charge
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* payment methods */}
            <div className="mt-2">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Payment Method
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "card",
                    label: "Card",
                    icon: <CreditCard className="w-4 h-4" />,
                  },
                  {
                    id: "upi",
                    label: "UPI",
                    icon: <SmartphoneNfc className="w-4 h-4" />,
                  },
                  {
                    id: "cod",
                    label: "Cash",
                    icon: <Landmark className="w-4 h-4" />,
                  },
                ].map((m) => (
                  <label
                    key={m.id}
                    className="flex items-center justify-center gap-2 h-11 rounded-full border border-gray-200 hover:border-[var(--primary)] cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="hidden"
                      defaultChecked={m.id === "card"}
                    />
                    {m.icon}
                    <span className="text-sm">{m.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* coupon */}
            <div className="mt-2">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Tag className="w-4 h-4" /> Coupon
              </div>
              <div className="flex items-center gap-2">
                <input
                  placeholder="Enter code"
                  className="flex-1 h-11 rounded-full border border-[var(--primary)] px-4"
                />
                <button
                  type="button"
                  className="h-11 px-5 rounded-full border border-gray-300"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 px-6 rounded-full bg-[var(--primary)] text-white font-semibold hover:opacity-90 disabled:opacity-60"
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </button>
            </div>
          </form>

          {/* Right: summary */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-lg mb-3">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Delivery Charge</span>
                  <span className="font-semibold">${delivery.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                By placing your order you agree to our Terms & Conditions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
