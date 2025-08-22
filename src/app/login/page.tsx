"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Phone, LogIn } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ mode: "onBlur" });

  const onSubmit = async (data: LoginForm) => {
    // Demo: pretend to log in
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Signed in successfully");
    console.log("login", data);
  };

  const onInvalid = () => {
    const msg =
      errors.email?.message ||
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
              Welcome back
            </h2>
            <p className="mt-2 text-white/90 text-sm lg:text-base max-w-sm">
              Sign in to continue your shopping journey. Your cart and wishlist
              are synced across devices.
            </p>
            <div className="mt-6 flex gap-3 text-xs lg:text-sm text-white/90">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                Secure Login
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                Fast Checkout
              </span>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-xl" />
        </section>

        {/* Right form card */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--secondary)] mb-6">
            Sign In
          </h1>

          <p className="text-sm text-gray-500">
            Welcome back! Please enter your details to continue.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            className="mt-5 space-y-4"
          >
            <div>
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

            <div>
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

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-[var(--secondary)]">
                <input
                  type="checkbox"
                  className="accent-[var(--primary)] w-4 h-4"
                  defaultChecked
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-[var(--primary)] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />{" "}
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 border-t border-gray-300" />
            <span className="text-sm text-gray-500">Or</span>
            <div className="flex-1 border-t border-gray-300" />
          </div>

          {/* Social / Alternate sign-ins */}
          <div className="space-y-3">
            <button className="w-full h-10 rounded-full border border-gray-300 hover:bg-gray-50 text-[var(--secondary)] font-medium flex items-center justify-center gap-2">
              {/* Google logo */}
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
              Sign In with Google
            </button>
          </div>
          {/* Phone sign-in (optional) */}
          <button className="w-full mt-3 h-10 rounded-full border border-gray-300 hover:bg-gray-50 text-[var(--secondary)] font-medium flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> Sign in with Phone Number
          </button>

          {/* Sign up link */}
          <p className="mt-6 text-sm text-gray-600">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/register"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Sign Up
            </Link>
          </p>

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
