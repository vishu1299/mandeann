"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, User, Phone } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type RegisterForm = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export default function Register() {
  const router = useRouter();
  const [showPwd, setShowPwd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({ mode: "onBlur" });

  const onSubmit = async (data: RegisterForm) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("OTP sent to your phone");
    setTimeout(() => router.push("/otp"), 600);
    console.log("register", data);
  };

  const onInvalid = () => {
    const msg =
      errors.name?.message ||
      errors.email?.message ||
      errors.phone?.message ||
      errors.password?.message ||
      "Please fix the highlighted fields";
    toast.error(msg as string);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-roboto text-[var(--secondary)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch px-4 py-10">
        {/* Left hero panel */}
        <section className="hidden md:flex rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[#7C5CB3] text-white p-8 relative overflow-hidden">
          <div className="relative z-10 self-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold">
              Create your account
            </h2>
            <p className="mt-2 text-white/90 text-sm lg:text-base max-w-sm">
              Join and enjoy fast checkout, order tracking and personalized
              deals.
            </p>
            <div className="mt-6 flex gap-3 text-xs lg:text-sm text-white/90">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                One‑tap Login
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                Exclusive Offers
              </span>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-xl" />
        </section>

        {/* Right form card */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-1">Sign Up</h1>
          <p className="text-sm text-gray-500">
            Create your account to continue.
          </p>
          <div className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 shadow-sm">
            {/* Full name */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Full name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full pl-11 pr-4 h-11 rounded-full border border-[var(--primary)] bg-white text-[var(--secondary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Enter at least 2 characters",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 h-11 rounded-full border border-[var(--primary)] bg-white text-[var(--secondary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Phone
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone className="w-5 h-5" />
                </span>
                <input
                  type="tel"
                  placeholder="9876543210"
                  className="w-full pl-11 pr-4 h-11 rounded-full border border-[var(--primary)] bg-white text-[var(--secondary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Enter 10-15 digit phone number",
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phone.message as string}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-4 pr-11 h-11 rounded-full border border-[var(--primary)] bg-white text-[var(--secondary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[var(--secondary)]"
                >
                  {showPwd ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            {/* Sign Up button */}
            <button
              onClick={handleSubmit(onSubmit, onInvalid)}
              disabled={isSubmitting}
              className="w-full h-11 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
            <p className="mt-6 text-sm text-gray-600">
              Do you have an account?{" "}
              <Link
                href="/login"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Sign In
              </Link>
            </p>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              pauseOnHover
              newestOnTop
            />

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 border-t border-gray-300" />
              <span className="text-sm text-gray-500">Or</span>
              <div className="flex-1 border-t border-gray-300" />
            </div>

            {/* Alternate sign-ins */}
            <section className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 h-10 rounded-full border border-gray-300 hover:bg-gray-50 text-[var(--secondary)] font-medium flex items-center justify-center gap-2">
                <User className="w-4 h-4" /> Enter as a Guest
              </button>
              <button className="flex-1 h-10 rounded-full border border-gray-300 hover:bg-gray-50 text-[var(--secondary)] font-medium flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.9 32.7 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C33.6 6 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.5z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.3 14.7l6.6 4.8C14.6 16.2 18.9 14 24 14c3 0 5.8 1.1 7.9 3l5.7-5.7C33.6 6 28.9 4 24 4 16 4 8.9 8.5 6.3 14.7z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.3 0 10.2-2 13.8-5.2l-6.4-5.3C29.2 35.3 26.7 36 24 36c-5.3 0-9.8-3.4-11.3-8.1l-6.6 5.1C8.8 39.6 15.9 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-1.3 4.2-5.8 8-11.3 8-5.3 0-9.8-3.4-11.3-8.1l-6.6 5.1C8.8 39.6 15.9 44 24 44c11.1 0 20-8.9 20-20 0-1.3-.1-2.5-.4-3.5z"
                  />
                </svg>
                Sign Up with Google
              </button>
            </section>
          </div>

          <ToastContainer
            position="top-right"
            autoClose={2000}
            pauseOnHover
            newestOnTop
          />
        </section>
      </div>
    </main>
  );
}
