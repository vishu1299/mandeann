"use client";

import React, { useEffect, useRef, useState } from "react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OTPPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(30);
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (idx: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const next = [...code];
      next[idx] = value;
      setCode(next);
      if (value && idx < 5) inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const onContinue = () => {
    if (code.some((c) => c === "")) {
      toast.error("Please enter the 6-digit code");
      return;
    }
    toast.success("OTP verified");
    setTimeout(() => router.push("/"), 700);
  };

  const resend = () => {
    if (timeLeft > 0) return;
    setTimeLeft(30);
    setCode(["", "", "", "", "", ""]);
    inputsRef.current[0]?.focus();
    toast.info("New OTP sent");
  };

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-start pt-8 sm:pt-12 font-roboto">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--secondary)] mb-6">
        OTP Verification
      </h1>

      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <p className="text-center text-gray-700">
          We&apos;ve sent a 6-digit OTP to{" "}
          <span className="font-semibold text-[var(--secondary)]">
            +91 98765 43210
          </span>
          <Pencil className="inline w-4 h-4 ml-2 text-gray-500" />
        </p>
        <p className="text-center text-gray-500 text-sm mt-2">
          Enter the code below to verify your login.
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          {code.map((val, i) => (
            <input
              key={i}
              ref={(el) => {
                inputsRef.current[i] = el;
              }}
              value={val}
              onChange={(e) => handleChange(i, e.target.value.slice(-1))}
              onKeyDown={(e) => handleKeyDown(i, e)}
              inputMode="numeric"
              maxLength={1}
              className="w-12 h-12 sm:w-14 sm:h-14 text-center rounded-lg border border-[var(--primary)] text-lg"
            />
          ))}
        </div>

        <p className="text-center text-gray-700 mt-4">
          Code will expire in:{" "}
          <span className="font-semibold">
            00:{String(timeLeft).padStart(2, "0")}
          </span>
        </p>

        <button
          onClick={onContinue}
          className="mt-5 w-full h-11 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold"
        >
          Continue
        </button>

        <div className="text-center mt-4 text-sm text-gray-600">
          Didn&apos;t received code?{" "}
          <button
            onClick={resend}
            disabled={timeLeft > 0}
            className="font-semibold text-[var(--secondary)] disabled:text-gray-400"
          >
            Resend
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        newestOnTop
      />
    </div>
  );
}
