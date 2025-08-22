"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash2, Plus, Minus } from "lucide-react";
import Stepper from "./components/Stepper";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      title:
        "boAt Rockersz 421 (2025 Launch), 40HRS Battery, v5.4 Bluetooth Headphones, Wireless Headphone with Mic",
      price: 100,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1518443895914-6bef27be0ea6?w=600&q=80&auto=format&fit=crop",
      productId: 101,
      qty: 1,
    },
  ]);
  const delivery = 10;
  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.qty * i.price, 0),
    [items]
  );
  const total = subtotal + delivery;
  const updateQty = (id: number, d: 1 | -1) =>
    setItems((l) =>
      l.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + d) } : it
      )
    );
  const removeItem = (id: number) => {
    setItems((l) => l.filter((i) => i.id !== id));
    toast.info("Item removed from cart");
  };

  const POPULAR = [
    {
      id: 11,
      title: "Headset T50RP MK3N - Black and Red",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1518443895914-6bef27be0ea6?w=600&q=80&auto=format&fit=crop",
      productId: 201,
    },
    {
      id: 12,
      title: "Wireless Gamepad – Black",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1585079542156-2755d9c8aff1?w=600&q=80&auto=format&fit=crop",
      productId: 202,
    },
    {
      id: 13,
      title: "iPhone – Space Black",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&auto=format&fit=crop",
      productId: 203,
    },
    {
      id: 14,
      title: "Earbuds – White",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155223168f?w=600&q=80&auto=format&fit=crop",
      productId: 204,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 font-roboto text-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center">Cart</h1>

        <Stepper
          current={0}
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
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-12 px-5 py-3 text-sm font-semibold bg-gray-50">
                <div className="col-span-6">Product Details</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">QTY</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>
              <div className="h-px bg-gray-200" />
              {items.map((it) => (
                <div key={it.id} className="px-5 py-4">
                  <div className="grid grid-cols-12 items-center gap-3">
                    <div className="col-span-6 flex gap-3">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          fill
                          src={it.image}
                          alt={it.title}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/products/${it.productId}`}
                          className="font-semibold hover:underline line-clamp-2"
                        >
                          {it.title}
                        </Link>
                      </div>
                    </div>
                    <div className="col-span-2 text-center font-semibold text-green-600">
                      ${it.price.toFixed(2)}
                    </div>
                    <div className="col-span-2 flex items-center justify-center gap-2">
                      <button
                        onClick={() => updateQty(it.id, -1)}
                        className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        aria-label="decrease"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center font-semibold">
                        {it.qty}
                      </span>
                      <button
                        onClick={() => updateQty(it.id, +1)}
                        className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        aria-label="increase"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="col-span-2 flex items-center justify-end gap-3">
                      <div className="font-semibold">
                        ${(it.qty * it.price).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeItem(it.id)}
                        className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
                        aria-label="remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-lg mb-3">Total Cart</h3>
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
                <div className="h-px bg-gray-200" />
                <div className="text-xs text-gray-600">
                  <div className="flex items-center justify-between py-1">
                    <span>Name</span>
                    <span className="text-[13px]">Martin Paez</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Address</span>
                    <span className="text-[13px] max-w-[220px] text-right">
                      12334 London, Britannia Raya
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/checkout"
                className="mt-4 w-full h-11 rounded-full bg-[var(--primary)] text-white font-semibold hover:opacity-90 flex items-center justify-center"
              >
                Checkout
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Popular Product</h3>
            <Link
              href="#"
              className="text-sm text-[var(--secondary)] hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {POPULAR.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-gray-200 p-4"
              >
                <Link href={`/products/${p.productId}`} className="block group">
                  <div className="relative h-36 w-full rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      fill
                      src={p.image}
                      alt={p.title}
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="mt-3 text-[13px] text-gray-500">
                    200 item sold
                  </div>
                  <div className="mt-1 font-semibold leading-snug line-clamp-2">
                    {p.title}
                  </div>
                </Link>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-[var(--secondary)] font-bold">
                    ${p.price.toFixed(2)}
                  </div>
                  <button
                    onClick={() => toast.success("Added to cart")}
                    className="h-8 px-3 text-xs rounded-full bg-[var(--primary)] text-white hover:opacity-90"
                  >
                    + Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ToastContainer position="top-right" autoClose={1500} />
      </div>
    </main>
  );
}
