"use client";

import Link from "next/link";
import React from "react";

type Step = { label: string; description: string; href: string };

export default function Stepper({
  steps,
  current,
}: {
  steps: Step[];
  current: number;
}) {
  return (
    <div className="mt-6 w-full">
      {/* Steps row */}
      <div className="mx-auto max-w-5xl flex items-start justify-center gap-8 md:gap-12 text-sm">
        {steps.map((s, idx) => {
          const isActive = idx === current;
          const isDone = idx < current;
          return (
            <Link
              key={s.label}
              href={s.href}
              className="flex flex-col items-center gap-2 group max-w-[220px] text-center"
            >
              <div
                className={`h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all duration-300
                ${
                  isActive
                    ? "border-[var(--primary)] text-[var(--primary)] ring-2 ring-[var(--primary)]/20"
                    : "border-gray-300 text-gray-400"
                }
                ${
                  isDone
                    ? "bg-[var(--primary)]/10 border-[var(--primary)] text-[var(--primary)]"
                    : ""
                }
              `}
              >
                {idx + 1}
              </div>
              <div className="text-center">
                <div
                  className={`font-semibold leading-5 ${
                    isActive
                      ? "text-[var(--secondary)]"
                      : "text-[var(--secondary)]"
                  }`}
                >
                  {s.label}
                </div>
                <div
                  className={`text-[11px] leading-4 ${
                    isActive ? "text-[var(--primary)]" : "text-gray-500"
                  }`}
                >
                  {s.description}
                </div>
                {/* Per-step underline sized to the text width */}
                <div className="mt-2 flex justify-center">
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-300 ${
                      isActive ? "bg-[var(--primary)]" : "bg-gray-200"
                    }`}
                    style={{
                      width: `${Math.min(48 + s.label.length * 6, 160)}px`,
                    }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
